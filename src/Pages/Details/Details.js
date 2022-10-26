import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <h1>{details.title}</h1>

        </div>
    );
};

export default Details;