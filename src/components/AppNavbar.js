// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="warning" expand="lg" className="mb-3">
            <Navbar.Brand href="#home">Zuitt Booking System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#courses">Courses</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar;