require('../mathExtension')();

/**
 * converts a HSV colour into a HWB colour
 * @param {Number} H - Hue [0,360] 
 * @param {Number} W - Whiteness [0,100] 
 * @param {Number} B - Blackness [0,100] 
 */
module.exports = (H,W,B) => {
    W /= 100 // change range from [0,100] to  [0,1]
    B /= 100 // change range from [0,100] to  [0,1] 

    const V = 1 - B;

    // Exception if V is 0, All black no saturation.
    if (V === 0) return [H,0,V];

    const S = 1 - W/V;
    
    return [
        H,
        Math.decimal( S * 100, 0),
        Math.decimal( V * 100, 0)
    ];
}
