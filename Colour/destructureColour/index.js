const CSSColourTable = require('./CSSColourTable');
const recognisedColours = require('./recognisedColours');

/**
 * @param  {String} - A CSS colorString //? Example: 'salmon'|'rgb(250,128,114)'|'#FA8072'|'hsl(6, 93%, 71%)'
 * @return {Colour} - a new Colour instance 
 */
module.exports = function destructureColour(colourString) {

    //guard clause for empty strings
    if(colourString === ''|| colourString === undefined) return undefined;

    //special case for transparent
    if(colourString === 'transparent') return { type:'rgb', channels: [0,0,0,0] };

    // check if this is a recognised CSS colour code
    if(CSSColourTable[colourString.toLowerCase()]) colourString = CSSColourTable[colourString.toLowerCase()].rgb;

    let type;
    let channels;

    if(colourString.indexOf('#') !== -1){
        type = 'hex'
        switch(colourString.length - 1){
            case 3: channels = (colourString.match(/\w/g)||[]).map(hex => hex + hex);
                break;
            case 6: channels = colourString.match(/\w\w/g)||[]
                break;
            default: throw new Error('Not a valid Hex colour')
        }
    } else {

        //use regex to get the letters, get rid of the 'a' for alpha, we'll always set this as default 1
        type = (colourString.match(/([a-z]|[A-Z])+[^aA\s\(\)]/g))[0].toLowerCase();

        // check that this is a recognised colour Type
        if(!recognisedColours.includes(type)) {
            throw new Error(`unrecognised Colour Type!, currently only supporting colour models of type: ${recognisedColours.join(' | ')}`);
        };

        //use regex to get the digits into an array [ch1,ch2,ch3,alpha]
        channels = (colourString.match(/\d+(\.?\d+)?/g)).map(channel => Number(channel));
    }

    //return an object with keys type and channels
    return { type, channels };
}