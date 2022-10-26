import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub, FaEdgeLegacy } from "react-icons/fa";

const SignIn = () => {
    return (
        <div>
            <ButtonGroup vertical className='mt-4'>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Signin with Google</Button>
                <Button className='mb-2' variant="outline-dark"><FaGithub /> Signin with Github</Button>
                <Button className='mb-2' variant="outline-dark"><FaEdgeLegacy /> Signin with Email & Password</Button>
            </ButtonGroup>
        </div>
    );
};

export default SignIn;