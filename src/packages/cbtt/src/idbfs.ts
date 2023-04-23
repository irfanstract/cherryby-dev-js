


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

if (1) {
  const DEBUG /* future version of `strictFunctionTypes` may make breaking change to `const pushLog = console["log"] ;` */ : {
    (...args: any[]): void ;
  } = (
    (...args) => (
      console["log"](`[IDBFS.ts]`, ...args)
    )
  ) ; 
  /** 
   * see also 
   * https://emscripten.org/docs/api_reference/Filesystem-API.html#FS.syncfs
   * 
   */
  const fixOutOfSyncness = (
    (...[mode2,]: [mode: "r" | "w"]) => (
      new Promise<void>((resume, reject) => (
        files.syncfs((
          mode2 === "r"
        ), (z) => (
          z ? reject(z) : resume() 
        ) )
      ))
    )
  ) ;
  const {
    dirname = "/usr-files-idbfs-dot-ts-3333333333333M333/" ,
  } = {} as Partial<{
    dirname: string ;
  }> ;
  DEBUG(`trying to mount the IDBFS`, { dirname, }) ;
  (() => {
    const actualPath = (
      dirname
      .replace(/\/$/g, "") /* NO trailing slash */
    ) ;
    DEBUG({ actualPath, }) ;
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
  DEBUG(`mounted the IDBFS`, { dirname, }) ;
  DEBUG(`trying to '${Object.keys({ fixOutOfSyncness, }) }'`) ;
  if (1) {
    await (
      fixOutOfSyncness("r")
    ) ;
  }
  DEBUG(`done '${Object.keys({ fixOutOfSyncness, }) }'`) ;
  files.chdir(dirname) ;
}

export default files ;











