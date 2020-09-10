var Bee = require("./Bee");

var ForagerBee = function () {};

ForagerBee.prototype = Object.create(Bee.prototype);

module.exports = ForagerBee;
