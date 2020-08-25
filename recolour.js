const Colour = require("./Colour/Colour");
const RGB2LCH = require("./Colour/convert/RGB2LCH");
const RGB2LAB = require("./Colour/convert/RGB2LAB");
const colours = require("./Colour/convert/tests/colours");
const fs = require('fs');

const data = colours.map(colour => {
    const rgb = new Colour(colour.rgb).getChannels();
    const [L,A,B] = RGB2LAB(...rgb); 
    const [,C,H] = RGB2LCH(...rgb);
    colour.lab = `lab(${L}%,${A},${B})`
    colour.lch = `lch(${L}%,${C},${H}deg)`
    return colour
});

fs.writeFileSync('./newcolours.js',JSON.stringify(data,null,4));