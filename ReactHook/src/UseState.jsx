import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function UseState() {
  const [count, increase] = useState(0);
  return (
    <div>
      <h1>Count Increased by = {count}</h1>
      <Form>
        <Button
          variant="primary"
          type="button"
          onClick={() => increase(count + 1)}
        >
          Increase Count
        </Button>
      </Form>
    </div>
  );
}
