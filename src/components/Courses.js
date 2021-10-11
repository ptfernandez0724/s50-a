import {Row, Col, Card, Button} from 'react-bootstrap'

export default function Courses(){
    return(
     <Row>
         <Col>
             <Card className="courseCard p-1 mt-3">
                 <Card.Body>
                     <Card.Title><h4>Sample Course</h4></Card.Title>
                     <Card.Text>
                         <h6>Description:</h6>
                            <p> 
                            This is a sample courseCard
                            </p>
                         <h6>Price:</h6>
                            <p>
                            Php 40,000.00
                            </p>
                     </Card.Text>
                     <Button className="btn btn-primary">Enroll</Button>
                 </Card.Body>
             </Card>
         </Col>
    </Row>

    ) 
 }