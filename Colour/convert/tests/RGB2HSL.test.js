const RGB2HSL = require('../RGB2HSL');
const colours = require('./colours');
const Colour = require('../../Colour');
const toBeWithinRange = require('./toBeWithinRange');

describe("Test RGB2HSL, converts [R,G,B] on [0,255] to [H,S,L] on H-> [0,360] & W,B -> [0%,100%]", () =>{
    colours.forEach(colour => {
        it(`Should convert ${colour.rgb} to ${colour.hsl}`,() => {
            const convertFrom = new Colour(colour.rgb).getChannels();
            const convertTo   = new Colour(colour.hsl).getChannels();
            expect(RGB2HSL(...convertFrom)).toEqual([
                convertTo[0],
                expect.toBeWithinRange(convertTo[1]-0.2,convertTo[1]+0.2),
                expect.toBeWithinRange(convertTo[2]-0.2,convertTo[2]+0.2),
            ]);
        })
    })
})