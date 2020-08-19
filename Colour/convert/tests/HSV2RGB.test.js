const HSV2RGB = require('../HSV2RGB');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');


describe("HSV2RGB()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.hsv} to ${colour.rgb}` , () => {
            const convertFrom = new Colour(colour.hsv).getChannels();
            const convertTo = new Colour(colour.rgb).getChannels();
            expect(HSV2RGB(...convertFrom)).toEqual([
                convertTo[0],
                expect.toBeWithinRange(convertTo[1]-1,convertTo[1]+1),
                expect.toBeWithinRange(convertTo[2]-1,convertTo[2]+1),
            ]);
        });
    });

});