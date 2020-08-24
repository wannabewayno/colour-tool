const RGB2LCH = require('../RGB2LCH');
const RGB2LAB = require('../RGB2LAB');
const colours = require('./colours');
const fs = require('fs');
const Colour = require('../../Colour');

const data = colours.map(colour => {
    const RGB = new Colour(colour.rgb).getChannels();
    const [L,A,B] = RGB2LAB(...RGB);
    const [,C,H] =  RGB2LCH(...RGB);
    colour.lab =`lab(${Math.round(L)}%, ${Math.round(A)}, ${Math.round(B)})` 
    colour.lch =`lch(${Math.round(L)}%, ${Math.round(C)}, ${Math.round(H)}deg)`
    return colour;
});

fs.writeFileSync('./lch.json',JSON.stringify(data,null,4));