import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../../../components/SignIn/SignIn';


const SideNav = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('https://assignment-10-server-tau-six.vercel.app/course-categories')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])



    return (
        <div>
            < h3 >Total Courses: 0{courses.length}</h3>
            <div>
                {courses.map(course => <p key={course.id}>
                    <Link to={`/course/${course.id}`}>{course.name}</Link>
                </p>)}
            </div>

            <SignIn></SignIn>
        </div >
    );
};

export default SideNav;