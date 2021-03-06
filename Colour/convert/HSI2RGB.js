require('../mathExtension')();

module.exports = (H,S,I) => {
    S /= 100; // range from [0,100] to [0,1];
    I /= 100; // range from [0,100] to [0,1];
    
    const deg2rad = deg => deg * Math.PI/180;

    // exception for Satutation of 0. (neutral colour, all the same)
    if(S === 0) return [Math.round(I*255),Math.round(I*255),Math.round(I*255)];

    const X = I*(1 - S);
    const Y = H => { return I * (
        1 + (
            S * Math.cos(deg2rad(H)) / Math.cos(deg2rad(60) - deg2rad(H))
        )
    )};
    const Z = H => 3 * I - (X + Y(H));

    const h = Math.floor(H/120);  // range from [0,360] to [0,3];
    
    const RGB = [];
    switch(h) {   
        case 0:{
            RGB[0] = Y(H);
            RGB[1] = Z(H);
            RGB[2] = X;
            break;
        };   
        case 1:{
            RGB[0] = X;
            RGB[1] = Y(H - 120);
            RGB[2] = Z(H - 120);
            break;
        };   
        case 2:{
            RGB[0] = Z(H - 240);
            RGB[1] = X;
            RGB[2] = Y(H - 240);
            break;
        };
    }
    return RGB.map(channel => Math.round(channel * 255)).map(channel => channel < 0 ? 0 : channel);
}
