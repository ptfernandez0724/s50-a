// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import { Fragment, useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
// react context
import UserContext from '../UserContext';

const AppNavbar = () => {

    const { user } = useContext(UserContext)

    let rightNav = (user.accessToken !== null) 
        
        ?       
        <Fragment>
            <Nav.Link as={NavLink} to="/logout">Logout</Nav.Link>
        </Fragment>
        :
        <Fragment>
                    <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link> 
        </Fragment>


    return (
        <Navbar bg="warning" expand="lg" className="mb-3">
            <Navbar.Brand as={Link} to="/">Zuitt Booking System</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/courses">Courses</Nav.Link>                   
                </Nav>
                <Nav>
                    {rightNav}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default AppNavbar;