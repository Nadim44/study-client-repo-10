import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';

const Blog = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <h1>Important Questions???</h1>
                <div className='bg-success p-2 rounded mb-4'>
                    <h3>
                        Q:- What is cors?
                    </h3>
                    <p>Answer: <span>Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and video.</span></p>
                </div>
                <div className='bg-primary p-2 rounded mb-4'>
                    <h3>
                        Q:- Why are you using firebase? What other options do you have to implement authentication?
                    </h3>
                    <p>Answer: <span>The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code....
                        Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</span></p>
                </div>
                <div className='bg-success p-2 rounded mb-4'>
                    <h3>
                        Q:- How does the private route work?
                    </h3>
                    <p>Answer: <span>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</span></p>
                </div>
                <div className='bg-primary p-2 rounded mb-4'>
                    <h3>
                        Q:- What is Node? How does Node work?
                    </h3>
                    <p>Answer: <span>Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser..
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive</span></p>
                </div>
            </Container>
        </div>
    );
};

export default Blog;