import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import style from "./CSS/Topics.module.css";
import { Col, Container, Row, Table } from "react-bootstrap";
import IndividualTopic from "./IndividualTopic";
export default function TutorialList() {
  const topic = [
    {
      name: "What is Pyhton",
      link: "7wnove7K-ZQ",
    },
    {
      name: "Datatype in Pyhton",
      link: "vLqTf2b6GZw",
    },
    {
      name: "Tokens in Python",
      link: "7wnove7K-ZQ",
    },
    {
      name: "Input and Output in Python",
      link: "7wnove7K-ZQ",
    },
    {
      name: "Conditional Statement",
      link: "7wnove7K-ZQ",
    },
    {
      name: "Looping",
      link: "7wnove7K-ZQ",
    },
    {
      name: "List",
      link: "7wnove7K-ZQ",
    },
    {
      name: "Tuple",
      link: "7wnove7K-ZQ",
    },
    {
      name: "Dictionary",
      link: "7wnove7K-ZQ",
    },
    {
      name: "List Comprehension",
      link: "7wnove7K-ZQ",
    },
  ];

  return (
    <>
      <center>
        <h3>Topics to Learn</h3>
      </center>

      <ListGroup>
        {topic.map((value, index) => {
          return (
            <>
              <Container>
                <ListGroup.Item key={value}>
                  <IndividualTopic
                    value={value.name}
                    index={index}
                    link={value.link}
                  />
                </ListGroup.Item>
              </Container>
            </>
          );
        })}
      </ListGroup>
    </>
  );
}
