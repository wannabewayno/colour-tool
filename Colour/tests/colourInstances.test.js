const Colour = require('../Colour');

test("creating a new Colour is an instance of Colour", () => {
    const salmon = new Colour('salmon')
    expect(salmon instanceof Colour).toBe(true);
})

test("a Colour instance from a CSS colour name is of type 'rgb'", () => {
    const salmon = new Colour('salmon')
    expect(salmon.getType()).toBe('rgb');
})

test("a Colour instance from a CSS colour name has correct channels", () => {
    const salmon = new Colour('salmon')
    expect(salmon.getChannels()).toStrictEqual([250,128,114]);
})

test("a colour instance from a colourString has the correct type", () => {
    const salmonRGB  = new Colour('rgb(250,128,114)');
    const salmonHSL  = new Colour('hsl(6,93%,71%)');
    const salmonHWB  = new Colour('hwb(6,45%,2%)');
    const salmonCMYK = new Colour('cmyk(0%,49%,54%,2%)');
    const salmonHEX  = new Colour('#FA8072');
    expect(salmonRGB.getType()).toStrictEqual('rgb');
    expect(salmonHSL.getType()).toStrictEqual('hsl');
    expect(salmonHWB.getType()).toStrictEqual('hwb');
    expect(salmonCMYK.getType()).toStrictEqual('cmyk');
    expect(salmonHEX.getType()).toStrictEqual('hex');
})

test("a colour instance from a colourString has the correct channels", () => {
    const salmonRGB  = new Colour('rgb(250,128,114)');
    const salmonHSL  = new Colour('hsl(6,93%,71%)');
    const salmonHWB  = new Colour('hwb(6,45%,2%)');
    const salmonCMYK = new Colour('cmyk(0%,49%,54%,2%)');
    const salmonHEX  = new Colour('#FA8072');
    expect(salmonRGB.getChannels()).toStrictEqual([250,128,114]);
    expect(salmonHSL.getChannels()).toStrictEqual([6,93,71]);
    expect(salmonHWB.getChannels()).toStrictEqual([6,45,2]);
    expect(salmonCMYK.getChannels()).toStrictEqual([0,49,54,2]);
    expect(salmonHEX.getChannels()).toStrictEqual(['FA','80','72']);
})

test("a colour instance from a colourString has the correct alpha", () => {
    const salmonRGB   = new Colour('rgb(250,128,114)');
    const salmonRGBA  = new Colour('rgba(250,128,114,0.8)');
    const salmonHSL   = new Colour('hsl(6,93%,71%)');
    const salmonHSLA  = new Colour('hsla(6,93%,71%,0.4)');
    const salmonHWB   = new Colour('hwb(6,45%,2%)');
    const salmonHWBA  = new Colour('hwba(6,45%,2%,0)');
    const salmonCMYK  = new Colour('cmyk(0%,49%,54%,2%)');
    const salmonCMYKA = new Colour('cmyka(0%,49%,54%,2%,0.6)');
    const salmonHEX   = new Colour('#FA8072');
    expect(salmonRGB.getOpacity()).toBe(100);
    expect(salmonRGBA.getOpacity()).toBe(80);
    expect(salmonHSL.getOpacity()).toBe(100);
    expect(salmonHSLA.getOpacity()).toBe(40);
    expect(salmonHWB.getOpacity()).toBe(100);
    expect(salmonHWBA.getOpacity()).toBe(0);
    expect(salmonCMYK.getOpacity()).toBe(100);
    expect(salmonCMYKA.getOpacity()).toBe(60);
    expect(salmonHEX.getOpacity()).toBe(100);
})