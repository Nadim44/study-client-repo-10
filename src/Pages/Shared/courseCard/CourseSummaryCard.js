import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { FaStar, FaEye } from "react-icons/fa";

const CourseSummaryCard = ({ course }) => {
    const { _id, category_id, title, summary, image_url, rating, total_view } = course;
    return (
        <Card className=" mb-5" >
            <Card.Header>Subject Name: <h2>{title}</h2></Card.Header>
            <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Img varient='top' src={image_url} />
                <Card.Text>
                    {/* {summary} */}
                    {
                        summary.length > 200 ?
                            <p>{summary.slice(0, 200) + '...'} <Link to={`/details/${_id}`}>Read More</Link> </p>
                            :
                            <p>{summary}</p>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default CourseSummaryCard;