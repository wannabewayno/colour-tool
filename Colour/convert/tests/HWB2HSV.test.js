const HWB2HSV = require('../HWB2HSV');
const Colour = require('../../Colour');
const colours = require('./colours');

describe("HWB2HSV()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.hwb} to ${colour.hsv}` , () => {
            const convertFrom = new Colour(colour.hwb).getChannels();
            const convertTo = new Colour(colour.hsv).getChannels();
            expect(HWB2HSV(...convertFrom)).toStrictEqual(convertTo.map(value => Math.floor(value)));
        });
    });
});