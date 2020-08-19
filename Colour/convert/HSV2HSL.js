require('../mathExtension')();

module.exports = (H,SV,V) => {
    const L = V * (1 - SV/2);
    const SL = L === 0 ||L === 1 ? 0 : (V - L)/Math.min(L,1-L);

    return [
        H,
        Math.round(SL),
        Math.round(L)
    ]
};