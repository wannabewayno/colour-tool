const { gam_sRGB, XYZ_to_lin_sRGB, D50_to_D65, Lab_to_XYZ } = require('./lib/helpers');

/**
 * Converts an sRGB colour to a device independent LAB colour
 * @param  {Number} L - Red channel on the range [0,255] 
 * @param  {Number} A - Green channel on the range [0,255] 
 * @param  {Number} B - Blue channel on the range [0,255]
 * @return {Array} - [R,G,B] colour space
 */
module.exports =  (...LAB) => {
    // Convert LAB space into D50 XYZ space
    const D50XYZ = Lab_to_XYZ(LAB);

    // Convert D50XYZ into the D65XYZ, as sRGB uses the D65 standard
    const D65XYZ = D50_to_D65(D50XYZ);

    // Convert the XYZ into linear-light sRGB
    const linearRGB = XYZ_to_lin_sRGB(D65XYZ);

    // Gamma encode the linear sRGB
    const RGB = gam_sRGB(linearRGB);

    return RGB.map(channel => Math.round(channel*255));
}