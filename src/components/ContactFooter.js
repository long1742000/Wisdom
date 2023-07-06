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
                        <p><i className="fa fa-envelope"></i> wisdom@gmail.com</p>
                    </div>
                    <div className='col-4'>
                        <p><i className="fa fa-comments"></i> Chat with us</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ContactFooter;