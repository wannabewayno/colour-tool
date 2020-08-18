const RGB2CMYK = require('../RGB2CMYK');

test('convert [255,255,255] to [0,0,0,0] ',() => {
    expect(RGB2CMYK(...[255,255,255])).toStrictEqual([0,0,0,0]);
})

test('convert [0,0,0] to [0,0,0,100] ',() => {
    expect(RGB2CMYK(...[0,0,0])).toStrictEqual([0,0,0,100]);
})

test('convert [166,43,43] to [0,74,74,35] ',() => {
    expect(RGB2CMYK(...[166,43,43])).toStrictEqual([0,74,74,35]);
})

test('convert [122,112,205] to [40,45,0,20] ',() => {
    expect(RGB2CMYK(...[122,112,205])).toStrictEqual([40,45,0,20]);
})

test('convert [250,128,114] to [0,49,54,2] ',() => {
    expect(RGB2CMYK(...[250,128,114])).toStrictEqual([0,49,54,2]);
})

test('convert [255,0,0] to [0,100,100,0] ',() => {
    expect(RGB2CMYK(...[255,0,0])).toStrictEqual([0,100,100,0]);
})

test('convert [0,255,0] to [100,0,100,0] ',() => {
    expect(RGB2CMYK(...[0,255,0])).toStrictEqual([100,0,100,0]);
})

test('convert [0,0,255] to [100,100,0,0] ',() => {
    expect(RGB2CMYK(...[0,0,255])).toStrictEqual([100,100,0,0]);
})