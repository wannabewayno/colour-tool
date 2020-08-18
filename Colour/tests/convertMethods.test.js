const Colour = require('../Colour');

test("Can convert from rgb to hsl", () => {
    const colourRGB = new Colour('rgb(250,128,114');
    const colourHSL = colourRGB.convert('hsl');
    expect(colourHSL.getChannels()).toStrictEqual([6,93,71]);
});
