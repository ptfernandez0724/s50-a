import { Fragment } from "react";
import Banner from "../components/Banner";
import Highlights from "../components/Highlights";
import Courses from "./Courses";
// import CourseCard from "../components/CourseCard";
// import Welcome from "../components/Welcome";



export default function Home(){
    return(
        <Fragment>
            {/* <Welcome name= "Jane" age={24} /> */}
            <Banner />
            <Highlights />
            <Courses />
            {/* <CourseCard /> */}
        </Fragment>

    )
}