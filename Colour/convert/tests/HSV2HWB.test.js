const HSV2HWB = require('../HSV2HWB');
const Colour = require('../../Colour');
const colours = require('./colours');
const toBeWithinRange = require('./toBeWithinRange');

describe("HSV2HWB()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.hsv} to ${colour.hwb}` , () => {
            const convertFrom = new Colour(colour.hsv).getChannels();
            const convertTo = new Colour(colour.hwb).getChannels();
            expect(HSV2HWB(...convertFrom)).toEqual([
                convertTo[0],
                expect.toBeWithinRange(convertTo[1]-1,convertTo[1]+1),
                expect.toBeWithinRange(convertTo[2]-1,convertTo[2]+1),
            ]);
        });
    });
});