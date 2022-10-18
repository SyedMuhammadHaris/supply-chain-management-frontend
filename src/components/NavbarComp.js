import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../images/LOGO-01.png';
import './styles.css';
import {Link } from 'react-router-dom';
 
const NavbarComp = () => {
  return (
    
    <header>
      <Navbar collapseOnSelect expand="lg"  variant="light" sticky="top" >
        <Container fluid="sm">
          <Navbar.Brand  className="navbar-brand">
            <Link to="/">
            <img src={Logo} alt="LOGO" className='logo'/>
            </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='navartoggle'/>
        <Navbar.Collapse id="responsive-navbar-nav" >
          <Nav className="ms-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link><Link to="/signup">Signup</Link></Nav.Link> 
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </header>
    
  );
}

export default NavbarComp;