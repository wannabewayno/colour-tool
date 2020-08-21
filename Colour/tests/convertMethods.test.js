const Colour = require('../Colour');
const colours = require('../convert/tests/colours');
const toBeWithinRange = require('../convert/tests/toBeWithinRange');

describe("Test Colour.convert() method",() => {
    colours.forEach(colour => {

        // get all colours types
        const colourTypes = Object.keys(colour);

        colourTypes.forEach(convertFrom => {
            if(convertFrom !== 'ncol' && convertFrom !== 'name'){
                colourTypes.forEach(convertTo => {
                    if(convertTo !== 'ncol' && convertTo !== 'name') {
                        it(`should convert from ${convertFrom} to ${convertTo}`, () => {
                            const convertFromColour = new Colour(colour[convertFrom]);
                            expect(convertFromColour.convert(convertTo).getType()).toBe(convertTo)
                        })
                    }
                });
            } 
        });

        colourTypes.forEach(convertFrom => {
            if(convertFrom !== 'ncol' && colour[convertFrom] !== undefined){
                colourTypes.forEach(convertTo => {
                    if(convertTo !== 'ncol' && convertTo !== 'name') {
                        it(`should convert from ${colour[convertFrom]} to ${colour[convertTo]}`, () => {
                            const convertFromColour = new Colour(colour[convertFrom]).convert(convertTo).getChannels();
                            const convertToColour = new Colour(colour[convertTo]).getChannels();
                            if(convertTo === 'hex') {
                                expect(convertFromColour.map(channel => parseInt(channel,16))).toEqual([
                                    ...convertToColour.map(channel => {
                                        return expect.toBeWithinRange(
                                            parseInt(channel,16) - 1,
                                            parseInt(channel,16) + 1
                                        )
                                    })
                                ]);
                            } else {
                                expect(convertFromColour).toEqual([
                                    ...convertToColour.map(channel => expect.toBeWithinRange(Math.round(channel) - 1, Math.round(channel) + 1))
                                ]);
                            }
                        });
                    }
                });
            } 
        });
    });
})

