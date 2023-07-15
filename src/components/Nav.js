import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/nav.scss';
import { account } from '../store/fakeData';
import { toast } from 'react-toastify';

const NavBar = () => {

    const navigate = useNavigate();

    const handleToggle = () => {
        const nav = document.getElementById('nav');
        const mobile = document.getElementsByClassName('mobile-nav');
        const icon = document.getElementById("icon");

        if (mobile.length > 0) {
            nav.classList.remove('mobile-nav');
            icon.classList.replace("fa-times", "fa-bars")
        }
        else {
            nav.classList.add('mobile-nav');
            icon.classList.replace("fa-bars", "fa-times")
        }
    }

    const Logout = () => {
        localStorage.removeItem('user');
        navigate('/login');
        toast.success('Log out success !!!')
    }

    return (
        <>
            <nav className='navBar'>
                <NavLink className='logo-pc' to="/"><img src={require(`../assets/images/logo-pc.jpg`)} alt='loading...' /></NavLink>
                <NavLink className='logo-mb' to="/"><img src={require(`../assets/images/logo.jpg`)} alt='loading...' /></NavLink>
                <div id="nav" className='item'>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li id="products"><a href='#'>Categories <i className="fa fa-caret-down"></i></a>
                            <ul className='dropDown'>
                                <li><a href='#'>Category 1</a></li>
                                <li><a href='#'>Category 2</a></li>
                                <li><a href='#'>Category 3</a></li>
                                <li><a href='#'>Category 4</a></li>
                                <li><a href='#'>Category 5</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>About Us <i className="fa fa-caret-down"></i></a>
                            <ul className='dropDown'>
                                <li><NavLink to="/history">History</NavLink></li>
                                <li><NavLink to="/contact">Contact Us</NavLink></li>
                            </ul>
                        </li>
                        {localStorage.getItem('user') &&
                            <li><a href='#'>Hello, {account.name} <i className="fa fa-caret-down"></i></a>
                                <ul className='dropDown'>
                                    <li><a href='#'>Detail</a></li>
                                    <li><a href='#' onClick={() => { Logout() }}>Log out</a></li>
                                </ul>
                            </li>
                        }
                        {!localStorage.getItem('user') &&
                            <li><NavLink to='/login'>Login</NavLink></li>
                        }
                    </ul>
                </div>
                <span onClick={() => { handleToggle() }} className='toggle'><i id="icon" className="fa fa-bars"></i></span>
            </nav>
        </>
    )
}

export default NavBar;