

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



import {
  stringifyElement ,
  stringifyNode ,
} from "cbtt/src/xmf/serialisation" ;

import { Tokenised, } from "cbtt/src/xmf/util" ;

export const example1 = (
  {
    type: "ol" ,
    attributes: { oneByOne: true, } ,
    children: [
      {
        type: "li" ,
        attributes: {} ,
        children: ["user 1",] ,
      } ,
      {
        type: "li" ,
        attributes: {} ,
        children: ["user 2",] ,
      } ,
      {
        type: "li" ,
        attributes: { keysEnabled: false, } ,
        children: ["user 4",] ,
      } ,
      {
        type: "li" ,
        attributes: { key: 5, } ,
        children: ["user 3",] ,
      } ,
    ] ,
  } satisfies Element as Element
) ;
const example1AsString = (
  util.stringConcatFromIterable((
    stringifyElement(example1)
  ))
) ;
console["log"]({ example1AsString, }) ;









export {} ; // due to TS(1208)
