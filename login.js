

let userOne = {
    email: 'mchio421@gmail.com',
    name: 'samouchka',
    login() {
        console.log(this.email, `has logged in`);
    },
    logout() {
        console.log(this.email, `has logged out`);
    }
};

console.log(userOne.login);