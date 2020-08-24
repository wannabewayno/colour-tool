require('../mathExtension')();
const { LCH_to_Lab } = require('./lib/helpers');

module.exports= (...LCH) => {
    console.log(LCH);
    return LCH_to_Lab(LCH).map(channel => Math.decimal(channel,1));
}