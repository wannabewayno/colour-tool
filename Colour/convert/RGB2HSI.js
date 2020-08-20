require('../mathExtension')();
const getHue = require('./lib/getHue');

module.exports = (R,G,B) => {

    R = Math.decimal(R/255,4);
    G = Math.decimal(G/255,4);
    B = Math.decimal(B/255,4);
    
    const min = Math.min(R, G, B);

    const rad2deg = rad => rad*180/Math.PI;

    const alpha = (2*R - G - B)/2 
    const beta = (G - B) * Math.pow(3,0.5)/2

    let H2 = Math.atan2(beta,alpha);
    H2 = H2 > 0? rad2deg(H2) : 360 - rad2deg(-H2);
    H2 = H2 === 360? 0: H2;
    H2 = Math.decimal(H2,1);

    const I = (R + G + B)/3;
    const S = I === 0 ? 0 : (1 - min/I);

    return [
        Math.round(H2),
        Math.decimal(S * 100,1),
        Math.decimal(I * 100,1),
    ];
}