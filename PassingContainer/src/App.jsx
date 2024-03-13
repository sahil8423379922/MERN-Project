import React from "react";
import Container from "./Container";
import { Button, Card } from "react-bootstrap";
import Search from "./Search";
import Crausel from "./Crausel";

export default function App() {
  return (
    <>
      <Search />
      <Crausel />
      <Container>
        <Card
          onClick={(e) => {
            console.log(e);
          }}
          style={{ width: "18rem" }}
        >
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
}
