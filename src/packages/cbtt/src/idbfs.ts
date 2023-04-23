


import * as util from "cbtt/src/util/all" ;

const neverResolving = (
  new Promise<never>((resolve) => {})
) ;






import pm0 from "./ems-fs.mjs" ;


const pm = await pm0() ;


const { 
  
  FS: files = (
    console["error"]("undefined 'files'") ,
    await neverResolving
  ), 

  IDBFS = (
    console["error"]("undefined 'IDBFS'") ,
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

if (1) {
  const synchrFs = (
    (...[shallSave,]: [save: boolean]) => (
      new Promise<void>((resume, reject) => (
        files.syncfs(!shallSave, (z) => (z ? reject(z) : resume() ) )
      ))
    )
  ) ;
  const {
    dirname = "/usr-files-idbfs-dot-ts-3333333333333M333/" ,
  } = {} as Partial<{
    dirname: string ;
  }> ;
  console["log"](`tring to mount IDBFS`, { dirname, }) ;
  (() => {
    const actualPath = (
      dirname
      .replace(/\/$/g, "") /* NO trailing slash */
    ) ;
    console["log"]({ actualPath, }) ;
    (
      files.analyzePath(actualPath, false).exists ||
      files["mkdir"](actualPath)
    ) ;
    (
      files.mount(IDBFS, {}, (
        actualPath
      ) )
    ) ;
  })() ;
  console["log"](`mounted the IDBFS`, { dirname, }) ;
  console["log"](`tring to 'synchrFs'`) ;
  if (1) {
    await (
      synchrFs(false)
    ) ;
  }
  console["log"](`done 'synchrFs'`) ;
  files.chdir(dirname) ;
}

export default files ;











