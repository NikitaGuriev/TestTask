import {Button, Col, Container, Row} from "react-bootstrap";

/**
 * Блок определения констант
 */

export const AboutPage = () => {
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
              About page
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}