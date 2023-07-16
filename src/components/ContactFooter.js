import Container from 'react-bootstrap/Container';
import '../styles/footer.scss';

const ContactFooter = () => {
    return (
        <div className="contact">
            <Container>
                <div className='row'>
                    <div className='col-4'>
                        <p><i className="fa fa-phone"></i> 1800 9999</p>
                    </div>
                    <div className='col-4'>
                        <p><i className="fa fa-envelope"></i> info@wisdomrobotics.org</p>
                    </div>
                    <div className='col-4'>
                        <a href='/contact'><i className="fa fa-comments"></i> Chat with us</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactFooter;