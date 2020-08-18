module.exports = (max,min) => {
    const lightness = (max + min)/2
    return Math.decimal(lightness,3);
}