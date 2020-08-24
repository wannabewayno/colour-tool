const RGB2LAB = require('../RGB2LAB');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("RGB2LAB()", () => {

    // Positive test
    colours.forEach(colour => {
        
        if(colour.lab){
            it(`should convert ${colour.rgb} to ${colour.lab}` , () => {
                const convertFrom = new Colour(colour.rgb).getChannels();
                const convertTo = new Colour(colour.lab).getChannels();
                expect(RGB2LAB(...convertFrom)).toEqual([
                    expect.toBeWithinRange(convertTo[0] - 1,convertTo[0] + 1),
                    expect.toBeWithinRange(convertTo[1] - 1,convertTo[1] + 1),
                    expect.toBeWithinRange(convertTo[2] - 1,convertTo[2] + 1),
                ]);
            });
        }
    });
});