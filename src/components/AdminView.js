import {useState,useEffect, Fragment} from 'react';
import {Table, Button, Modal, Form} from 'react-bootstrap';
import Swal from 'sweetalert2'

export default function AdminView(props){
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const {coursesData, fetchData} = props;
    console.log(props)
    const [show, setShow] = useState(false)
    const [courses, setCourses] = useState([]);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState('')

    useEffect(() => {
        const coursesArr = coursesData.map(course => {
            return(
                <tr key={course._id}>
                    <td>{course._id}</td>
                    <td>{course.name}</td>
                    <td>{course.description}</td>
                    <td>{course.price}</td>
                    <td className={course.isActive ? "text-success" : "text-danger"}>
                    {course.isActive ? "Available" : "Unavailable"}
                    </td>
                    
                </tr>
            )
        })
        setCourses(coursesArr)
    }, [coursesData])

    const addCourse = (e) => {
        e.preventDefault();
        
        fetch('http://localhost:4000/courses/', {
            method: 'POST',
            headers: {
                "Content-Type" : "application/json",
                'Authorization': `Bearer ${localStorage.getItem("accessToken")}`
            },
            body: JSON.stringify({
                "name": name,
                "description": description,
                "price": price
            })
        })
        .then(res => res.json())
        .then(data => {
            if(data) {
                fetchData()
                console.log("data " + data)
                Swal.fire({
                    title: 'Hooray!',
                    icon: 'success',
                    text: 'You have successfully added a course!',
                    footer: '<a href="">Click here for details</a>'
                })
            }
            
        })  

    }

    return (
        <Fragment>
        <div className="text-center my-4">
            <h2>Admin Dashboard</h2>
            <Button onClick={handleShow}>Add New Course</Button>
            
                <Modal show={show} onHide={handleClose}>
                    <Form onSubmit={(e) => addCourse(e)}> 
                        <Modal.Header>
                            <Modal.Title>Add Course</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="text" value={description} onChange={e => setDescription(e.target.value)} required/>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control type="number" value={price} onChange={e => setPrice(e.target.value)} required/>
                                </Form.Group>   
                                                    
                        </Modal.Body>
                        <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="success" type="submit" onClick={handleClose}>Submit</Button>
                        </Modal.Footer>
                    </Form>
                </Modal>
            
        </div>
        <Table striped bordered hover responsive>
            <thead className="bg-dark text-white">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Availability</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {courses}
            </tbody>
        </Table>
        </Fragment>
        

    )
}