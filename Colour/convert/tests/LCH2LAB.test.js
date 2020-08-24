const LCH2LAB = require('../LCH2LAB');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("LCH2LAB()", () => {

    // Positive test
    colours.forEach(colour => {
        
        if(colour.lab){
            it(`should convert ${colour.lch} to ${colour.lab}` , () => {
                const convertFrom = new Colour(colour.lch).getChannels();
                const convertTo = new Colour(colour.lab).getChannels();
                expect(LCH2LAB(...convertFrom)).toEqual([
                    expect.toBeWithinRange(convertTo[0] - 1,convertTo[0] + 1),
                    expect.toBeWithinRange(convertTo[1] - 1,convertTo[1] + 1),
                    expect.toBeWithinRange(convertTo[2] - 1,convertTo[2] + 1),
                ]);
            });
        }
    });
});