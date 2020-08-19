const HSL2HSV = require('../HSL2HSV');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("HSL2HSV()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.hsl} to ${colour.hsv}` , () => {
            const convertFrom = new Colour(colour.hsl).getChannels();
            const convertTo = new Colour(colour.hsv).getChannels();
            expect(HSL2HSV(...convertFrom)).toEqual([
                convertTo[0],
                expect.toBeWithinRange(convertTo[1]-1,convertTo[1]+1),
                expect.toBeWithinRange(convertTo[2]-1,convertTo[2]+1),
            ]);
        });
    });
});