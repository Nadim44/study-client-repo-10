import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const FAQ = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <div className='bg-success p-2 rounded mb-4'>
                    <h1>Some Important Question!!!</h1>
                    <h3>
                        Q:- What is Firebase?
                    </h3>
                    <p>Answer: <span>Firebase provides tools to grow your app and business, for startups & global enterprises. Get your app up and running quickly & securely with fully managed backend infrastructure. </span></p>
                </div>
                <div className='bg-success p-2 rounded mb-4'>
                    <h3>
                        Q:- What is firebase architecture?
                    </h3>
                    <p>Answer: <span>In this architecture, Firebase sits between the server and clients. Your servers can connect to Firebase and interact with the data just like any other client would. In other words, your server communicates with clients by manipulating data in Firebase.</span></p>
                </div>
                <div className='bg-success p-2 rounded mb-4'>
                    <h3>
                        Q:- What are the features of firebase?
                    </h3>
                    <p>Answer: <span>Realtime Database. Build serverless apps by storing and syncing JSON data between your users in near-realtime, on or offline, with strong user-based security. </span></p>
                </div>
                <div className='bg-success p-2 rounded mb-4'>
                    <h3>
                        Q:- Can you tell me names of 3 authentication method?
                    </h3>
                    <p>Answer: <span> 1. Google 2.Github 3.Email & Password</span></p>
                </div>
                <div className='bg-success p-2 rounded mb-4'>
                    <h3>
                        Q:- What is Firebase?
                    </h3>
                    <p>Answer: <span></span></p>
                </div>
            </Container>
        </div>
    );
};

export default FAQ;