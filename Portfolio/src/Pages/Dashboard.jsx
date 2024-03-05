import React from "react";

import Quallification from "./Quallification";
import Desc from "./Desc";
import Projects from "./Projects";

export default function Dashboard() {
  return (
    <div class="container py-4 flex flex-col w-full h-full bg-mainBg min-h-screen relative">
      <Desc />
      <Quallification />
      <Projects />
    </div>
  );
}
