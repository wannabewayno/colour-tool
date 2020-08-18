module.exports = ( R, G, B, max, chroma) => {
    let hue;
    if (chroma === 0) {
        hue = 0;
    } else {
        switch(max) {
            case R:{
                const segment = (G - B) / chroma;
                let shift   = 0 / 60;       // R° / (360° / hex sides)
                if (segment < 0) {          // hue > 180, full rotation
                shift = 360 / 60;         // R° / (360° / hex sides)
                }
                hue = segment + shift;
                break;
            }
            case G: {
                const segment = (B - R) / chroma;
                const shift   = 120 / 60;     // G° / (360° / hex sides)
                hue = segment + shift;
                break;
            }
            case B:{
                const segment = (R - G) / chroma;
                const shift   = 240 / 60;     // B° / (360° / hex sides)
                hue = segment + shift;
                break;
            }
        }
    }
    return Math.round(hue * 60); // hue is in [0,6], scale it up
}