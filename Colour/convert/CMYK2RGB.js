require('../mathExtension')();

module.exports = (C,M,Y,K) => {
    C /= 100;
    M /= 100;    
    Y /= 100;
    K /= 100;
    
    const RGBChannel = CMYChannel => Math.round( (1 - CMYChannel) * (1 - K) * 255 );
    const R = RGBChannel(C);
    const G = RGBChannel(M);
    const B = RGBChannel(Y);

    return [
        R < 0 ? 0:R,
        G < 0 ? 0:G,
        B < 0 ? 0:B,
    ];
}