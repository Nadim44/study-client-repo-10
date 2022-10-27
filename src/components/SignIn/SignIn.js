import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const SignIn = () => {
    const { providerLogin, githubProviderLogin } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }


    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)

            .then(result => {
                const user = result
                console.log(user)
            })
            .catch(error => console.error(error))
    }


    return (
        <div>
            <ButtonGroup vertical className='mt-4'>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-primary"><FaGoogle /> Signin with Google</Button>
                <Button onClick={handleGithubSignIn} className='mb-2' variant="outline-dark"><FaGithub /> Signin with Github</Button>
            </ButtonGroup>
        </div>
    );
};

export default SignIn;