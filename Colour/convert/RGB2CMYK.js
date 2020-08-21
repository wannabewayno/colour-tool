require('../mathExtension')();

module.exports = (R,G,B) => {
    R /= 255;   
    G /= 255;
    B /= 255;

    let K = 1 - Math.max(R,G,B);

    const CMYChannel = RGBChannel => (1 - RGBChannel - K) / (1 - K);
  
    const C = Math.decimal( CMYChannel(R) * 100 ,1); 
    const M = Math.decimal( CMYChannel(G) * 100 ,1);
    const Y = Math.decimal( CMYChannel(B) * 100 ,1);
          K = Math.decimal( K * 100 ,1);

    return [
        isNaN(C)? 0:C,
        isNaN(M)? 0:M,
        isNaN(Y)? 0:Y,
        isNaN(K)? 0:K
    ]
}