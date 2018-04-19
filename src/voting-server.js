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

// The userRepo holds the user and user validation logic
const userRepo = require('./user-repo');

app.post('/login', (req, res) => {
    let user = userRepo.find(
        req.body.username, req.body.password);
    if (!user)
        return res.status(HttpStatus.NOT_FOUND).json(
            {errorMsg: "Invalid username / password"});
    return res.json({jsonWallet: user.jsonWallet});
});

app.post('/register', (req, res) => {
    userRepo.addUser(
        req.body.username, req.body.password, req.body.jsonWallet,
        function success(user) {
            return res.json({"msg": "User successfully registered"});
        },
        function error(errorMsg) {
            return res.status(HttpStatus.CONFLICT).json({errorMsg});
        }
    );
});

const server = app.listen(80, function(){
    console.log('Server started: http://localhost:' + server.address().port);
});
