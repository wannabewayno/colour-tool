const destructureColour = require('../');

test('deconstructs a CSS colour name into an object with keys "type" and "channels"', () => {
    expect(destructureColour('salmon')).toStrictEqual({type:'rgb',channels:[250,128,114]});
    expect(destructureColour('Salmon')).toStrictEqual({type:'rgb',channels:[250,128,114]});
    expect(destructureColour('SALMON')).toStrictEqual({type:'rgb',channels:[250,128,114]});
    expect(destructureColour('lemonChiffon')).toStrictEqual({type:'rgb',channels:[255,250,205]});
})

test('when blank or undefined is passed, returns undefined', () => {
    expect(destructureColour('')).toStrictEqual(undefined);
    expect(destructureColour(undefined)).toStrictEqual(undefined);
})

test('deconstructs a hsl string', () => {
    expect(destructureColour('hsl(6, 93%, 71%)')).toStrictEqual({type:'hsl',channels:[6,93,71]});
    expect(destructureColour('hsla(6, 93%, 71%, 1)')).toStrictEqual({type:'hsl',channels:[6,93,71,1]});
})

test('deconstructs an rgb string', () => {
    expect(destructureColour('rgb(250, 128, 114)')).toStrictEqual({type:'rgb',channels:[250,128,114]});
    expect(destructureColour('rgba(250, 128, 114, 1)')).toStrictEqual({type:'rgb',channels:[250,128,114,1]});
})

test('deconstructs a hex string', () => {
    expect(destructureColour('#fa8072')).toStrictEqual({type:'hex',channels:['fa','80','72']});
    expect(destructureColour('#FA8072')).toStrictEqual({type:'hex',channels:['FA','80','72']});
})

test('deconstructs a hwb string', () => {
    expect(destructureColour('hwb(6, 45%, 2%)')).toStrictEqual({type:'hwb',channels:[6,45,2]});
    expect(destructureColour('hwba(6, 45%, 2%, 1)')).toStrictEqual({type:'hwb',channels:[6,45,2,1]});
})

test('deconstructs a cmyk string', () => {
    expect(destructureColour('cmyk(0%, 49%, 54%, 2%)')).toStrictEqual({type:'cmyk',channels:[0,49,54,2]});
    expect(destructureColour('cmyka(0%, 49%, 54%, 2%, 1)')).toStrictEqual({type:'cmyk',channels:[0,49,54,2,1]});
})

test('deconstructs "transparent" into an rgb object with O opacity', () => {
    expect(destructureColour('transparent')).toStrictEqual({type:'rgb',channels:[0,0,0,0]});
})

test('unrecognised colour types return undefined', () => {
    expect(destructureColour('hsld(6, 93%, 71%)')).toBe(undefined);
    expect(destructureColour('samlon')).toBe(undefined);
})