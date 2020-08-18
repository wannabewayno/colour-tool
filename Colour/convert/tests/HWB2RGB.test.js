const HWB2RGB = require('../HWB2RGB');

test('convert [0,100,0] to [255,255,255] ',() => {
    expect(HWB2RGB(...[0,100,0])).toStrictEqual([255,255,255]);
})

test('convert [0,0,100] to [0,0,0]',() => {
    expect(HWB2RGB(...[0,0,100])).toStrictEqual([0,0,0]);
})

test('convert [0,17,35] to [166,43,43] ',() => {
    expect(HWB2RGB(...[0,17,35])).toStrictEqual([166,43,43]);
})

test('convert [246,44,20] to [122,112,205] ',() => {
    expect(HWB2RGB(...[246,44,20])).toStrictEqual([121,112,204]);
})

test('convert [6,45,2] to [250,128,114] ',() => {
    expect(HWB2RGB(...[6,45,2])).toStrictEqual([250,128,115]);
})

test('convert [0,0,0] to [255,0,0] ',() => {
    expect(HWB2RGB(...[0,0,0])).toStrictEqual([255,0,0]);
})

test('convert [120,0,0] to [0,255,0]',() => {
    expect(HWB2RGB(...[120,0,0])).toStrictEqual([0,255,0]);
})

test('convert [240,0,0] to [0,0,255] ',() => {
    expect(HWB2RGB(...[240,0,0])).toStrictEqual([0,0,255]);
})