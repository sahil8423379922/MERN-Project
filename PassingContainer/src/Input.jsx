import React from "react";
import { Form } from "react-bootstrap";

export default function Input({ handelOnchange }) {
  return (
    <Form>
      <Form.Control
        onChange={handelOnchange}
        type="email"
        placeholder="Enter email"
      />
    </Form>
  );
}
