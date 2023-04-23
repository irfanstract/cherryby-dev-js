








declare namespace FS {
  export function analyzePath(...args: [
    path: string, 
    dontResolveLastLink: boolean,
  ]): (
    & { exists: boolean ; }
  ) ;
}


