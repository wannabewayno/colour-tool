require('../../mathExtension')();
const getAlpha = require('./getAlpha');
const getBeta = require('./getBeta');

module.exports = (R,G,B) => {
    const alpha = getAlpha(R,G,B);
    const beta = getBeta(R,G,B);

    const C2 = Math.hypot(alpha,beta);

    return Math.decimal(C2 * 100,1);
}