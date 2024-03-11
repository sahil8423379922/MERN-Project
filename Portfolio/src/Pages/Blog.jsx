import React from "react";
import { useParams } from "react-router-dom";

export default function Blog() {
  const params = new URLSearchParams(window.location.search);
  const title = params.get("title");
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}
