require('../../mathExtension')();

module.exports = (R,G,B,luma) => {
    switch(luma) {
        case'601':  { return 0.2989*R + 0.5870*G + 0.1140*B  } // SDTV
        case'240':  { return 0.2120*R + 0.7010*G + 0.0870*B  } // Adobe
        case'709':  { return 0.2126*R + 0.7152*G + 0.0722*B  } // HDTV
        case'2020': { return 0.2627*R + 0.6780*G + 0.0593*B  } // UHDTV HDR
        default: throw new Error(`luma of ${luma} not recognised`)
    }
}