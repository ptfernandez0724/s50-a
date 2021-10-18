import {useState, useEffect, useContext} from 'react';
import {Container} from 'react-bootstrap';

import AdminView from '../components/AdminView';
import UserView from '../components/UserView';

import UserContext from '../UserContext';

export default function Courses(){
    const { user } = useContext(UserContext);

    const[allCourses, setAllCourses] = useState([]);

    const fetchData = () => {
        fetch('http://localhost:4000/courses/all')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setAllCourses(data)
        })
    }

    // for us to be able to display all the courses from the data file, we are going to use the map() method. the map method loops through the individual objects in our array and returns a component for each object

    // multiple components thru the map method must have a unique key that will help react js identify which elementshave been changed, added, or removed
    // key={course.id} to keep track of the data of the course.
    
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <Container>
            {
                (user.isAdmin === true )
                ?
                <AdminView coursesData={allCourses} fetchData={fetchData}/>
                :
                <UserView coursesData={allCourses}/>
            }
        </Container>
        
    )
}