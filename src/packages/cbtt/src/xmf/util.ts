

/* 
 * until the relevant spec adds *spread-exports*,
 * will need to have *spread-exports* expressed as *static wildcard-exports* here at top
 */
export * from "cbtt/src/util/all" ;










import * as util from "cbtt/src/util/all" ;



export abstract class StringKeyedDictTo<Value extends null | {}> {
  [key: string]: Value ;
} ;



export function stringConcatFromIterable(src: Iterable<string>): string ;
export function stringConcatFromIterable(src: Iterable<string>) {
  return [...src].join("") ;
}

interface  Tokenised {}
interface  Tokenised extends Iterable<string> {}
namespace  Tokenised {

  ;  // TS(1205)
}
export { Tokenised , } ;











export {} ; // TS(1208)
