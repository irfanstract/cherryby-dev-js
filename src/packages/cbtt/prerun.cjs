"use strict" ;











/** 
 * (for now) Node can't natively eval TS file, so
 * a plug-in/add-on like TS-Node will be necessary.
 * 
 * https://typestrong.org/ts-node/docs/usage/#node-flags-and-other-tools .
 * for ad-hoc usage in Node 
 * the right choice would be `ts-node/register` ;
 * however,
 * importing `ts-node/register` would *throw* in browser envs so
 * the guard(ing) (by `isNode: boolean`) will be necessary.
 * 
 */
{
  console["log"](`[CBTT]`, `typescript sources incoming, requires 'ts-node/register'`) ;

  if ((
    require("cbtt/is-browser-or--nodejs.cjs")
    .isNode
  ) ) {
    console["log"](`[CBTT]`, `detected Node env`) ;
    console["log"](`[CBTT]`, `importing 'ts-node/register'`) ;
    require("ts-node/register") ;
    console["log"](`[CBTT]`, `done`) ;
  }
  
}















