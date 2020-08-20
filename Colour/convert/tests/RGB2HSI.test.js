const RGB2HSI = require('../RGB2HSI');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("RGB2HSI()", () => {

    // Positive test
    colours.forEach(colour => {
        
        if(colour.hsi){
            it(`should convert ${colour.rgb} to ${colour.hsi}` , () => {
                const convertFrom = new Colour(colour.rgb).getChannels();
                const convertTo = new Colour(colour.hsi).getChannels();
                expect(RGB2HSI(...convertFrom)).toEqual([
                    convertTo[0],
                    expect.toBeWithinRange(convertTo[1] - 1,convertTo[1] + 1),
                    expect.toBeWithinRange(convertTo[2] - 1,convertTo[2] + 1),
                ]);
            });
        }
    });
});