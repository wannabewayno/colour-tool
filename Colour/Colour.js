const HSL2RGB = require('./convert/HSL2RGB');
const HSL2HSV = require('./convert/HSL2HSV');
const RGB2HSL = require('./convert/RGB2HSL');
const RGB2HEX = require('./convert/RGB2HEX');
const RGB2HWB = require('./convert/RGB2HWB');
const RGB2CMYK = require('./convert/RGB2CMYK');
const RGB2HSI = require('./convert/RGB2HSI');
const RGB2HSV = require('./convert/RGB2HSV');
const RGB2LAB = require('./convert/RGB2LAB');
const RGB2LCH = require('./convert/RGB2LCH');
const LAB2RGB = require('./convert/LAB2RGB');
const LCH2RGB = require('./convert/LCH2RGB');
const LAB2LCH = require('./convert/LAB2LCH');
const LCH2LAB = require('./convert/LCH2LAB');
const HEX2RGB = require('./convert/HEX2RGB');
const CMYK2RGB = require('./convert/CMYK2RGB');
const HWB2RGB = require('./convert/HWB2RGB');
const HSV2HSL = require('./convert/HSV2HSL');
const HSV2RGB = require('./convert/HSV2RGB');
const HSV2HWB = require('./convert/HSV2HWB');
const HSI2RGB = require('./convert/HSI2RGB');
const destructureColour = require('./destructureColour');




module.exports = class Colour {
    constructor(colourString){

        const { type, channels } = destructureColour(colourString);

        if (channels.length < 4 && type !== 'cmyk' || type === 'cmyk' && channels.length < 5 ) this.alpha = 1;
        else this.alpha = channels.pop();

        this.type = type;
        this.channels = channels;
    }
    
// ==============================================================================
    //only get, can't set without converting
    getType() { return this.type };
    setType() { console.log("can't set type here, use convert() to change the type")}
// ==============================================================================
    getChannels() { return this.channels };

    /**
     * Set Channels by passing key:value pairs of channels to change
     * @param {Object} channels - named channels with values to set
     */
    setChannels(channels) {
        switch(this.type){
            case'rgb':
                const { r,R, g,G, b,B } = channels;
                if(R!==undefined|r!==undefined) this.channels[0] = R!==undefined?R:r;
                if(G!==undefined|g!==undefined) this.channels[1] = G!==undefined?G:g;
                if(B!==undefined|b!==undefined) this.channels[2] = B!==undefined?B:b;
                return this
            case'hsl':
                const { h,H, s,S, l,L } = channels;
                if(H!==undefined|h!==undefined) this.channels[0] = H!==undefined?H:h;
                if(S!==undefined|s!==undefined) this.channels[1] = S!==undefined?S:s;
                if(L!==undefined|l!==undefined) this.channels[2] = L!==undefined?L:l;
                return this
            default: 
                console.error("Can't set Colour channels, type is undefined")
        }
    };
// ==============================================================================
    getOpacity() { return this.alpha * 100 };

    /**
     * Set the opacity from transparent (0) to opaque (100);
     * @param {Number} opacity - a number from 0 - 100 
     */
    setOpacity(opacity) {
        if(opacity <= 0) {
            this.alpha = 0;
            return this;
        } 
        if(opacity >= 100) {
            this.alpha = 1;
            return this;
        }
        this.alpha = opacity/100;
        return this
    }

// ==========================================================================
    darken(percentage){
        // if negative, lighten it
        if(percentage < 0) return this.lighten(Math.abs(percentage));

        // otherwise convert to hsl if not already in hsl
        const typeBefore = this.type; // note the type so we can convert back to it
        if(this.type !== 'hsl') this.convert('hsl');

        // get lightness value
        let [H,S,L] = this.getChannels();

        // darken by the required percentage
        L -= percentage;

        // if under 0, clip it at 0
        if(L < 0 ) L = 0;

        // set the new lightness
        this.setChannels({ L });

        // convert back to original type if not hsl
        if(typeBefore !== 'hsl') this.convert(typeBefore);

        // return the colour instance for method chaining
        return this
    }

    lighten(percentage){
        // if negative, lighten it
        if(percentage < 0) return this.darken(Math.abs(percentage));

        // otherwise convert to hsl if not already in hsl
        const typeBefore = this.type; // note the type so we can convert back to it
        if(this.type !== 'hsl') this.convert('hsl');

        // get the lightness value
        let [H,S,L] = this.getChannels();

        // lighten by the required percentage
        L += percentage;

        // if it goes over 100, clip it at 100
        if(L > 100) L = 100;

        // set the new lightness
        this.setChannels({ L });

        // convert back to original type if not hsl
        if(typeBefore !== 'hsl') this.convert(typeBefore);

        // return the colour instance for method chanining
        return this
    }
// ==========================================================================
    saturate(percentage){
        // if negative, desaturate
        if(percentage < 0) return this.desaturate(Math.abs(percentage));

        // otherwise convert to hsl if not already in hsl
        const typeBefore = this.type; // note the type so we can convert back to it
        if(this.type !== 'hsl') this.convert('hsl');

        // then get saturation
        let [H,S,L] = this.getChannels();

        // add on the desired percentage
        S += percentage;

        // if over 100, clip it
        if(S > 100 ) S = 100;

        // set saturation
        this.setChannels({ S });

        // convert back to original type if not hsl
        if(typeBefore !== 'hsl') this.convert(typeBefore);

        // return the colour instance for method chaining
        return this
    }

    desaturate(percentage){
        // if negative, saturate
        if(percentage < 0) return this.saturate(Math.abs(percentage));

        // otherwise convert to hsl if not already in hsl
        const typeBefore = this.type; // note the type so we can convert back to it
        if(this.type !== 'hsl') this.convert('hsl');

        // get saturation
        let [H,S,L] = this.getChannels();

        // take away the desired percentage
        S -= percentage;

        // if under 0, clip it
        if(S < 0) S = 0;

        // set it
        this.setChannels({ S });

        // convert back to original type if not hsl
        if(typeBefore !== 'hsl') this.convert(typeBefore);

        // return the colour instance for method chaining
        return this
    }
// ==============================================================================
    getContrast(){
        const initialType = this.type;
        if(this.type !== 'rgb') this.convert('rgb');

        const [ R , G , B ] = this.channels;

        // Get YIQ ratio
        const yiq = ((R * 299) + (G * 587) + (B * 114)) / 1000;

        //convert back to initialColour
        if(initialType !== 'rgb') this.convert(initialType);

        // Check contrast
        let black;
        let white;
        switch(this.type){
            case'rgb' : black = 'rgba(0,0,0,1)';        white ='rgba(255,255,255,1)'; break;
            case'hsl' : black = 'hsla(0,0%,0%,1)';      white ='hsla(0,0%,100%,1)';   break;
            case'hex' : black = '#000000';              white ='#FFFFFF';             break;
            case'cmyk': black = 'cmyk(0%,0%,0%,100%)';  white ='cmyk(0%,0%,0%,0%)';   break;
            case'hwb' : black = 'hwb(0,0%,100%)';       white ='hwb(0,100%,0%)';      break;
            case'hsv' : black = 'hsv(0,0%,0%)';         white ='hsv(0,0%,100%)';      break;
            default: console.warn('unrecognised type!, cannot match appropriate colour')
        }
       

        return (yiq >= 128) ? black : white;

    };
// ==============================================================================
    /**
     * Turns a colour object into a CSSStyle string;
     * @return {String} - css colour string //? rgba(255,40,113,1)
     */
    CSS() {
        switch(this.type){
            case'rgb':
                const [R,G,B] = this.channels;
                return `rgba(${R},${G},${B},${this.alpha})`
            case'hsl':
                const [H,S,L] = this.channels;
                return `hsla(${H},${S}%,${L}%,${this.alpha})`
            case'hex':
                return `#${this.channels.join('')}`;
            case'hsv':
            case'hwb':
            case'cmyk':
            default: 
                return console.warn('Error: unpassable colour type');
        }
    }

    /**
     * Converts a colour from one format to another
     * @param  {String} convertTo - convert to format? //? rgb|hsl|hex
     *
     */
    convert(convertTo){
        convertTo = convertTo.toLowerCase();

        // if same colour type, do nothing 🤷
        if(this.type === convertTo){
            return this
        }

        switch(convertTo){
            case'rgb':
                if(this.type === 'hex')  this.channels = HEX2RGB(...this.channels);
                if(this.type === 'hsl')  this.channels = HSL2RGB(...this.channels);
                if(this.type === 'cmyk') this.channels = CMYK2RGB(...this.channels);
                if(this.type === 'hsv')  this.channels = HSV2RGB(...this.channels);
                if(this.type === 'hwb')  this.channels = HWB2RGB(...this.channels);
                if(this.type === 'hsi')  this.channels = HSI2RGB(...this.channels);
                if(this.type === 'lab')  this.channels = LAB2RGB(...this.channels);
                if(this.type === 'lch')  this.channels = LCH2RGB(...this.channels);
                this.type = 'rgb';
                return this;

            case'hsl':
                if(this.type === 'hsv') this.channels = HSV2HSL(...this.channels);
                else {
                    if(this.type !== 'rgb') this.convert('rgb'); 
                    // now with rgb channels
                    this.channels = RGB2HSL(...this.channels);
                }
                this.type = 'hsl';
                return this;
            case'hex':
                if(this.type !== 'rgb') this.convert('rgb');
                // now with rgb channels
                this.channels = RGB2HEX(...this.channels);
                this.type = 'hex';
                return this;
            case 'cmyk':
                if(this.type !== 'rgb') this.convert('rgb');
                // now with rgb channels
                this.channels = RGB2CMYK(...this.channels);
                this.type = 'cmyk';
                return this;
            case 'hwb':
                if(this.type === 'hsv') this.channels = HSV2HWB(...this.channels);
                else {
                    if(this.type !== 'rgb') this.convert('rgb'); 
                    // now with rgb channels
                    this.channels = RGB2HWB(...this.channels);
                }
                this.type = 'hwb';
                return this;
            case 'hsv':
                if(this.type === 'hsl') this.channels = HSL2HSV(...this.channels);
                else {
                    if(this.type !== 'rgb') this.convert('rgb'); 
                    // now with rgb channels
                    this.channels = RGB2HSV(...this.channels);
                }
                this.type = 'hsv';
                return this;
            case 'hsi': {
                if(this.type !== 'rgb') this.convert('rgb');
                // now with rgb channels
                this.channels = RGB2HSI(...this.channels);
                this.type = 'hsi';
                return this;
            }
            case 'lab': {
                if(this.type === 'lch') this.channels = LCH2LAB(...this.channels);
                else {
                    if(this.type !== 'rgb') this.convert('rgb');
                    // now with rgb channels
                    this.channels = RGB2LAB(...this.channels);
                }
                this.type = 'lab';
                return this;
            }
            case 'lch': {
                if(this.type === 'lab') this.channels = LAB2LCH(...this.channels);
                else {
                    if(this.type !== 'rgb') this.convert('rgb');
                        // now with rgb channels
                        this.channels = RGB2LCH(...this.channels);
                }
                this.type = 'lch';
                return this;
            }
            default: console.warn(`convert doesn't recognise ${convertTo} as a colour to convert to`)
        }
    }

    clone(){
        return new Colour(this.CSS());
    }
}