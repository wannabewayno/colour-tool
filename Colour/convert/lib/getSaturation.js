module.exports = (chroma,lightness) => {
    let saturation;
    if (chroma === 0) {
        saturation = 0
    } else {
        saturation = chroma /(1 - Math.abs((2*lightness) - 1))
    }
    return Math.decimal(saturation,3);
}