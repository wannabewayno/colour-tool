require('../mathExtension')();

/**
 * converts a HSV colour into a HWB colour
 * @param {Number} H - Hue [0,360] 
 * @param {Number} S - Saturation [0,100] 
 * @param {Number} V - Value [0,100] 
 */
module.exports = (H,S,V) => {

    const W = Math.decimal((100 - S) * V ,1);
    const B = Math.decimal((100 - V),1);

    return [H,W,B];
}