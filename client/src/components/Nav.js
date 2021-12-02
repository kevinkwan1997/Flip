import '../custom.scss'
import { Navbar, Nav } from 'react-bootstrap'
import Container from 'react-bootstrap/Container'


const NavPrimary = ({ username }) => {
    return (
      <div className="navbar">
        <Navbar bg="primary" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Saved Brands</Nav.Link>
          <Nav.Link href="#pricing">History</Nav.Link>
          {(username !== '') ? (
          <Nav.Link href="" id="intro">Welcome, { username }</Nav.Link>
          ) : (
            <span></span>
          )}

        </Nav>
        </Container>
      </Navbar>
      </div>

    )
}

export default NavPrimary
