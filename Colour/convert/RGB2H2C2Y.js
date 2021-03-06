require('../mathExtension')();
const getC2 = require('./lib/getC2');
const getH2 = require('./lib/getH2');
const getLuma = require('./lib/getLuma');

module.exports = (R,G,B,luma) => {
    R /= 255; // from range [0,255] to [0,1];
    G /= 255; // from range [0,255] to [0,1];
    B /= 255; // from range [0,255] to [0,1];

    luma = !luma? '601':luma;

    const H2 = getH2(R,G,B);
    const C2 = getC2(R,G,B);
    const Y  = getLuma(R,G,B,luma);

    return [
        H2,
        C2,
        Math.decimal(Y * 100,1)
    ];

}