const { LCH_to_Lab } = require('./lib/helpers');
const LAB2RGB = require('./LAB2RGB');

/**
 * Converts an sRGB colour to a device independent LAB colour
 * @param  {Number} L - Lightness  
 * @param  {Number} C - Chroma 
 * @param  {Number} H - Hue
 * @return {Array} - [R,G,B] colour space
 */
module.exports = (...LCH) => {
    const LAB = LCH_to_Lab(LCH);
    return LAB2RGB(...LAB).map(channel => channel < 0 ? 0:channel);
}