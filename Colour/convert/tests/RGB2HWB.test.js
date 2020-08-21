const RGB2HWB = require('../RGB2HWB');
const colours = require('./colours');
const Colour = require('../../Colour');

describe("Test RGB2HWB, converts [R,G,B] on [0,255] to [H,W,B] on H-> [0,360] & W,B -> [0%,100%]", () =>{
    colours.forEach(colour => {
        it(`Should convert ${colour.rgb} to ${colour.hwb}`,() => {
            const convertFrom = new Colour(colour.rgb).getChannels();
            const convertTo   = new Colour(colour.hwb).getChannels();
            expect(RGB2HWB(...convertFrom)).toStrictEqual(convertTo);
        })
    })
})