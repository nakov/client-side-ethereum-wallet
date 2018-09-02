// Create the Express app
const express = require("express");
const app = express();

// Enable JSON data in the HTTP request body
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// Include HTTP status codes (like 404 Not Found)
const HttpStatus = require('http-status-codes');

// Enable static access to the "/public" folder
app.use(express.static('../public'));

// The walletRepo holds the all available encrypted wallets
const walletRepo = require('./wallet-repo');

app.post('/login', (req, res) => {
    let wallet = walletRepo.find(req.body.walletId);
    if (wallet) {
		console.log('Login successful. Wallet Id: ' + req.body.walletId);
		res.json({jsonWallet: wallet.jsonWallet});
	}
    else {
		console.log('Login failed. Wallet Id: ' + req.body.walletId);
        res.status(HttpStatus.NOT_FOUND).json({errorMsg: "Invalid wallet Id"});
	}
});

app.post('/register', (req, res) => {
    walletRepo.addWallet(req.body.walletId, req.body.jsonWallet,
        function success(wallet) {
			console.log('Register successful. Wallet Id: ' + req.body.walletId);
            res.json({"msg": "Wallet successfully registered"});
        },
        function error(errorMsg) {
			console.log('Register failed. Wallet Id: ' + req.body.walletId);
            res.status(HttpStatus.CONFLICT).json({errorMsg});
        }
    );
	console.log('Available wallets at the server:', walletRepo.wallets)
});

const server = app.listen(80, function(){
    console.log('Wallet server started: http://localhost:' + 
		server.address().port);
});
