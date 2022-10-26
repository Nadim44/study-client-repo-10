import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Pages/Shared/courseCard/CourseSummaryCard';

const Courses = () => {
    const allCourse = useLoaderData()

    return (
        <div>
            <h2>Courses details: {allCourse.length}</h2>
            {
                allCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Courses;