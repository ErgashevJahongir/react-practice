import React, { PureComponent } from "react";
import ComponentE from "../Hook/ComponentE";
import ComponentD from "./ComponentD";

// export class ComponentC extends PureComponent {
//     render() {
//         return (
//             <div>
//                 <ComponentD />
//             </div>
//         );
//     }
// }

function ComponentC() {
    return <ComponentE />;
}

export default ComponentC;
