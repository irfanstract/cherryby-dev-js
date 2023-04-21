import * as util from "cbtt/src/util/all" ;
import * as pm from "cbtt/src/ems-fs.cjs" ;
const { FS: files, IDBFS, } = (pm as Partial<typeof global> ) ;
// const { default: files, IDBFS } = (pm as ({ default: typeof FS ; } & Partial<typeof global>) ) ;

console["log"](pm, { IDBFS, } ) ;

(async () => {
  ;
  if (files) {
    if (IDBFS && 0) {
      files.mount(IDBFS, {}, "/") ;
      files.syncfs(true, Object ) ;
    }
    // console["log"](files) ;
    // files.writeFile(`filename.txt`, `file.txt`, );
    files.writeFile(`datetime.txt`, Date() satisfies string, );
    files.writeFile(`file-${Math.abs(util._.random(0, Number.MAX_SAFE_INTEGER, false) ) }.txt`, `file.txt`, );
    console["log"](files.readdir(".") , ) ;
    await (
      new Promise<void>(resume => (
        setTimeout(resume, 3 * 1000 )
      ))
    ) ;
    console["info"](`done`) ;
  }
})() ;

