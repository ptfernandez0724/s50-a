import { useState, useEffect, Fragment } from 'react';
import CourseCard from './CourseCard';


export default function UserView({ coursesData }){
    const [courses, setCourses] = useState([]);
    
    useEffect(() => {
        const coursesArr = coursesData.map(course => {
            if(course.isActive === true){
                return(
                    <CourseCard courseProp={course} key={course._id}/>
                )
            }else{
                return null;
            }
        })
        setCourses(coursesArr)
    }, [coursesData])

    return (
        <Fragment>
            {courses}
        </Fragment>       
    )
}