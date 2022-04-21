import {Button, Col, Container, Row} from "react-bootstrap";
import AXIOS from 'axios';

// const getData = async () => {
//   return await AXIOS.get('https://jsonplaceholder.typicode.com/photos/?_limit=24')
//     .then((response) => {
//       return response;
//     });
// }

/**
 * Блок определения констант
 */
export const IndexPage = async () => {

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col>
            <h2>Index page</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            Lorem
          </Col>
        </Row>
      </Container>
    </>
  )
}