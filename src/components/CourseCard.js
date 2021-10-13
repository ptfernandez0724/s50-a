import { useState, useEffect } from 'react';
import {Row, Col, Card, Button} from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function CourseCard({courseProp}){
    // console.log(props)
    // console.log(typeof props)

    // Deconstruct the course properties into their own variables(destructuring)
    const { name, description, price } = courseProp;

    // use the state hook for this component to be able to store its state. states are used to keep track of information related to individual components
    // syntax: const [getter, setter] = useState(initialGetterValue)
    // getter is the stored initial state or default value
    // setter is the updated value from the getter

    const [count, setCount] = useState(0);
    const [seat, setSeat] = useState(10);
    // state hook that indicates availability of course for enrollment via color of button
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        if(seat === 0){
            setIsOpen(false)
        } 
        
    }, [seat])

    function enroll() {
        if(seat === 0){
            alert("No more available seats")

        } else {
            setCount(count + 1);
            setSeat(seat - 1)
            alert("Enrolled!")
        }
    }

    return(
     <Row>
         <Col>
             <Card className="courseCard p-1 mt-3">
                 <Card.Body>
                    <Card.Title><h4>{name}</h4></Card.Title>
                    <Card.Subtitle>
                        Description:
                    </Card.Subtitle>
                        <Card.Text>                             
                            {description}                            
                        </Card.Text>
                    <Card.Subtitle>
                        Price:
                    </Card.Subtitle>
                        <Card.Text>
                            Php {price}
                        </Card.Text>
                        <Card.Text>
                            Enrollees: {count}
                        </Card.Text>
                        <Card.Text>
                            Seats: {seat}
                        </Card.Text>
                     {isOpen 
                     ?
                        <Button className="btn btn-primary" onClick={enroll}>Enroll</Button>
                     :
                        <Button className="btn btn-primary" disabled>Enroll</Button>
                     }
                     
                     
                 </Card.Body>
             </Card>
         </Col>
    </Row>

    ) 
 }

//  check if the coursecard component is getting the correct prop types
// prop types are used for validating information passed to a component and is a tool normally used to help developers ensure the correct information is passed from one component to the next.

CourseCard.propTypes = {
    // shape method is used to check if a prop object conforms to a specific shape
    courseProp: PropTypes.shape({
        // define the properties and their expected types
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired
    })
}