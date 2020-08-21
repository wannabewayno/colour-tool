require('../mathExtension')();

const getHue = require('./lib/getHue');
const getSaturation = require('./lib/getSaturation');
const getLightness =  require('./lib/getLightness');


module.exports = function RGB2HSL( R, G, B ) {
    R = Math.decimal(R/255,4);
    G = Math.decimal(G/255,4);
    B = Math.decimal(B/255,4);
    
    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    const chroma   = max - min;

    const hue = getHue( R, G, B, max, chroma );
    let lightness = getLightness(max,min)
    const saturation = Math.decimal(getSaturation(chroma,lightness) * 100,1);
    lightness = Math.decimal(lightness*100,1);

    return [
        hue,
        saturation > 100? 100: saturation < 0? 0: saturation,
        lightness > 100? 100: lightness < 0 ? 0: lightness,
    ];
}
  