require('../mathExtension')();

/**
 * converts a HSV colour into a HWB colour
 * @param {Number} H - Hue [0,360] 
 * @param {Number} S - Saturation [0,100] 
 * @param {Number} V - Value [0,100] 
 */
module.exports = (H,S,V) => {
    S /= 100
    V /= 100
    const W = Math.round((1 - S) * V * 100);
    const B = Math.round((1 - V) * 100);

    return [H,W,B];
}