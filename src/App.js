import './App.scss';
import NavBar from './components/Nav';
import Homepage from './components/Homepage';
import ContactFooter from './components/ContactFooter';
import ButtonOnTop from './components/ButtonOntop';
import Footer from './components/Footer';
import History from './components/History';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='container-fluid content pb-5'>
        {/* <Homepage></Homepage> */}
        <History></History>
      </div>
      <Footer></Footer>
      <ContactFooter></ContactFooter>
      <ButtonOnTop></ButtonOnTop>
    </>
  );
}

export default App;
