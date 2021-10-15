import { Fragment, useState, useEffect, useContext } from "react";
import { Form, Button } from "react-bootstrap";
import Swal from 'sweetalert2'
// React context
import UserContext from "../UserContext";
// routing
import { Redirect, useHistory } from "react-router-dom";

export default function Login(){
    const history = useHistory();
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

        fetch('http://localhost:4000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.accessToken !== undefined) {
                localStorage.setItem('accessToken', data.accessToken);
                setUser({ accessToken: data.accessToken});
                Swal.fire({
                    title: 'Welcome!',
                    icon: 'success',
                    text: 'Hello there!',
                    footer: '<a href="">Click here for details</a>'
                   
                })
                // get user's detail from our token
                fetch('http://localhost:4000/users/details', {
                        headers: {
                            Authorization: `Bearer ${data.accessToken}`
                        }
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.isAdmin === true){
                            localStorage.setItem('email', data.email)
                            localStorage.setItem('isAdmin', data.isAdmin)
                            setUser({
                                email: data.email,
                                isAdmin: data.isAdmin
                            })
                            history.push('/courses')
                        }else{
                            history.push('/')
                        }



                    })
            } else {
                Swal.fire({
                    title: 'Oh no..',
                    icon: 'error',
                    text: 'Something went wrong..',
                    footer: '<a href="">Click here for details</a>'
                })  
            }

        })
        // to clear out the data in our input fields
     
        // if(email !== '' && password !== ''){
        //     setEmail('');
        //     setPassword('');
            // local storage allows us to save data within our browsers as strings
            // the set item method of the Storage interface when passed a key name and value will add that ket to the given storage object or update the key's values if it already exists
            // setItem('key', value)
        //     localStorage.setItem('email', email);
        //     setUser({ email: email });

        //     Swal.fire({
        //         title: 'Ahoy!',
        //         icon: 'success',
        //         text: 'Welcome to the page!',
        //         footer: '<a href="">Click here for details</a>'
        //     })
        // } else {
        //     Swal.fire({
        //         title: 'Oh no..',
        //         icon: 'error',
        //         text: 'Something went wrong..',
        //         footer: '<a href="">Click here for details</a>'
        //     }) 
        // }       
    }

    // create a conditional statement that will redirect the user to the homepage when a user is logged in

    return (
        (user.accessToken !== null) 
        ?
        <Redirect to="/"/>
        :
        
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





