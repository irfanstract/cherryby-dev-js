import * as util from "cbtt/src/util/all" ;
import pm0 from "./ems-fs.mjs" ;
const pm = await pm0() ;
const { FS: files, IDBFS, } = (pm as Partial<typeof global> ) ;
// const { default: files, IDBFS } = (pm as ({ default: typeof FS ; } & Partial<typeof global>) ) ;

console["log"](`[EMAE]`) ;

console["log"](pm, { IDBFS, } ) ;

(async () => {
  ;
  if (files) {
    const synchrFs = (
      (...[shallSave,]: [save: boolean]) => (
        new Promise<void>((resume, reject) => (
          files.syncfs(!shallSave, (z) => (z ? reject(z) : resume() ) )
        ))
      )
    ) ;
    const {
      rootDir1: rootDir1 = "/fs11" ,
    } = {} as {
      rootDir1 ?: `/${string}` ;
    } ;
    if (IDBFS) {
      /** 
       * by default it will have a MEMFS mounted at `/` ;
       * will need to manually unmount it
       * 
       */
      ((...[mode = 1, rootDir1 = "/"] : (
        | []
        | [mode: 0, path: string,]
        | [mode: 1, path?: "/",]
      )) => {
        switch1 :
        switch (mode) {
          
          case 0:
            (
              files.analyzePath(rootDir1, false).exists || 
              files.mkdir(rootDir1)
            ) ;
            break switch1 ;

          case 1:
            files.unmount(rootDir1) ;
            break switch1 ;

        }
        files.mount(IDBFS, {}, rootDir1) ;
      })(0, rootDir1 ) ;
      // files.syncfs(true, Object ) ;
      await (
        synchrFs(false)
      ) ;
    }
    for (const _ of [1, 2]) {
      ;
      const dateTimeFilePath = (
        rootDir1.replace(/\/?$/g, () => "/datetime.txt")
      ) ;;
      // console["log"](files) ;
      // files.writeFile(`filename.txt`, `file.txt`, );
      // files.writeFile(`datetime.txt`, Date() satisfies string, );
      if ((
        await synchrFs(false) ,
        console["log"]({ dateTimeFilePath, } ) ,
        !((files.analyzePath(dateTimeFilePath, false) ).exists )
      )) {
        files.writeFile(dateTimeFilePath, Date() satisfies string, );
      } else {
        console["log"](`refusing to overwrite the file the second time.`) ;
      }
      files.writeFile((
        rootDir1
        .replace(/\/?$/g, () => (
          "/" +
          `file-${Math.abs(util._.random(0, Number.MAX_SAFE_INTEGER, false) ) }.txt`
        ) )
      ), `file.txt`, );
      await synchrFs(true) ;
      await synchrFs(false) ;
      console["log"](`file contents: `, files.readFile(dateTimeFilePath, { encoding: "utf8" }, ) ) ;
      console["log"](files.readdir(rootDir1) , ) ;
      await (
        new Promise<void>(resume => (
          setTimeout(resume, 3 * 1000 )
        ))
      ) ;
      console["info"](`done the turn`) ;
    }
    console["info"](`done`) ;
  }
})() ;

