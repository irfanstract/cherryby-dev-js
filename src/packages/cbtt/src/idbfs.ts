


import * as util from "cbtt/src/util/all" ;

const neverResolving = (
  new Promise<never>((resolve) => {})
) ;






import pm0 from "./ems-fs.mjs" ;


const pm = await pm0() ;


const { 
  
  FS: files = (
    console["error"]("undefined 'files'") ,
    /*
     * in Node the following would cause `exit(13)`, but 
     * this fallthrough implies failure anyway -
     */
    await neverResolving
  ), 

  IDBFS = (
    console["error"]("undefined 'IDBFS'") ,
    /*
     * in Node the following would cause `exit(13)`, but 
     * this fallthrough implies failure anyway - 
     * make sure the calling code be a browser env!
     */
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











