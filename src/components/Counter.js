import { useState, useEffect, Fragment } from "react";
import { Button } from "react-bootstrap";
// what does use effect do? by using this hook, you tell React that your component/elements needs to do something after render. React will remember the function you passed, we'll refer to it as our side-effect and call it later after performing the DOM updates.

// syntax of useEffect: useEffect(() => {}, [])

// useEffect allows us to perform tasks or functions on initial render: when the component is displayed for the first time. What allows us to control when our useEffect will run after the initial render? we add an optional dependency array to control when useEffect will run, instead that it runs on initial render and when states are updated, we can control the useEffect to run only when the states in the dependency array is updated. 

export default function Counter(){
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times` 
    }, [count])
    
    return (
        <Fragment>
            <p>You clicked {count}</p>
            <Button variant="primary" onClick={() => setCount(count + 1)}>Click Me</Button>
        </Fragment>
    )
}