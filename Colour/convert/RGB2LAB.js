const { lin_sRGB, lin_sRGB_to_XYZ, D65_to_D50, XYZ_to_Lab } = require('./lib/helpers');

/**
 * Converts an sRGB colour to a device independent LAB colour
 * @param  {Number} R - Red channel on the range [0,255] 
 * @param  {Number} G - Green channel on the range [0,255] 
 * @param  {Number} B - Blue channel on the range [0,255]
 * @return {Array} - [L,A,B] colour space
 */
module.exports =  (...RGB) => {
    console.log('RGB:',RGB);
    // RGB range from [0,255] to [0,1];
    RGB = RGB.map(channel => channel/255);
    
    // we need to convert sRGB to linear sRGB to undo gamma encoding
    const linearRGB = lin_sRGB(RGB);

    // Convert linear sRGB to CIE XYZ space
    const D65XYZ = lin_sRGB_to_XYZ(linearRGB);

    // Convert from a D65 white point used in the sRGB standard to D50 whitepoint used in LAB
    const D50XYZ = D65_to_D50(D65XYZ);
    
    console.log('D65XYZ:',D65XYZ);
    console.log('D50XYZ:',D50XYZ);
    console.log('----------------------------------------------------');

    // Convert the D50 XYZ space into LAB space
    const LAB = XYZ_to_Lab(D65XYZ);

    // return LAB
    return LAB
}