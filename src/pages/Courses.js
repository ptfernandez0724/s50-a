import courseData from "../data/courseData";
import CourseCard from "../components/CourseCard"
import { Fragment } from "react";

export default function Courses(){
    console.log(courseData)
    console.log(courseData[0])

    // for us to be able to display all the courses from the data file, we are going to use the map() method. the map method loops through the individual objects in our array and returns a component for each object

    // multiple components thru the map method must have a unique key that will help react js identify which elementshave been changed, added, or removed
    // key={course.id} to keep track of the data of the course.
    const courses = courseData.map(course => {
        return (
            <CourseCard key= {course.id} courseProp={course} />
        )
    })

    return (
        <Fragment>
            <h1>Courses</h1>
            {courses}
        </Fragment>
        
    )
}