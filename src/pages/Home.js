import { Fragment } from "react";
import Banner from "../components/Banner";
import Courses from "../components/Courses";
import Highlights from "../components/Highlights";




export default function Home(){
    return(
        <Fragment>
            <Banner />
            <Highlights />
            <Courses />
        </Fragment>

    )
}