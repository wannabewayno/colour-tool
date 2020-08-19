const HSL2HSV = require('../HSL2HSV');
const Colour = require('../../Colour');
const colours = require('./colours');

describe("HSL2HSV()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.hsl} to ${colour.hsv}` , () => {
            const convertFrom = new Colour(colour.hsl).getChannels();
            const convertTo = new Colour(colour.hsv).getChannels();
            expect(HSL2HSV(...convertFrom)).toStrictEqual(convertTo.map(value => Math.floor(value)));
        });
    });
});