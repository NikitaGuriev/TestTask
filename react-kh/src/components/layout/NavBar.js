import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link as RouterLink} from "react-router-dom";

export const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={RouterLink} to="/">MitraSoft</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {props.navlinks.map((el) => (
              <Nav.Link key={el.id} as={RouterLink} to={el.to}>{el.title}</Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}