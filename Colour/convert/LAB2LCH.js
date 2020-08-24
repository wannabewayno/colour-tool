require('../mathExtension')();
const { Lab_to_LCH } = require('./lib/helpers');

module.exports= (...LAB) => {
    return Lab_to_LCH(LAB).map(channel => Math.decimal(channel,1));
}