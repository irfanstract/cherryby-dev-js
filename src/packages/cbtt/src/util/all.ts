




require("core-js/stable") ;

export import assert = require("node:assert") ;

export import _ = require("lodash") ;
export import Immutable = require("immutable") ;

export import VM = require("node:vm") ;

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




export import Stream = require("node:stream") ;






