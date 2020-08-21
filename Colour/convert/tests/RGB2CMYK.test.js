const RGB2CMYK = require('../RGB2CMYK');
const colours = require('./colours');
const Colour = require('../../Colour');

describe("Test RGB2CMYK, converts [R,G,B] on [0,255] to [C,M,Y,K] on [0%,100%]", () =>{
    colours.forEach(colour => {
        it(`Should convert ${colour.rgb} to ${colour.cmyk}`,() => {
            const convertFrom = new Colour(colour.rgb).getChannels();
            const convertTo   = new Colour(colour.cmyk).getChannels();
            expect(RGB2CMYK(...convertFrom)).toStrictEqual(convertTo);
        })
    })
})