let userRepo = {
    users: [],

    find: function(username, password) {
        let matchingUsers = this.users.filter(
            u => u.username === username && u.password === password);
        return matchingUsers[0];
    },

    addUser: function(username, password, jsonWallet, success, error) {
        let existingUser = this.users.filter(
            u => u.username === username)[0];
        if (!existingUser) {
            let user = {username, password, jsonWallet};
            this.users.push(user);
            success(user);
        }
        else
            error("Username unavailable: " + username);
    }
};

module.exports = userRepo;
