import { Fragment } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
// import Counter from './components/Counter';


function App() {
  return (
    <Fragment>
      <AppNavbar />
      <Container>
        <Login />
        <Register />       
        {/* <Counter /> */}
        <Home />
        
      </Container>
      
    </Fragment>
    
  );
}

export default App;

// install the JS(Babel) linting for code readabillity
// CTRL + Shift + P