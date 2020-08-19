const getHue = require('./lib/getHue');

module.exports = (R,G,B) => {

    R = Math.decimal(R/255,4);
    G = Math.decimal(G/255,4);
    B = Math.decimal(B/255,4);
    
    const max = Math.max(R, G, B);
    const min = Math.min(R, G, B);
    const chroma = max - min;

    const H = getHue(R, G, B, max, chroma);
    const I = (R + G + B)/3;
    const S = I === 0 ? 0 : (1 - min/I);

    return [H,S,I];
}