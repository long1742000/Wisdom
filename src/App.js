import './App.scss';
import NavBar from './components/Nav';
import Homepage from './components/Homepage';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Container>
        <div className='content'>
          <Homepage></Homepage>
        </div>
      </Container>
    </>
  );
}

export default App;
