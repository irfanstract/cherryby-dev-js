"use strict" ;

/** 
 * https://typestrong.org/ts-node/docs/usage/#node-flags-and-other-tools 
 * 
 */
{
  console["log"](`[CBTT]`, `prerequisite - 'ts-node/register'`) ;
  require("ts-node/register") ;
}








if (require.main === module) {
  require("cbtt/src/com") ;
}







