import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import SideNav from '../Pages/Shared/SideNav/SideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <Container>
                <Row>
                    <Col lg='4'>
                        <SideNav></SideNav>
                    </Col>
                    <Col lg='8' className='border 2px solid red'>
                        <Outlet></Outlet>
                    </Col>

                </Row>
            </Container>
        </div >
    );
};

export default Main;