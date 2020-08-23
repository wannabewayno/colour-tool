const { Lab_to_LCH } = require('./lib/helpers');
const RGB2LAB = require('./RGB2LAB');

/**
 * Converts an sRGB colour to a cyndrical LAB colour space,the LCH space.
 * @param  {Number} R - Red channel on the range [0,255] 
 * @param  {Number} G - Green channel on the range [0,255] 
 * @param  {Number} B - Blue channel on the range [0,255]
 * @return {Array} - [L,C,H] colour space
 */
module.exports =  (...RGB) => {
    // range from [0,255] to [0,1]
    RGB = RGB.map(channel => channel/255);

    // convert RGB2LAB
    const LAB = RGB2LAB(RGB);

    // now to LCH space
    const LCH = Lab_to_LCH(LAB);

    // return LCH
    return LCH
}