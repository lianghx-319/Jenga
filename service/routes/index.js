const helloHapi = require("./hello-world.js");
const shopsApi = require("./shops.js");
const ordersApi = require("./orders.js");

module.exports = [
    ...helloHapi,
    ...shopsApi,
    ...ordersApi
]
