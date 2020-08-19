require('../mathExtension')();

module.exports = (H,S,I) => {
    H /= 60;  // range from [0,360] to [0,6];
    S /= 100; // range from [0,100] to [0,1];
    I /= 100; // range from [0,100] to [0,1];

    const Z = 1 - Math.abs(H % 2 - 1);
    const chroma = (3 * I * S)/ 1 + Z;
    const X = chroma * Z;

    let RGB;
    switch(Math.floor(H)) {   
        case 0: RGB = [chroma, X, 0]; break;   
        case 1: RGB = [X, chroma, 0]; break;   
        case 2: RGB = [0, chroma, X]; break;   
        case 3: RGB = [0, X, chroma]; break;   
        case 4: RGB = [X, 0, chroma]; break;   
        case 5: RGB = [chroma, 0, X]; break;
    }
    const m = I * (1 - S);
    RGB.map(value => value + m);

    return RGB;
}