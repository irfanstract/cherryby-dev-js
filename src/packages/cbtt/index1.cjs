"use strict" ;

/** 
 * https://typestrong.org/ts-node/docs/usage/#node-flags-and-other-tools 
 * 
 */
if ((
  require("cbtt/is-browser-or--nodejs.cjs")
  .isNode
) ) {
  console["log"](`[CBTT]`, `detected Node env`) ;
  console["log"](`[CBTT]`, `prerequisite - 'ts-node/register'`) ;
  require("ts-node/register") ;
  console["log"](`[CBTT]`, `done`) ;
}








if (require.main === module) {
  require("cbtt/src/com") ;
}







