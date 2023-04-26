









(async () => {
  ;
  if ((
    (
      (
        await (async (): Promise<boolean> => {
          try {
            ;
            const { fileURLToPath, } = await import("node:url") ; 
            if ((
              // TODO honour symlinking
              process.argv[1] === (
                fileURLToPath(import.meta.url) 
                // TS(1343)
                // "???"
              )
            ) ) { 
              return true ;
            }
          } catch (z) {
            console["warn"](z) ;
          }
          return false ;
        })()
      )
      && (console["log"](`yes, is run as main module`), true )
    )
    || (console["log"](`ignoring whether this's the main module or not`), true )
  )) {
    {
      ;
      console["log"](`awaiting`) ;
      await (
        new Promise<void>(resume => (
          setTimeout(resume, 4.5 * 1000 )
        ))
      ) ;
      console["log"](`done`) ;
    }
  } else {
    ;
  }
})() ;






export {} ; // TS(1208)
