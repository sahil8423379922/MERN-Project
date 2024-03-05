import React from "react";

export default function TodoItem({ value, index }) {
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{value.title}</td>
        <td>{value.desc}</td>
        <td>{value.remark}</td>
      </tr>
    </>
  );
}
