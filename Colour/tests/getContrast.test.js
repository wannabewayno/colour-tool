const Colour = require('../Colour');

test("getContrast() on black returns white", () => {
    const black = new Colour('black');
    expect(black.getContrast()).toBe('rgba(255,255,255,1)');
});

test("getContrast() on white returns black", () => {
    const white = new Colour('white');
    expect(white.getContrast()).toBe('rgba(0,0,0,1)');
});

test("getContrast(true) should return a numeric value indicating constrast", () => {
    const white = new Colour('white');
    const black = new Colour('black');
    expect(white.getContrast(true)).toBe(-1);
    expect(black.getContrast(true)).toBe(1);
});

test("getContrast() returns a contrast colour of the same type", () => {
    const blackHSL  = new Colour('hsl(0,0,0)');
    const whiteRGB  = new Colour('rgb(255,255,255)');
    const whiteCYMK = new Colour('cmyk(0,0,0,0)');
    const whiteHEX  = new Colour('#FFFFFF');
    const blackHWB  = new Colour('hwb(0,0,100)');
    const typeContrastBlackHSL  = new Colour(blackHSL.getContrast()).getType();
    const typeContrastWhiteRGB  = new Colour(whiteRGB.getContrast()).getType();
    const typeContrastWhiteCYMK = new Colour(whiteCYMK.getContrast()).getType();
    const typeContrastWhiteHEX  = new Colour(whiteHEX.getContrast()).getType();
    const typeContrastBlackHWB  = new Colour(blackHWB.getContrast()).getType();
    expect(typeContrastBlackHSL).toBe('hsl');
    expect(typeContrastWhiteRGB).toBe('rgb');
    expect(typeContrastWhiteCYMK).toBe('cmyk');
    expect(typeContrastWhiteHEX).toBe('hex');
    expect(typeContrastBlackHWB).toBe('hwb');
});