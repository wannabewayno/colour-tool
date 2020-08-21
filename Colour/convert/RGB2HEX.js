module.exports = (R,G,B) => {
    R = R.toString(16).toUpperCase();
    G = G.toString(16).toUpperCase();
    B = B.toString(16).toUpperCase();
    
    return [R,G,B]
}