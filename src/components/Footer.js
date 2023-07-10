import { Container } from 'react-bootstrap';
import '../styles/footer.scss';
import { useEffect } from 'react';

const Footer = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
                else {
                    entry.target.classList.remove('show');
                }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach((el) => observer.observe(el));

    }, []);

    return (
        <div className='footer'>
            <Container>
                <div className='row'>
                    <div className='col-md-3 col-6 mb-5 hidden'>
                        <p>Categories</p>
                        <a href='#'>Category 1</a>
                        <a href='#'>Category 2</a>
                        <a href='#'>Category 3</a>
                        <a href='#'>Category 4</a>
                        <a href='#'>Category 5</a>
                    </div>
                    <div className='col-md-3 col-6 hidden'>
                        <p>Knowledge</p>
                        <a href='#'>Cloud</a>
                        <a href='#'>Services of cloud</a>
                    </div>
                    <div className='col-md-3 col-12 mb-5 hidden'>
                        <p>About Us</p>
                        <a href='#'>History</a>
                    </div>
                    <div className='col-md-3 col-12 hidden'>
                        <p>Contact Us</p>
                        <p className='info'><i className="fa fa-phone"></i> 1800 9999</p>
                        <p className='info'><i className="fa fa-envelope"></i> info@wisdomrobotics.org</p>
                    </div>
                </div>
                <hr />
                <p className='copyright'>Copyright © Wisdom System Solution</p>
            </Container>
        </div>
    )
}

export default Footer;