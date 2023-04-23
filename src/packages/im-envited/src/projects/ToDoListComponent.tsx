

import * as util from "im-envited/src/projects/utility-functions/all" ;

const K = util.React.Fragment ;
import * as Ionic from "im-envited/src/projects/Ionic" ;
































export default (
  () => {
    return (
      <div>
        <p>To-Do List</p>
        <Ionic.List
        >
        <Ionic.ReorderGroup
        disabled={false }
        onIonItemReorder={evt => {
          evt.detail.complete(false) ;
        } }
        >
          { (
            [0, 1, 2]
            .map((k) => (
              <K key={k}>
              <Ionic.Item>
              <Ionic.ReorderingHandle slot="start" />
              <div>
                <p>Item <code>{k }</code></p>
              </div>
              </Ionic.Item>
              </K>
            ))
          ) }
        </Ionic.ReorderGroup>
        </Ionic.List>
      </div>
    ) ;
  }
) ;















export {} ; // TS(1208)
