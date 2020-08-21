require('../mathExtension');
const getHue = require('./lib/getHue');

module.exports = (Red,Green,Blue) => {

    Red   /= 255;
    Green /= 255;
    Blue  /= 255;

    const max = Math.max(Red, Green, Blue);
    const min = Math.min(Red, Green, Blue);
    const chroma   = max - min;

    W = Math.decimal(min * 100,1);
    B = Math.decimal((1 - max) * 100,1);

    if(W === 1 - B) return [undefined,W,B];
    
    H = getHue(Red, Green, Blue, max, chroma);

    return [H,W,B]
}