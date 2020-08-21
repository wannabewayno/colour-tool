require('../../mathExtension')();
const getAlpha = require('./getAlpha');
const getBeta = require('./getBeta');

module.exports = (R,G,B) => {
    const rad2deg = rad => rad*180/Math.PI;

    const alpha = getAlpha(R,G,B);
    const beta = getBeta(R,G,B);

    let H2 = Math.atan2(beta,alpha);
    H2 = H2 > 0? rad2deg(H2) : 360 - rad2deg(-H2);
    H2 = H2 === 360? 0: H2;
    H2 = Math.decimal(H2,1);
    
    return H2;
}

