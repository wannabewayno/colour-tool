require('../mathExtension')();
const getHue = require('./lib/getHue');

/**
 * @param {Number} R - Red value [0,255] 
 * @param {Number} G - Green value [0,255]
 * @param {Number} B - Blue Value [0,255]
 * @return {Array} - [H,S,V] where H:[0,360], S:[0,100], V:[0,100]
 */
module.exports = (R,G,B) => {
    R /= 255;
    G /= 255;
    B /= 255;

    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    const chroma = max - min;

    const hue = getHue( R, G, B, max, chroma );

    // Exception: H is undefined when S is 0;
    if( chroma === 0) return [0, 0, Math.round(max * 100)];

    return [
        hue,                               //H
        Math.decimal(chroma/max * 100,1),  //S
        Math.decimal(max * 100,1)          //V
    ];


}