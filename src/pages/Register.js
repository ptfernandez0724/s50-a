import { Fragment, useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'

export default function Register(){

    // state hooks to store the values of the input fields
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isActive, setIsActive] = useState(false);

    console.log(email)
    console.log(password1)
    console.log(password2)

    useEffect(() => {
        // validation to enable the submit button when all fields are populated and both passwords match.
        if((email !== '' && password1 !== '' && password2 !== '') && (password1 === password2)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [email, password1, password2])

    function registerUser(e){
        e.preventDefault();
        // to clear out the data in our input fields
        setEmail('');
        setPassword1('');
        setPassword2('');

        Swal.fire({
            title: 'Yaaay!',
            icon: 'success',
            text: 'You have successfully registered!',
            footer: '<a href="">Click here for details</a>'
        })
    }

    // two way binding
    // the values in the fields of the form is bound to the getter of the state and the event is bound to the setter. this is called two way binding.

    return (
        <Fragment>
            <h1>Register</h1>
            <Form onSubmit={(e) => registerUser(e)}>
                <Form.Group>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Password" value={password1} onChange={e => setPassword1(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Verify Password</Form.Label>
                    <Form.Control type="password" placeholder="Verify your Password" value={password2} onChange={e => setPassword2(e.target.value)} required/>
                </Form.Group>

                {isActive 
                ?
                    <Button variant="primary" type="submit" id="submitBtn">Submit</Button>
                :
                    <Button variant="primary" type="submit" id="submitBtn" disabled>Submit</Button>
                }
                

                
            </Form>
        </Fragment>
        
    )
}