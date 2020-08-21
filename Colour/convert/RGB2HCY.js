const getHue = require('./lib/getHue');
const getLuma = require('./lib/getLuma');

module.exports = (R,G,B,luma) => {
    R /= 255; // from range [0,255] to [0,1];
    G /= 255; // from range [0,255] to [0,1];
    B /= 255; // from range [0,255] to [0,1];

    luma = !luma? '601':luma;

    const H  = getHue(R,G,B);
    const C  = Math.max(R,G,B) - Math.min(R,G,B);
    const Y  = getLuma(R,G,B,luma);

    return [
        H,
        Math.decimal(C * 100, 1),
        Math.decimal( Y * 100,1)
    ];
}