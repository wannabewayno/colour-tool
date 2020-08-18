const Colour = require('../Colour');

test("can set the opacity of a colour using 'setOpacity'", () => {
    const colour = new Colour('rgba(255,125,125,0.6)');
    expect(colour.setOpacity(80).getOpacity()).toBe(80);
});

test("can get the opacity of a colour using 'getOpacity'", () => {
    const colour = new Colour('rgba(255,125,125,0.6)');
    expect(colour.getOpacity()).toBe(60);
})

test("setting Opacity greater than 100 clips it at 100", () => {
    const transparent = new Colour('transparent');
    expect(transparent.setOpacity(120).getOpacity()).toBe(100);
})

test("setting Opacity less than 0 clips it at 0", () => {
    const black = new Colour('black');
    expect(black.setOpacity(-50).getOpacity()).toBe(0);
})