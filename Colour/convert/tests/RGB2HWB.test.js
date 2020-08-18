const RGB2HWB = require('../RGB2HWB');

test('convert [255,255,255] to [0,100,0] ',() => {
    expect(RGB2HWB(...[255,255,255])).toStrictEqual([0,100,0]);
})

test('convert [0,0,0] to [0,0,100] ',() => {
    expect(RGB2HWB(...[0,0,0])).toStrictEqual([0,0,100]);
})

test('convert [166,43,43] to [0,17,35] ',() => {
    expect(RGB2HWB(...[166,43,43])).toStrictEqual([0,17,35]);
})

test('convert [122,112,205] to [246,44,20] ',() => {
    expect(RGB2HWB(...[122,112,205])).toStrictEqual([246,44,20]);
})

test('convert [250,128,114] to [6,45,2] ',() => {
    expect(RGB2HWB(...[250,128,114])).toStrictEqual([6,45,2]);
})

test('convert [255,0,0] to [0,0,0] ',() => {
    expect(RGB2HWB(...[255,0,0])).toStrictEqual([0,0,0]);
})

test('convert [0,255,0] to [120,0,0] ',() => {
    expect(RGB2HWB(...[0,255,0])).toStrictEqual([120,0,0]);
})

test('convert [0,0,255] to [240,0,0] ',() => {
    expect(RGB2HWB(...[0,0,255])).toStrictEqual([240,0,0]);
})