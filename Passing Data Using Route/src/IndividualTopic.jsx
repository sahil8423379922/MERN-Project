import React from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./CSS/Topics.module.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function IndividualTopic({ value, index, link }) {
  return (
    <>
      <Table>
        <Row>
          <Col className="col-8">
            {index + 1}. <span className={`${style.text}`}>{value}</span>
          </Col>
          <Col className="col-4">
            <Link
              to={"/video?id=" + link}
              className="ms-2 px-4 py-1"
              variant="success"
            >
              <Button>Click Here</Button>
            </Link>
          </Col>
        </Row>
      </Table>
    </>
  );
}
