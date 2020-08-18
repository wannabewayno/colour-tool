require('../mathExtension')();

module.exports = (R,G,B) => {
    R /= 255;   
    G /= 255;
    B /= 255;

    let K = 1 - Math.max(R,G,B);

    const CMYChannel = RGBChannel => (1 - RGBChannel - K) / (1 - K);
  
    const C = Math.round( CMYChannel(R) * 100 ); 
    const M = Math.round( CMYChannel(G) * 100 );
    const Y = Math.round( CMYChannel(B) * 100 );
          K = Math.round( K * 100 );

    return [
        isNaN(C)? 0:C,
        isNaN(M)? 0:M,
        isNaN(Y)? 0:Y,
        isNaN(K)? 0:K
    ]
}