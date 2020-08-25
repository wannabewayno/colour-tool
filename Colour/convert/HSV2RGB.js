require('../mathExtension')();

/**
 * 
 * @param {Number} H - Hue [0,360] 
 * @param {Number} S - Saturation [0,100] (percent)
 * @param {Number} V - Value [0,100] (percent)
 */
module.exports = (H,S,V) => {

    H /= 60; // needs to be [0,6]
    S /= 100; // from percentage to [0,1]
    V /= 100; // from percentage to [0,1]

    if (H === undefined) return [V,V,V];

    const i = Math.floor(H);
    const f = (i % 2 === 0)? 1 - (H - i) : H - i // test if i is even
    const m = V * (1 - S);
    const n = V * (1 - S * f);
    
    switch(i) {   
        case 6:   
        case 0: return [V, n, m].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0:channel);   
        case 1: return [n, V, m].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0:channel);   
        case 2: return [m, V, n].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0:channel);   
        case 3: return [m, n, V].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0:channel);   
        case 4: return [n, m, V].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0:channel);   
        case 5: return [V, m, n].map(value => Math.round(value * 255)).map(channel => channel < 0 ? 0:channel);
    } 
}