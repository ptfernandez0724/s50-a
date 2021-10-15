import {useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import UserContext from '../UserContext';


export default function Logout(){

    const {setUser, unsetUser} = useContext(UserContext);

    unsetUser();

    useEffect(() => {
        // set the user state back to its original value
        setUser({accessToken: null})
    }, [])

    return (
        // redirect back to login
        <Redirect to="/login"/>
    )
}