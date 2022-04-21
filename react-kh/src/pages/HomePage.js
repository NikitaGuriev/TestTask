import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";
import AXIOS from 'axios';

const API_URI = 'https://jsonplaceholder.typicode.com/photos/?_limit=24';

/**
 * Блок определения констант
 */
export const HomePage = () => {

  const [appState, setAppState] = useState([]);

  useEffect(() => {
    AXIOS.get(API_URI).then((resp) => {
      const arr = [];
      const chunkSize = 6;
      for (let i = 0; i < resp.data.length; i += chunkSize) {
        arr.push(resp.data.slice(i, i + chunkSize));
      }
      setAppState(arr);
    });
  }, []);

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h4>
            Home page
          </h4>
        </Col>
      </Row>
      <Row>
        <Col>
          {
            appState &&
            <div>
              {appState.map((el, i) => (
                <Items key={i} item={el}/>
              ))}
            </div>
          }
        </Col>
      </Row>
    </Container>
  )
}
const Items = ({item}) => {
  console.log(item);
  return (
    <div>
      <Row className="my-4 p-4 shadow-sm rounded bg-white">
        {item.map(x => (
          <Col>
            <Card style={{width: '18rem'}}>
              <Card.Img variant="top" src={x.url}/>
              <Card.Body>
                <Card.Title>{x.title}</Card.Title>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

