const LAB2LCH = require('../LAB2LCH');
const Colour = require('../../Colour');
const colours = require('./colours');
require('./toBeWithinRange');

describe("LAB2LCH()", () => {

    // Positive test
    colours.forEach(colour => {
        
        if(colour.lch){
            it(`should convert ${colour.lab} to ${colour.lch}` , () => {
                const convertFrom = new Colour(colour.lab).getChannels();
                const convertTo = new Colour(colour.lch).getChannels();
                expect(LAB2LCH(...convertFrom)).toEqual([
                    expect.toBeWithinRange(convertTo[0] - 1,convertTo[0] + 1),
                    expect.toBeWithinRange(convertTo[1] - 1,convertTo[1] + 1),
                    expect.toBeWithinRange(convertTo[2] - 1,convertTo[2] + 1),
                ]);
            });
        }
    });
});