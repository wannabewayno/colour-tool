require('../mathExtension')();

module.exports = (H,SL,L) => {
    SL/=100;
    L /=100;

    const V = L + SL * Math.min(L, 1 - L);
    const SV = V === 0 ? 0 : 2 * (1 - L/V);

    return [
        H,
        Math.round(SV * 100),
        Math.round(V * 100)
    ]
};