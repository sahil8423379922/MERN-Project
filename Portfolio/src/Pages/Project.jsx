import React from "react";
import { useLocation } from "react-router-dom";

export default function Project(props) {
  const location = useLocation();

  // Access state from location object
  const { state } = location;
  if (!state) {
    return <div>No state found</div>;
  }

  // Extract 'id' from state
  const { id } = state;
  return <div>{id}</div>;
}
