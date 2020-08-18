const HSL2RGB = require('../HSL2RGB');

test('Convert hsl(180,100,50) to rgb(0,255,255)', () => {
    expect(HSL2RGB(...[180,100,50])).toStrictEqual([0,255,255]);
});

test('Convert hsl(6,93,71) to rgb(250,126,112)', () => {
   expect(HSL2RGB(...[6,93,71])).toStrictEqual([250,126,112]);
});

test('Convert hsl(60,100,50) to rgb(255,255,0)', () => {
    expect(HSL2RGB(...[60,100,50])).toStrictEqual([255,255,0]);
});

test('Convert hsl(300,100,25) to rgb(128,0,128)', () => {
    expect(HSL2RGB(...[300,100,25])).toStrictEqual([128,0,128]);
});

test('Convert hsl(0,59,41) to rgb(166,43,43)', () => {
    expect(HSL2RGB(...[0,59,41])).toStrictEqual([166,43,43]);
});

test('Convert hsl(246, 48%, 62%) to rgb(122,112,205)', () => {
    expect(HSL2RGB(...[246, 48, 62])).toStrictEqual([121,112,205]);
});