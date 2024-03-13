import React, { useState } from "react";

import Input from "./Input";

export default function () {
  const [v, change] = useState("");
  return (
    <div>
      <Input
        handelOnchange={(event) => {
          console.log(event.target.value);
          change(event.target.value);
        }}
      />
      <p>{v}</p>
    </div>
  );
}
