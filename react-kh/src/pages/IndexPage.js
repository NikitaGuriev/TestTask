import {Button, Col, Container, Row} from "react-bootstrap";
import AXIOS from 'axios';

AXIOS.get('https://jsonplaceholder.typicode.com/photos/?_limit=24')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });

/**
 * Блок определения констант
 */
export const IndexPage = () => {
  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            1 of 1
          </Col>
          <Col>
            <Button
              variant="primary"
            >
              Index page
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}