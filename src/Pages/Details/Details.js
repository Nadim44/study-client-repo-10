import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Details = () => {
    const details = useLoaderData();
    const { title, summary, image_url, category_id } = details
    console.log(details)
    return (
        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {summary}
                </Card.Text>
                <Link to={`/course/${category_id}`}>
                    <Button variant="primary">Back</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Details;