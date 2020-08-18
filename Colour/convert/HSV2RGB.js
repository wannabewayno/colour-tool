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
        case 0: return [v, n, m].map(value => Math.round(value * 255));   
        case 1: return [n, v, m].map(value => Math.round(value * 255));   
        case 2: return [m, v, n].map(value => Math.round(value * 255));   
        case 3: return [m, n, v].map(value => Math.round(value * 255));   
        case 4: return [n, m, v].map(value => Math.round(value * 255));   
        case 5: return [v, m, n].map(value => Math.round(value * 255));   } 
}