import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCard from '../Shared/courseCard/CourseSummaryCard';

const Course = () => {
    const allCourse = useLoaderData()
    return (
        <div>
            {
                allCourse.map(course => <CourseSummaryCard
                    key={course._id}
                    course={course}
                ></CourseSummaryCard>)
            }
        </div>
    );
};

export default Course;