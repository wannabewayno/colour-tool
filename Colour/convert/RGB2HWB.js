require('../mathExtension');
const getHue = require('./lib/getHue');

module.exports = (Red,Green,Blue) => {

    Red   /= 255;
    Green /= 255;
    Blue  /= 255;

    const max = Math.max(Red, Green, Blue);
    const min = Math.min(Red, Green, Blue);
    const chroma   = max - min;

    H = getHue(Red, Green, Blue, max, chroma);
    W = Math.round(min * 100);
    B = Math.round((1 - max) * 100);

    return [H,W,B]
}