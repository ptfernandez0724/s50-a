import { Link } from 'react-router-dom';
import { Container, Jumbotron } from 'react-bootstrap';

export default function Error(){
    return (
        <Container>
            <Jumbotron>
                <h3>Page not Found.</h3>
                <p>Go back  to the <Link to="/">Homepage</Link></p>
            </Jumbotron>
        </Container>
    )
}