import { useState } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
// bootstrap
import { Container } from 'react-bootstrap';
// pages
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Courses from './pages/Courses'
import Error from './pages/Error';
// routing components
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom'
// React context
import UserContext from './UserContext';

// import Counter from './components/Counter';

// BrowserRouter component will enable us to simulate page navigation by synchronizing the shown content and the shown URL in the web browser

// Switch component then declares with Route we can go to

// Route component will render components within the switch container based on the defined route

// exact property disables the partial matching for a route and makes sure that it only returns the route if the path is an exact match to the current URL. If exact and path is missing, the route component will make it undefined route and will be loaded into a specified component


function App() {
  // add a state hook for user
  // the getitem method returns the value of the specified storage object item
  const [user, setUser] = useState({email: localStorage.getItem('email')})

  // Provider component allows consuming components to subscribe to context changes
  return (
    <UserContext.Provider value={ {user,setUser} }>
      <Router>
        <AppNavbar />
        <Container>
          <Switch>                
    {/* <Counter /> */}          
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={Courses} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route component={Error} />
          </Switch>
        </Container>
      </Router>
    </UserContext.Provider>     
    );
  }
  
  export default App;
  
  // install the JS(Babel) linting for code readabillity
  // CTRL + Shift + P