




// require("core-js/stable") ;
import  "core-js/stable" ;

// export import assert = require("node:assert") ;
import * as assert from "node:assert" ;
export    { assert , } ;

// export import _ = require("lodash") ;
import * as _ from "lodash" ;
export     { _, } ;
import * as Immutable from "immutable" ;
export   {  Immutable, };

// export import VM = require("node:vm") ;
;

export type CouldLog = {
  (...values: (any[] | [])): void ;
} ;
export const log: CouldLog = (
  (...values) => (
    console["log"](`[CBTT]`, ...values )
  )
) ;
export const emitInfo: CouldLog = (
  (...values) => (
    console["info"](`[CBTT]`, ...values )
  )
) ;
export const warn: CouldLog = (
  (...values) => (
    console["warn"](`[CBTT]`, ...values )
  )
) ;




// // export import Stream = require("node:stream") ;
// import * as Stream from "node:stream" ;
// export    { Stream, } ;






