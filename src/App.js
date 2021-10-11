import { Fragment } from 'react';
import './App.css';
import AppNavbar from './components/AppNavbar';
import { Container } from 'react-bootstrap';
import Home from './pages/Home';


function App() {
  return (
    <Fragment>
      <AppNavbar />
      <Container>
        <Home />
      </Container>
      
    </Fragment>
    
  );
}

export default App;

// install the JS(Babel) linting for code readabillity
// CTRL + Shift + P