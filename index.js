const Order = require('./models/order');
const descisioner = require('./controllers/descisioner');

//TODO get from file
const o = {
    id: 3,
    browser: "chrome",
    amount: 250,
    email: "eliavlavi@gmail.com"
};

const order = new Order(o.id, o.browser, o.amount, o.email);

const reject = descisioner(order);

console.log(reject);