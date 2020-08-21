const Colour = require('../Colour');
const toBeWithinRange = require('../convert/tests/toBeWithinRange');

test("colour.saturate(20), saturates a colour by 20%", () => {
    const colour = new Colour('hsla(0,50,50,1)');
    expect(colour.saturate(20).getChannels()[1]).toBe(70);
});

test("colour.desaturate(20), desaturates a colour by 20%", () => {
    const colour = new Colour('hsla(0,50,50,1)');
    expect(colour.desaturate(20).getChannels()[1]).toBe(30);
});

test("desaturating a colour less than 0 clips saturation at 0", () => {
    const colour = new Colour('hsla(0,50,50,1)');
    expect(colour.desaturate(60).getChannels()[1]).toBe(0);
});

test("saturating a colour more then 100 clips saturation at 100", () => {
    const colour = new Colour('hsla(0,50,50,1)');
    expect(colour.saturate(60).getChannels()[1]).toBe(100);
});

test("saturating a colour with a negative value, desaturates it", () => {
    const colour = new Colour('hsla(0,50,50,1)');
    expect(colour.saturate(-30).getChannels()[1]).toBe(20);
});

test("desaturating a colour with a negative value saturates it", () => {
    const colour = new Colour('hsla(0,50,50,1)');
    expect(colour.desaturate(-20).getChannels()[1]).toBe(70);
});

test("able to desaturate any colour type", () => {
    const salmon     = new Colour('salmon');
    const salmonRGB  = new Colour('rgb(250,128,114)');
    const salmonHSL  = new Colour('hsl(6,93%,71%)');
    const salmonHWB  = new Colour('hwb(6,44%,2%)');
    const salmonCMYK = new Colour('cmyk(0%,49.2%,54.3%,2%)');
    const salmonHEX  = new Colour('#FA8072');

    expect(salmon.desaturate(20).convert('hsl').getChannels()[1]).toBeWithinRange(73-0.5,73+0.5)
    expect(salmonRGB.desaturate(20).convert('hsl').getChannels()[1]).toBeWithinRange(73-0.5,73+0.5)
    expect(salmonHSL.desaturate(20).convert('hsl').getChannels()[1]).toBeWithinRange(73-0.5,73+0.5)
    expect(salmonHWB.desaturate(20).convert('hsl').getChannels()[1]).toBeWithinRange(73-0.5,73+0.5)
    expect(salmonCMYK.desaturate(20).convert('hsl').getChannels()[1]).toBeWithinRange(73-0.5,73+0.5)
    expect(salmonHEX.desaturate(20).convert('hsl').getChannels()[1]).toBeWithinRange(73-0.5,73+0.5)
});

test("able to saturate any colour type", () => {
    const salmon     = new Colour('salmon');
    const salmonRGB  = new Colour('rgb(250,128,114)');
    const salmonHSL  = new Colour('hsl(6,93%,71%)');
    const salmonHWB  = new Colour('hwb(6,44%,2%)');
    const salmonCMYK = new Colour('cmyk(0%,49%,54%,2%)');
    const salmonHEX  = new Colour('#FA8072');

    expect(salmon.saturate(20).convert('hsl').getChannels()[1]).toBe(100);
    expect(salmonRGB.saturate(20).convert('hsl').getChannels()[1]).toBe(100);
    expect(salmonHSL.saturate(20).convert('hsl').getChannels()[1]).toBe(100);
    expect(salmonHWB.saturate(20).convert('hsl').getChannels()[1]).toBe(100);
    expect(salmonCMYK.saturate(20).convert('hsl').getChannels()[1]).toBe(100);
    expect(salmonHEX.saturate(20).convert('hsl').getChannels()[1]).toBe(100);
});

test("desaturating a colour not in hsl retains the original colour type", () => {
    const salmon     = new Colour('salmon');
    const salmonRGB  = new Colour('rgb(250,128,114)');
    const salmonHSL  = new Colour('hsl(6,93%,71%)');
    const salmonHWB  = new Colour('hwb(6,45%,2%)');
    const salmonCMYK = new Colour('cmyk(0%,49%,54%,2%)');
    const salmonHEX  = new Colour('#FA8072');

    expect(salmon.desaturate(20).getType()).toBe('rgb')
    expect(salmonRGB.desaturate(20).getType()).toBe('rgb')
    expect(salmonHSL.desaturate(20).getType()).toBe('hsl')
    expect(salmonHWB.desaturate(20).getType()).toBe('hwb')
    expect(salmonCMYK.desaturate(20).getType()).toBe('cmyk')
    expect(salmonHEX.desaturate(20).getType()).toBe('hex')
});

test("saturating a colour not in hsl retains the original colour type", () => {
    const salmon     = new Colour('salmon');
    const salmonRGB  = new Colour('rgb(250,128,114)');
    const salmonHSL  = new Colour('hsl(6,93%,71%)');
    const salmonHWB  = new Colour('hwb(6,45%,2%)');
    const salmonCMYK = new Colour('cmyk(0%,49%,54%,2%)');
    const salmonHEX  = new Colour('#FA8072');

    expect(salmon.saturate(20).getType()).toBe('rgb')
    expect(salmonRGB.saturate(20).getType()).toBe('rgb')
    expect(salmonHSL.saturate(20).getType()).toBe('hsl')
    expect(salmonHWB.saturate(20).getType()).toBe('hwb')
    expect(salmonCMYK.saturate(20).getType()).toBe('cmyk')
    expect(salmonHEX.saturate(20).getType()).toBe('hex')
});
