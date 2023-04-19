/** 
 * https://stackoverflow.com/questions/17575790/environment-detection-node-js-or-browser?noredirect=1&lq=1
 * 
 */
"use strict" ;










exports.isNode = false ;
exports.isBrowser = false ;

/** 
 * https://stackoverflow.com/a/31456668 
 */
{
  try {
    if (process.versions.node ) {
      exports.isNode = true ;
    }
  } catch (z) {
    console["log"](String(z)) ;
  }
}

/** 
 * https://stackoverflow.com/a/31456668 
 */
{
  try {
    if (localStorage) {
      exports.isBrowser = true ;
    }
  } catch (z) {
    console["log"](String(z)) ;
  }
  try {
    if (document.createElement ) {
      exports.isBrowser = true ;
    }
  } catch (z) {
    console["log"](String(z)) ;
  }
}






