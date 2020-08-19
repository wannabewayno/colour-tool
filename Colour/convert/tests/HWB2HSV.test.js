const HWB2HSV = require('../HWB2HSV');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("HWB2HSV()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.hwb} to ${colour.hsv}` , () => {
            const convertFrom = new Colour(colour.hwb).getChannels();
            const convertTo = new Colour(colour.hsv).getChannels();
            expect(HWB2HSV(...convertFrom)).toEqual([
                convertTo[0],
                expect.toBeWithinRange(convertTo[1]-1,convertTo[1]+1),
                expect.toBeWithinRange(convertTo[2]-1,convertTo[2]+1),
            ]);
        });
    });
});