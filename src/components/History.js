import { Container } from "react-bootstrap"
import '../styles/history.scss';
import { useEffect } from "react";

const History = () => {

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
        <Container className="history">
            <div className="content1 hidden">

                <p className="title">About Us</p>
                <p>
                    Vision The Wisdom is established as become the standarized in Digital Twin and High-Performance Computing for Providing Data Center, Could Computing, Big Data, Initerartificial intelligence and AI-oriented in Vietnam. To be considered a leading in the research centered to the robotics science and systems, the objective is to develop the advanced robotic technologies, in order to bring together engineers, researchers, faculties, professionals in AI, Deep Learning/Machine Learning, Neuroscience, Robotics Association and the world, and it will be mainly impacted by solving the problems in the equipment for industrial and research. Ideally located in Vietnam, where is the center of Asia-Pacific, It Division gathers into the outstanding scientists from all around the world and is its shape of cultures, a meeting place for scientists, researchers, professionals who are driven by the same enthusiasm and have the same goal such as pushing back the existing boundaries of knowledge. Currently, We are more than forty people from different countries working in the organization. Openness and sharing are central to the ideals of the organizer by passionate discussions. Student and faculty intermingle in the stimulating environment where open discussions and the exchanges of specific ideas are strongly advocated. Moreover, all researchers are encountered to participate in the exchange into international conferences/forums, Regularly we are always welcome all researchers working at the organizations, universities, institutes or companies who collaborate with research laboratories. History Wisdom is a company focusing on Business and Engineering solutions, we have getting achievements based on artificial intelligence and the robotics systems by finding solutions in high technologies for industry, services, medicals, entertainment and educations. It is located at the center of Ho Chi Minh City which is the largest economy of Vietnam.
                </p>
                <a href="#" className="contactUs">Contact us</a>
            </div>
            <div className="content2 hidden">
                <p>
                    Wisdom is a company focusing on Business and Engineering solutions, we have getting achievements based on artificial intelligence and the robotics systems by finding solutions in high technologies for industry, services, medicals, entertainment and educations. It is located at the center of Ho Chi Minh City which is the largest economy of Vietnam.
                </p>
            </div>
            <div className="image">
                <div className="list img1 hidden">
                    <img src={require('../assets/images/img1.png')} alt="Loading..."></img>
                </div>
                <div className="list img2 hidden">
                    <img src={require('../assets/images/img2.png')} alt="Loading..."></img>
                </div>
            </div>
        </Container>
    )
}

export default History;