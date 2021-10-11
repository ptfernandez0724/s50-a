// Bootstrap
import {Row, Col, Card} from 'react-bootstrap'



export default function Highlights(){
   return(
    <Row>
        <Col xs={12} md={4}>
            <Card className="cardHighlight p-3">
                <Card.Body>
                    <Card.Title><h2>Learn from Home</h2></Card.Title>
                    <Card.Text>
                        lorem ipsum dolor sit amet...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

        <Col xs={12} md={4}>
            <Card className="cardHighlight p-3">
                <Card.Body>
                    <Card.Title><h2>Study Now, Pay Later</h2></Card.Title>
                    <Card.Text>
                        lorem ipsum dolor sit amet...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>

        <Col xs={12} md={4}>
            <Card className="cardHighlight p-3">
                <Card.Body>
                    <Card.Title><h2>Be Part of Our Community</h2></Card.Title>
                    <Card.Text>
                        lorem ipsum dolor sit amet...
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </Row>
   ) 
}