/** 
 * 
 * @deprecated
 */

import * as util from "im-envited/src/projects/utility-functions/all" ;




// import 
// import * as pm from "cbtt/src/ems-fs-native.cjs" ;
// const { FS: files, IDBFS, } = (pm as Partial<typeof global> ) ;
import("cbtt/src/emae") ;

import "cbtt/src/em-s-types.d" ;
(async () => {
  console["log"](`FS Test`) ;
  //
  const { default: files, } = await import("cbtt/src/idbfs") ;
  const synchrFs = (
    (...[shallSave,]: [save: boolean]) => (
      new Promise<void>((resume, reject) => (
        files.syncfs(!shallSave, (z) => (z ? reject(z) : resume() ) )
      ))
    )
  ) ;
  console["log"](`FS Test starting`) ;
  if (1 ) {
    ;
    console["log"](`2 turns`) ;
    for (const _ of [0, 1]) {
      ;
      await synchrFs(false) ;
      ;
      const packageInfoFileName = (
        `package.txt`
      ) ;
      await synchrFs(false) ;
      //
      const value0 = (
        // files.analyzePath(packageInfoFileName, false).exists ?
        // files.readFile(packageInfoFileName, { encoding: "utf8", flags: "a+", })
        // : null
        (
          files.writeFile(packageInfoFileName, "", { flags: "a", }) ,
          files.readFile(packageInfoFileName, { encoding: "utf8", })
        )
      ) ;
      console["log"]({ value0, }) ;
      const value2 = (
        "Date: " + Date()
      ) ;
      console["log"]({ value2, }) ;
      (
        await synchrFs(false) ,
        files.writeFile(packageInfoFileName, value2) ,
        await synchrFs(true) 
      ) ;
      console["log"](`written`) ;
      ;
      console["log"](`done each turn`) ;
    }
  }
})() ;



export default () => {
  return (
    <div>
      <p>IDBF</p>
    </div>
  ) ;
} ;








export {} ; // TS(1208)
