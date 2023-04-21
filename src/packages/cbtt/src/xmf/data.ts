

import * as util from "cbtt/src/xmf/util" ;












export import StringKeyedDictTo = util.StringKeyedDictTo ;



export type Class = (
  | string
  // | String
) ;
export interface CommentOrElementOps {

  type: symbol | string | Class ; 
  attributes ?: null | StringKeyedDictTo<any> ;
  
  children ?: null | unknown[] ;

} 
export interface CommentNode extends CommentOrElementOps {

  type: typeof CNT ; 
  attributes ?: never ;
  
  /** 
   * describe the CommentNode's contents
   * 
   */
  children: [Node & string] ;

} 
export const CNT = Symbol("!--") ;
export interface Element extends CommentOrElementOps {

  /** 
   * the element's "tag name" - I'd call it "class name" instead
   * 
   */
  type: Class ; 

  /**
   * attributes
   *  
   * due to the storage model of `attributes` being a JSON-like,
   * we can assume the {@link util._.camelCase camel-casedness} of {@link key} and therefore
   * we should {@link util._.kebabCase convert it into the `custom-op-1` style}
   * 
   */
  attributes: (
    | StringKeyedDictTo<null | boolean | number | string>
    // | { [key: string] : undefined ; }
  ) ;
  
  /**
   * optional children
   *  
   * setting to `undefined` will result in the collapsed repr `<Bar ... />`.
   * setting to `[]` (empty array) will result in the repr `<Bar></Bar>`.
   * 
   */
  children?: Node[] ;

} 
export type TextContentNode = (
  | string
) ;
export type Node = (
  | CommentNode
  | Element
  | TextContentNode
) ;



export interface CommentOrElementOps {
  srcCodeInfo ?: null | {} ;
} 














export {} ; //  due to TS(1208)
