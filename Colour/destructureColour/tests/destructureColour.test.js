const destructureColour = require('../');
const recognisedColours = require('../recognisedColours');


describe("destructureColour Unit tests", () => {

    it('deconstructs a CSS colour name into an object with keys "type" and "channels"', () => {
        expect(destructureColour('salmon')).toStrictEqual({type:'rgb',channels:[250,128,114]});
        expect(destructureColour('Salmon')).toStrictEqual({type:'rgb',channels:[250,128,114]});
        expect(destructureColour('SALMON')).toStrictEqual({type:'rgb',channels:[250,128,114]});
        expect(destructureColour('lemonChiffon')).toStrictEqual({type:'rgb',channels:[255,250,205]});
    });

    it('should return undefined when blank or undefined is passed', () => {
        expect(destructureColour('')).toStrictEqual(undefined);
        expect(destructureColour(undefined)).toStrictEqual(undefined);
    });

    it('deconstructs a hsl string', () => {
        expect(destructureColour('hsl(6, 93%, 71%)')).toStrictEqual({type:'hsl',channels:[6,93,71]});
        expect(destructureColour('hsla(6, 93%, 71%, 1)')).toStrictEqual({type:'hsl',channels:[6,93,71,1]});
    });

    it('deconstructs an rgb string', () => {
        expect(destructureColour('rgb(250, 128, 114)')).toStrictEqual({type:'rgb',channels:[250,128,114]});
        expect(destructureColour('rgba(250, 128, 114, 1)')).toStrictEqual({type:'rgb',channels:[250,128,114,1]});
    });

    it('deconstructs a hex string', () => {
        expect(destructureColour('#fa8072')).toStrictEqual({type:'hex',channels:['fa','80','72']});
        expect(destructureColour('#FA8072')).toStrictEqual({type:'hex',channels:['FA','80','72']});
    });

    it('deconstructs a hwb string', () => {
        expect(destructureColour('hwb(6, 45%, 2%)')).toStrictEqual({type:'hwb',channels:[6,45,2]});
        expect(destructureColour('hwba(6, 45%, 2%, 1)')).toStrictEqual({type:'hwb',channels:[6,45,2,1]});
    });

    it('deconstructs a cmyk string', () => {
        expect(destructureColour('cmyk(0%, 49%, 54%, 2%)')).toStrictEqual({type:'cmyk',channels:[0,49,54,2]});
        expect(destructureColour('cmyka(0%, 49%, 54%, 2%, 1)')).toStrictEqual({type:'cmyk',channels:[0,49,54,2,1]});
    });

    it('deconstructs a hsi string', () => {
        expect(destructureColour('hsi(162,80%,49.5%)')).toStrictEqual({type:'hsi',channels:[162,80,49.5]});
        expect(destructureColour('hsia(162,80%,49.5%, 1)')).toStrictEqual({type:'hsi',channels:[162,80,49.5,1]});
    });

    it('deconstructs "transparent" into an rgb object with O opacity', () => {
        expect(destructureColour('transparent')).toStrictEqual({type:'rgb',channels:[0,0,0,0]});
    });

    it('Should throw an error if an unrecognised colour type is entered', () => {
        const error = new Error(`unrecognised Colour Type!, currently only supporting colour models of type: ${recognisedColours.join(' | ')}`);
        expect(() => destructureColour('hsld(6, 93%, 71%)')).toThrowError(error);
        expect(() => destructureColour('samlon')).toThrowError(error);
    });
});