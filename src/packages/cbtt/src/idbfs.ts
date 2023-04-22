


import * as util from "cbtt/src/util/all" ;

const neverResolving = (
  new Promise<never>((resolve) => {})
) ;






import pm0 from "./ems-fs.mjs" ;


const pm = await pm0() ;


const { 
  
  FS: files = (
    await neverResolving
  ), 

  IDBFS = (
    await neverResolving
  ), 

} = (pm as Partial<typeof global> ) ; 


console["log"](pm, { IDBFS, } ) ;



/** 
 * {@link IDBFS}
 * 
 * until there's a way to mount it at `/`,
 * we'll need to ask API users to fall-back to a child path and manually `mount`
 * 
 */
export { IDBFS , } ;

export default files ;











