const CMYK2RGB = require('../CMYK2RGB');

test('convert [0,0,0,0] to [255,255,255]',() => {
    expect(CMYK2RGB(...[0,0,0,0])).toStrictEqual([255,255,255]);
})

test('convert [0,0,0,100] to [0,0,0] ',() => {
    expect(CMYK2RGB(...[0,0,0,100])).toStrictEqual([0,0,0]);
})

test('convert [0,74,74,35] to [166,43,43]',() => {
    expect(CMYK2RGB(...[0,74,74,35])).toStrictEqual([166,43,43]);
})

test('convert [40,45,0,20] to [122,112,204]',() => {
    expect(CMYK2RGB(...[40,45,0,20])).toStrictEqual([122,112,204]);
})

test('convert [0,49,54,2] to [250,127,115]',() => {
    expect(CMYK2RGB(...[0,49,54,2])).toStrictEqual([250,127,115]);
})

test('convert [0,100,100,0] to [255,0,0]',() => {
    expect(CMYK2RGB(...[0,100,100,0])).toStrictEqual([255,0,0]);
})

test('convert [100,0,100,0] to [0,255,0]',() => {
    expect(CMYK2RGB(...[100,0,100,0])).toStrictEqual([0,255,0]);
})

test('convert [100,100,0,0] to [0,0,255]',() => {
    expect(CMYK2RGB(...[100,100,0,0])).toStrictEqual([0,0,255]);
})