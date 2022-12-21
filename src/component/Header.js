import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Acceuil</Nav.Link>
            <Nav.Link href="pokedex">My pokedex</Nav.Link>
            <Nav.Link href="pokemons">Pokemons</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
