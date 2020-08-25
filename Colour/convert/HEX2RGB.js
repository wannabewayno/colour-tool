module.exports =  (R16,G16,B16) => {
    const R = parseInt(R16,16);
    const G = parseInt(G16,16);
    const B = parseInt(B16,16);

    return [
        R < 0 ? 0:R,
        G < 0 ? 0:G,
        B < 0 ? 0:B,
    ];
} 