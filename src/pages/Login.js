import { Fragment, useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
// React context
import UserContext from "../UserContext";

export default function Login(){
    // useContext is a react hook used to unwrap our context. it will return the data passed as values by a provider
    const { user, setUser } = useContext(UserContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(email !== '' && password !== ''){
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [email, password])

    function loginUser(e){
        e.preventDefault();
        // to clear out the data in our input fields
     
        if(email !== '' && password !== ''){
            setEmail('');
            setPassword('');
            // local storage allows us to save data within our browsers as strings
            // the set item method of the Storage interface when passed a key name and value will add that ket to the given storage object or update the key's values if it already exists
            // setItem('key', value)
            localStorage.setItem('email', email);
            setUser({ email: email });

            Swal.fire({
                title: 'Ahoy!',
                icon: 'success',
                text: 'Welcome to the page!',
                footer: '<a href="">Click here for details</a>'
            })
        } else {
            Swal.fire({
                title: 'Oh no..',
                icon: 'error',
                text: 'Something went wrong..',
                footer: '<a href="">Click here for details</a>'
            }) 
        }

        
    }



    return (
        <Fragment>
            <h1>Login</h1>
            <Form onSubmit={(e) => loginUser(e)} className="mb-3">
                <Form.Group>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type="email" placeholder="Please input your email address" value={email} onChange={e => setEmail(e.target.value)} required />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Password" value={password} onChange={e => setPassword(e.target.value)} required/>
                </Form.Group>

                {isActive 
                ?
                    <Button variant="warning" type="submit" id="submitBtn">Login</Button>
                :
                    <Button variant="warning" type="submit" id="submitBtn" disabled>Login</Button>
                }

            </Form>
        </Fragment>
    )


}





