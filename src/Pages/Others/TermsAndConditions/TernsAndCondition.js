import React from 'react';
import { Link } from 'react-router-dom';

const TernsAndCondition = () => {
    return (
        <div>
            <h3>Here is our Terms and Conditions</h3>
            <p>1. Authority can be change anything</p>
            <p>Go back to: <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default TernsAndCondition;