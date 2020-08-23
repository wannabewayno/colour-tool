const getLuma = require("./lib/getLuma");

module.exports = (H,C,Y,luma) => {
    H /= 60;  // range from [0,360] to [0,6]
    C /= 100; // range from [0,100] to [0,1]

    X = C * (1 - Math.abs(H % 2 - 1));

    let RGB;
    switch(Math.floor(H)){
        case 0:{ RGB = [C,X,0]; break; }
        case 1:{ RGB = [X,C,0]; break; }
        case 2:{ RGB = [0,C,X]; break; }
        case 3:{ RGB = [0,X,C]; break; }
        case 4:{ RGB = [X,0,C]; break; }
        case 5:{ RGB = [C,0,X]; break; }
    }

    const m = Y - getLuma(...RGB,luma);
    const [R,G,B] = RGB.map(channel => Math.round( (channel + m) * 255));

    return [R,G,B];
}