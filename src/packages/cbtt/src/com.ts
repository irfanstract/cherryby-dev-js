
import * as util from "cbtt/src/util/all" ;








util["log"](`com!`) ;



const arrayPrototypeMemberNames = (
  Array.from({
    *[Symbol.iterator]() {
      for (const name of Object.getOwnPropertyNames(Array.prototype ) ) {
        yield name ;
      }
    }
  })
) ;

util["log"](`Array`, ...(
  arrayPrototypeMemberNames
)) ;
util["log"](`name at index ${72 } uppercased:`, arrayPrototypeMemberNames[72]?.toUpperCase() ) ;






