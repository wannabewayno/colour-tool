const RGB2HSL = require('../RGB2HSL');

test('Convert rgb(0,255,255) to hsl(180,100,50)', () => {
    expect(RGB2HSL(...[0,255,255])).toStrictEqual([180,100,50]);
});

test('Convert rgb(250,126,112) to hsl(6,93,71)', () => {
   expect(RGB2HSL(...[250,126,112])).toStrictEqual([6,93,71]);
});

test('Convert rgb(255,255,0) to  hsl(60,100,50)', () => {
    expect(RGB2HSL(...[255,255,0])).toStrictEqual([60,100,50]);
});

test('Convert rgb(128,0,128) to hsl(300,100,25)', () => {
    expect(RGB2HSL(...[128,0,128])).toStrictEqual([300,100,25]);
});

test('Convert rgb(166,43,43) to hsl(0,59,41)', () => {
    expect(RGB2HSL(...[166,43,43])).toStrictEqual([0,59,41]);
});

test('Convert rgb(122,112,205) to hsl(247, 48%, 62%)', () => {
    expect(RGB2HSL(...[122,112,205])).toStrictEqual([246, 48, 62]);
});