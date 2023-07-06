import '../styles/nav.scss';

const NavBar = () => {

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

    return (
        <>
            <nav className='navBar'>
                <a className='logo-pc' href='#'><img src={require(`../assets/images/logo-pc.jpg`)} alt='loading...' /></a>
                <a className='logo-mb' href='#'><img src={require(`../assets/images/logo.jpg`)} alt='loading...' /></a>
                <div id="nav" className='item'>
                    <ul>
                        <li className='active'><a href='#'>Home</a></li>
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
                                <li><a href='#'>History</a></li>
                                <li><a href='#'>Contact Us</a></li>
                            </ul>
                        </li>
                        <li><a href='#'>Login</a></li>
                    </ul>
                </div>
                <span onClick={() => { handleToggle() }} className='toggle'><i id="icon" className="fa fa-bars"></i></span>
            </nav>
        </>
    )
}

export default NavBar;