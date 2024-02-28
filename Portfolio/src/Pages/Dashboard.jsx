import React from "react";

import Quallification from "./Quallification";
import Desc from "./Desc";

export default function Dashboard() {
  return (
    <div class="container py-4">
      <Desc />
      <Quallification />
    </div>
  );
}
