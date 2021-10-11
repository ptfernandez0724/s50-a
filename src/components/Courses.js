import {Row, Col, Card, Button} from 'react-bootstrap'

export default function Courses(){
    return(
     <Row>
         <Col>
             <Card className="courseCard p-1 mt-3">
                 <Card.Body>
                     <Card.Title><h4>Sample Course</h4></Card.Title>
                     <Card.Subtitle>
                        Description:
                     </Card.Subtitle>
                        <Card.Text>                             
                                This is a sample courseCard                            
                        </Card.Text>
                     <Card.Subtitle>
                        Price:
                     </Card.Subtitle>
                        <Card.Text>
                            Php 40,000.00
                        </Card.Text>
                            
                     
                     <Button className="btn btn-primary">Enroll</Button>
                 </Card.Body>
             </Card>
         </Col>
    </Row>

    ) 
 }