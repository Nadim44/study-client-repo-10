import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SideNav from '../Pages/Shared/SideNav/SideNav';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import { FaArrowRight, FaUser } from 'react-icons/fa';
import { Button, Image } from 'react-bootstrap';
import { useState } from 'react';




const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    // const [theme, setTheme] = useState(false)

    // const handleTheme = () => {
    //     if (theme === false) {
    //         setTheme(true)
    //     }
    //     else {
    //         setTheme(false)
    //     }
    // }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" className='mb-4' bg="light" variant="light">
            <Container>
                <Navbar.Brand >Study World</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link><Link to='/'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/courses'>Courses</Link></Nav.Link>
                        <Nav.Link><Link to='/faq'>FAQ</Link></Nav.Link>
                        <Nav.Link><Link to='/blog'>Blog</Link></Nav.Link>
                    </Nav>
                    <Nav>

                        <Nav.Link>
                            {
                                user?.uid ?
                                    <>
                                        <span className='d-none'> {user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>LogOut</Button>
                                    </>
                                    :
                                    <>
                                        <div >
                                            <span className='m-2'><Link to='/login'>Login</Link></span>
                                            <Link to='/register'>Register</Link>
                                        </div>
                                    </>
                            }


                        </Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            {user?.photoURL ?
                                <Image style={{ height: '30px' }} roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>

                            }
                        </Nav.Link>
                        {/* {
                            theme ?
                                <Link onClick={handleTheme} className='text-decoration-none mx-auto ms-3 mt-2'><FaArrowRight></FaArrowRight> Light</Link>
                                :
                                <Link onClick={handleTheme} className='text-decoration-none ms-3 mt-2'>
                                    <FaArrowRight></FaArrowRight>
                                    Dark</Link>
                        } */}
                    </Nav>
                    <div className='d-lg-none'>
                        <SideNav></SideNav>
                    </div>
                </Navbar.Collapse>
            </Container>

        </Navbar>
    );
};

export default Header;





