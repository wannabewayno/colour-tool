require('../mathExtension')();
const getH2 = require('./lib/getHue');

module.exports = (R,G,B) => {

    R = Math.decimal(R/255,4);
    G = Math.decimal(G/255,4);
    B = Math.decimal(B/255,4);
    
    const min = Math.min(R, G, B);

    

    const I = (R + G + B)/3;
    const S = I === 0 ? 0 : (1 - min/I);

    return [
        Math.round(H2),
        Math.decimal(S * 100,1),
        Math.decimal(I * 100,1),
    ];
}