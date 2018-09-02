let walletRepo = {
    wallets: [],

    find: function(walletId) {
        let matchingWallets = this.wallets.filter(
            w => w.walletId === walletId);
        return matchingWallets[0];
    },

    addWallet: function(walletId, jsonWallet, success, error) {
        if (!this.find(walletId)) {
            let wallet = {walletId, jsonWallet};
            this.wallets.push(wallet);
            success(wallet);
        }
        else
            error("Wallet aldready exists: " + walletId);
    }
};

module.exports = walletRepo;
