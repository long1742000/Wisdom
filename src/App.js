import './App.scss';
import NavBar from './components/Nav';
import Homepage from './views/Homepage';
import ContactFooter from './components/ContactFooter';
import ButtonOnTop from './components/ButtonOntop';
import Footer from './components/Footer';
import History from './views/History';
import ContactUs from './views/ContactUs';
import Login from './views/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Knowledge from './views/Knowledge';
import Category from './views/Category';
import NotFound from './views/404';

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <div className='container-fluid content pb-5'>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>} />
            <Route path="/history" element={<History></History>} />
            <Route path="/contact" element={<ContactUs></ContactUs>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path='/knowledge' element={<Knowledge></Knowledge>} />
            <Route path="/category/:id" element={<Category></Category>} />
            <Route path="/*" element={<NotFound></NotFound>} />
          </Routes>
        </div>
        <Footer></Footer>
        <ContactFooter></ContactFooter>
        <ButtonOnTop></ButtonOnTop>

        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <ToastContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
