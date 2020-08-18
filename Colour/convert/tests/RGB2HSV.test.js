const RGB2HSV = require('../RGB2HSV');
const Colour = require('../../Colour');
const colours = require('./colours');

describe("RGB2HSV()", () => {

    // Positive test
    colours.forEach(colour => {
        it(`should convert ${colour.rgb} to ${colour.hsv}` , () => {
            const convertFrom = new Colour(colour.rgb).getChannels();
            const convertTo = new Colour(colour.hsv).getChannels();
            expect(RGB2HSV(...convertFrom)).toStrictEqual(convertTo);
        });
    });

});