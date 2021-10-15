import { Fragment, useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
import { Redirect, useHistory } from 'react-router-dom';
import UserContext from "../UserContext";

export default function Register(){
    const history = useHistory();
    const { user } = useContext(UserContext);



    // state hooks to store the values of the input fields
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); 
    const [mobileNo, setMobileNo] = useState('');   
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [isActive, setIsActive] = useState(false);

    console.log(email)
    console.log(password1)
    console.log(password2)

    useEffect(() => {
        // validation to enable the submit button when all fields are populated and both passwords match.
        if((firstName !== '' && lastName !== '' && email !== '' && mobileNo !== '' && mobileNo.length === 11 && password1 !== '' && password2 !== '') && (password1 === password2)) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [firstName, lastName, email, mobileNo, password1, password2])


    function registerUser(e){
                e.preventDefault();
                fetch('http://localhost:4000/users/checkEmail', {
                    method: 'POST',
                    headers: {
                    "Content-Type" : "application/json"
                    },
                    body: JSON.stringify({                     
                        email: email                       
                    })
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                    if(data === true) {
                        Swal.fire({
                            title: 'Oh no!',
                            icon: 'error',
                            text: 'Email already exists',
                            footer: '<a href="">Click here for details</a>'
                        })
                    } else {
                        fetch('http://localhost:4000/users/register' , {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({
                                "firstName": firstName,
                                "lastName": lastName,
                                "mobileNo": mobileNo,
                                "email": email,
                                "password": password1,
                                "isAdmin": false                               
                            })
                        })
                        .then(res => res.json())
                        .then(data => {
                            
                            setFirstName('');
                            setLastName('');
                            setMobileNo('');
                            setEmail('');
                            setPassword1('');
                            setPassword2('');

                            Swal.fire({
                                title: 'Yaaay!',
                                icon: 'success',
                                text: 'You have successfully registered!',
                                footer: '<a href="">Click here for details</a>'
                            })
                        })
                        history.push('/login')
                    }
                })
                       
    }
    

    // two way binding
    // the values in the fields of the form is bound to the getter of the state and the event is bound to the setter. this is called two way binding.

    return (
        (user.accessToken !== null) 
        ?
        <Redirect to="/"/>
        :
        <Fragment>
            <h1>Register</h1>
            <Form onSubmit={(e) => registerUser(e)}>
                <Form.Group>
                    <Form.Label>First Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Last Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Mobile Number:</Form.Label>
                    <Form.Control type="tel" placeholder="Enter your Mobile Number" value={mobileNo} onChange={e => setMobileNo(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email Address:</Form.Label>
                    <Form.Control type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)} required/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter your Password" value={password1} onChange={e => setPassword1(e.target.value)} required/>
                    <Form.Text className="text-muted">
                        We'll never share your password with anyone else.
                    </Form.Text>
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