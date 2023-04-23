

import * as util from "cbtt/src/xmf/util" ;












export import StringKeyedDictTo = util.StringKeyedDictTo ;



import { 
  Class ,
  CNT , 
} from "cbtt/src/xmf/data" ;



import {

  Node, 
  CommentNode ,
  Element ,
  CommentOrElementOps ,
  TextContentNode ,
  
} from "cbtt/src/xmf/data" ;



import { 
  CommentOrElementOpsRe, 
  ElementRe ,
} from "cbtt/src/xmf/data" ;



export function stringifyElement(value: CommentNode | Element): Tokenised ;
export function stringifyElement(e: CommentNode | Element) {
  return {
    *[Symbol.iterator]() {
      switch (e.type) {

      case CNT :
        yield "<!--" ;
        for (const child of (e.children ?? []) ) {
          yield* stringifyNode(child) ;
        }
        yield "-->" ;
        return ;
        
      default :
        const cls = (
          (e.type satisfies string)
        ) ;
        yield "<" ;
        yield cls ;
        yield " " ;
        for (const [key, value] of Object.entries(e.attributes) ) {
          /** 
           * due to the storage model of `attributes` being a JSON-like,
           * we can assume the {@link util._.camelCase camel-casedness} of {@link key} and therefore
           * we should {@link util._.kebabCase convert it into the `custom-op-1` style}
           */
          yield util._.kebabCase(key) ;
          Switch1:
          switch(typeof value) {

            case "boolean" :
              switch (value) {
                case true :
                  break Switch1 ;
                case false :
                  yield "=none" ;
                  break Switch1 ;
              }
              
            default:
              yield "=" ;
              yield JSON.stringify(value) ;
              break Switch1 ;

          }
          yield " " ;
        }
        if (e.children) {
          yield ">"
          yield "\r\n" ;
          for (const child of e.children ) {
            yield* stringifyNode(child) ;
            yield "\r\n" ;
          }
          yield "</"
          yield cls ;
          yield ">" ;
        } else {
          yield "/>" ;
        }

      }
    }
  } satisfies {
    [Symbol.iterator](): Generator<string> ;
  } ;
}

export function stringifyNode(value: Node): Tokenised ;
export function stringifyNode(value: Node): Tokenised {
  if (typeof value === "string") {
    return [value] ;
  }
  // TODO
  return stringifyElement(value) ;
}

import { Tokenised, } from "cbtt/src/xmf/util" ;









export {} ; // due to TS(1208)
