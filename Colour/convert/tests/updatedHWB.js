const colours = require('./colours');
const Colour = require('../../Colour');
const RGB2HWB = require('../RGB2HWB');
const fs = require('fs');

const newColours = colours.map(colour => {
    const rgb = new Colour(colour.rgb).getChannels();
    const [H,W,B] = RGB2HWB(...rgb);
    colour.hwb = `hwb(${H},${W}%,${B}%)`;
    return colour;
});

fs.writeFileSync('./newColours.json',JSON.stringify(newColours,null,4));