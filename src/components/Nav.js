import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../styles/nav.scss';

const NavBar = () => {

    const handleToggle = () => {
        const nav = document.getElementById('nav');
        const item = document.getElementsByClassName('item');
        const mobile = document.getElementsByClassName('mobile-nav');
        const icon = document.getElementById("icon");

        console.log(nav);
        console.log(item);
        console.log(mobile);

        if (mobile.length > 0) {
            nav.classList.remove('mobile-nav');
            icon.classList.replace("fa-times", "fa-bars")
        }
        else {
            nav.classList.add('mobile-nav');
            icon.classList.replace("fa-bars", "fa-times")
        }
    }

    return (
        <>
            <nav className='navbar'>
                <a className='logo-pc' href='#'><img src={require(`../assets/images/logo-pc.jpg`)} alt='loading...' /></a>
                <a className='logo-mb' href='#'><img src={require(`../assets/images/logo.jpg`)} alt='loading...' /></a>
                <div id="nav" className='item'>
                    <ul>
                        <li className='active'><a href='#'>Home</a></li>
                        <li><a href='#'>Product</a></li>
                        <li><a href='#'>Contact Us</a></li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </div>
                <span onClick={() => { handleToggle() }} className='toggle'><i id="icon" className="fa fa-bars"></i></span>
            </nav>
        </>
    )
}

export default NavBar;