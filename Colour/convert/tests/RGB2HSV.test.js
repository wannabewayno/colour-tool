const RGB2HSV = require('../RGB2HSV');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("RGB2HSV()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.rgb} to ${colour.hsv}` , () => {
            const convertFrom = new Colour(colour.rgb).getChannels();
            const convertTo = new Colour(colour.hsv).getChannels();
            expect(RGB2HSV(...convertFrom)).toEqual([
                convertTo[0],
                expect.toBeWithinRange(convertTo[1]-1,convertTo[1]+1),
                expect.toBeWithinRange(convertTo[2]-1,convertTo[2]+1),
            ]);
        });
    });

});