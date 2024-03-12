// import React from "react";
// import { useState } from "react";
// import Button from "react-bootstrap/esm/Button";
// import { Component } from "react";
// import { useEffect } from "react";

// export default function App() {
//   const [count, increase] = useState(0);
//   const [power, calculate] = useState(1);

//   useEffect(() => {
//     calculate(count * count);
//   }, [count]);

//   return (
//     <>
//       <center>
//         <h1>You clicked {count} time</h1>
//         <Button
//           onClick={() => {
//             increase(count + 1);
//           }}
//         >
//           Click
//         </Button>
//         <h4>
//           Power of {count} is {power}
//         </h4>
//       </center>
//     </>
//   );
// }

import React from "react";
import Youtube from "./Youtube";

export default function App() {
  return (
    <div>
      <Youtube />
    </div>
  );
}
