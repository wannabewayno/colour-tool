const HSI2RGB = require('../HSI2RGB');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("HSI2RGB()", () => {

    // Positive test
    colours.forEach(colour => {
        
        if(colour.hsi){
            it(`should convert ${colour.hsi} to ${colour.rgb}` , () => {
                const convertFrom = new Colour(colour.hsi).getChannels();
                const convertTo = new Colour(colour.rgb).getChannels();
                expect(HSI2RGB(...convertFrom)).toEqual([
                    expect.toBeWithinRange(convertTo[0] - 1,convertTo[0] + 1),
                    expect.toBeWithinRange(convertTo[1] - 1,convertTo[1] + 1),
                    expect.toBeWithinRange(convertTo[2] - 1,convertTo[2] + 1),
                ]);
            });
        }
    });
});