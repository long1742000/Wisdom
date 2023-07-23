import { Container } from "react-bootstrap";
import '../styles/contactUs.scss';
import { useEffect } from "react";

const ContactUs = () => {

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
        <Container className="contactUs">
            <div className="row">
                <div className="col-lg-6 col-12">
                    <div className="infor">
                        <div className="item hidden">
                            <p className="title">Services:</p>
                            <div className="underlined"></div>
                            <p className="detail"><i className="fa fa-envelope"></i> info@wisdomrobotics.org</p>
                            <p className="detail"><i className="fa fa-phone"></i> 1800 9999</p>
                        </div>
                        <div className="item hidden">
                            <p className="title">Al Division:</p>
                            <div className="underlined"></div>
                            <p className="detail"><i className="fa fa-envelope"></i> brain@wisdomrobotics.org</p>
                        </div>
                        <div className="item hidden">
                            <p className="title">Robotics Division:</p>
                            <div className="underlined"></div>
                            <p className="detail"><i className="fa fa-envelope"></i> robotics@wisdomrobotics.org</p>
                        </div>
                        <div className="item hidden">
                            <p className="title">Wisdom Software:</p>
                            <div className="underlined"></div>
                            <p className="detail"><i className="fa fa-envelope"></i> software@wisdomrobotics.org</p>
                        </div>
                        <div className="item hidden">
                            <p className="title">Human Resource:</p>
                            <div className="underlined"></div>
                            <p className="detail"><i className="fa fa-envelope"></i> hr@wisdomrobotics.org</p>
                            <p className="detail"><i className="fa fa-phone"></i> (+84) 972016212</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-12">
                    <div className="contactForm hidden">
                        <p className="title">Contact us:</p>
                        <div className="underlined"></div>
                        <div className="item">
                            <label className="label" htmlFor="name">Name:</label>
                            <input type="text" id="name" className="input"></input>
                        </div>
                        <div className="item">
                            <label className="label" htmlFor="phone">Phone:</label>
                            <input type="text" id="phone"></input>
                        </div>
                        <div className="item">
                            <label className="label" htmlFor="email">Email:</label>
                            <input type="text" id="email"></input>
                        </div>
                        <div className="item">
                            <label className="label" htmlFor="message">Message:</label>
                            <textarea type="text" id="message"></textarea>
                        </div>
                        <br /><br />
                        <a href="#" className="send">Send</a>
                    </div>
                </div>
                <div className="col-12 map hidden">
                    <div className="gmap_canvas"><iframe width="100%" height="400px" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d45679.319193132964!2d106.73748005784876!3d10.790256593982338!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s760%20nguyen%20duy%20trinh%20binh%20trung%20dong%20thu%20duc%20city%20ho%20chi%20minh%20city%20vietnam!5e0!3m2!1svi!2s!4v1688740008631!5m2!1svi!2s" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                        <a href="https://techwithlove.com/"></a>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default ContactUs;