/** 
 * init/setup the polyfills for `global`
 * 
 */




import "core-js/actual" ;
// import "core-js/full" ;
import "core-js/proposals/map-upsert-stage-2" ;









/** 
 * for quite a while 
 * these two methods of {@link SVGGraphicsElement } were initially specified to return the SVG-specific `interface`s, so
 * it'd take a while until such change gets properly implemented by browsers
 * 
 */
for (const methodName of (
  ["getScreenCTM", "getCTM"] satisfies 
  (keyof Pick<SVGGraphicsElement, "getCTM" | "getScreenCTM">)[]
)) {
  const originalImpl = (
    SVGGraphicsElement.prototype[methodName]
  ) ;
  SVGGraphicsElement.prototype[methodName] = (
    function (this: SVGGraphicsElement, ...args ) {
      const originalReturnVal = (
        originalImpl.apply(this, ...args) as 
        (SVGMatrix | DOMMatrix )
      ) ;
      const newReturnVal = (
        // TODO
        DOMMatrix.fromMatrix((
          originalReturnVal
        ))
      ) satisfies DOMMatrix ;
      return (
        newReturnVal
      ) ;
    }
  ) ;
} ;












export {} ; // TS(1208)

