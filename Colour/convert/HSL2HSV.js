const { mintcream } = require('../destructureColour/CSSColourTable');

require('../mathExtension')();

module.exports = (H,SL,L) => {

    const V = L + SL * min(L, 1 - L);
    const SV = V === 0 ? 0 : 2 * (1 - L/V);

    return [
        H,
        SV,
        V
    ]
};