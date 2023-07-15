import { Container } from "react-bootstrap";
import '../styles/knowledge.scss';
import { useEffect } from "react";

const Knowledge = () => {

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
        <div className="knowledge">
            <Container id="cloud" className="hidden">
                <h1>What is Cloud ?</h1>
                <div className="row">
                    <div className="col-md-6 col-12 content">
                        <p>
                            Cloud computing is the provision of required computing services - from applications to storage and processing capabilities - usually via the internet and on the basis of payment according to demand.

                            If the sky is an Internet space, the "clouds" are the "groups" of data. If you want to use these clouds, you have to spend money to buy them.

                            In other words, cloud computing is the provision of computing services - including servers, storage, databases, networks, software, analysis and intelligence - via the internet ("cloud" ). These cloud services innovate faster, more flexible resources and more economic efficiency. You usually only pay for the cloud services you use. It helps you reduce operating costs, operate infrastructure more efficiently and expand the scale when your business needs change.
                        </p>
                    </div>
                    <div className="col-md-6 col-12 image">
                        <img src={require('../assets/images/cloud.jpg')} alt='loading...'></img>
                    </div>
                </div>
            </Container>
            <Container id="benefit">
                <h1>Benefit</h1>
                <div className="item cost-effective hidden">
                    <div className="row">
                        <div className="col-2">
                            <img src={require('../assets/images/cost-effective.jpg')} alt="loading..."></img>
                        </div>
                        <div className="col-10">
                            <p>
                                Cloud computing helps eliminate investment costs when buying hardware and software. Establish and run data centers on the spot, server system, electricity running around the clock to provide energy and cooling. Team of IT experts to manage infrastructure. This cost is extremely large for small and medium businesses or new businesses.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item agility hidden">
                    <div className="row">
                        <div className="col-2">
                            <img src={require('../assets/images/agility.jpg')} alt="loading..."></img>
                        </div>
                        <div className="col-10">
                            <p>
                                Most of the use of cloud computing service means that users have been granted a self -service database (not in use with anyone). So even a large amount of computer resources can be provided for a few minutes.
                                Just a few clicks to use, extract, store data, do not take too much time. It helps businesses flexibly and reduce the pressure in planning capacity.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item mobility hidden">
                    <div className="row">
                        <div className="col-2">
                            <img src={require('../assets/images/mobility.jpg')} alt="loading..."></img>
                        </div>
                        <div className="col-10">
                            <p>
                                Cloud computing services are flexibly expanding and serving millions in the world at the same time. The distribution of IT resources is greater than or lower than the calculation power, memory, and bandwidth. Can be compared to a computer with 2GB of memory, it cannot work more if the memory is full, and it can only serve a user.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item backup hidden">
                    <div className="row">
                        <div className="col-2">
                            <img src={require('../assets/images/backup.jpg')} alt="loading..."></img>
                        </div>
                        <div className="col-10">
                            <p>
                                Cloud computing makes backing up and restoring data safer, not dependent on a device if unfortunately organized unfortunately having problems such as fire, floods ... help businesses continue their business. . The cloud storage is also less expensive because the data is copied at multiple spare websites of cloud service providers.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item security hidden">
                    <div className="row">
                        <div className="col-2">
                            <img src={require('../assets/images/security.jpg')} alt="loading..."></img>
                        </div>
                        <div className="col-10">
                            <p>
                                Many cloud service providers provide a range of policies, technology and control. It is to strengthen your overall security system, helping to protect your data, applications and infrastructure from potential threats.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
            <br />
            <hr />
            <Container id="services">
                <h1>Services of Cloud ?</h1>
                <div className="introduce">
                    <p>
                        Cloud service is how to use software, storage, databases, servers, networks and other computer services. Through servers can be accessed via the Internet. Cloud services include IAAS, SAAS and PAAS. Independent services to some extent, but are connected internally to other services. We can work in a technology environment without it. But they will not operate strongly, effectively or save costs.
                    </p>
                </div>
                <div className="row content hidden">
                    <div className="col-md-6 col-12">
                        <img src={require('../assets/images/iaas.jpg')} alt="loading..."></img>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="title">IaaS</p>
                        <p>
                            Infrastructure as a service. Cloud computing is like being built in the form of pyramids by three services Iaas, Saas and Paas. In which Iaas plays a fundamental role. Cloud infrastructure is mainly based on IAAS. Create an environment, a self -service model. Thereby customers can maintain and remotely control their own data center.

                            The main benefit of IAAS is to access all the necessary hardware and tools to build and operate the data center or staging environment without having to invest in equipment ownership, no Physics in buildings, utilities, etc. v. IAAS's customers are responsible for managing and supporting. Applications and data are running on their devices. Ensure flexibility, ability to expand and build the virtual data center.
                        </p>
                    </div>
                </div>
                <div className="row content hidden">
                    <div className="col-md-6 col-12 dt">
                        <img src={require('../assets/images/paas.jpg')} alt="loading..."></img>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="title">PaaS</p>
                        <p>
                            Platform as a service. The second layer in the cloud pyramid is Paas. PAAS services are mainly designed to support the development and deployment of software by providing customers with a available environment. Including infrastructure, server hardware, operating system and server software. PAAS is mainly based on virtualization technology that helps create separate cloud environments to develop software.

                            Customers benefit from PAAS in a number of ways, including expansion. You can request, shrink or expand resources when needed. You do not need significant investment in hardware, software or network resources. Developers can focus on application development and expansion ability.

                            Some examples of PAAS are Apprenda, Azure and Heroku. Each of these services includes an operating system, a programming language and an enforcement environment.
                        </p>
                    </div>
                    <div className="col-md-6 col-12 pc">
                        <img src={require('../assets/images/paas.jpg')} alt="loading..."></img>
                    </div>
                </div>
                <div className="row content hidden">
                    <div className="col-md-6 col-12">
                        <img src={require('../assets/images/saas.jpg')} alt="loading..."></img>
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="title">SaaS</p>
                        <p>
                            Software as a Service. On the top of the cloud pyramid is Saas. The truth has proven that SAAS is the largest market for cloud services and is continuing to grow. This is a cloud computing model that allows customers to use without installing or managing local software.

                            In SAAS environment, all third -party applications are responsible for everything in the software field is distributed and managed. Applications often run in the cloud and are provided to end users. Through the web browser or the GUI graphical interface is specially developed. The need for localized software is also removed.

                            Any type of software can only run in SAAS environment. Storage applications, productivity, intermediate software, operating systems and even virtualized software can be provided as a service and supported by suppliers. Third party service provider.

                            Examples of saas include Gotometing, Salesforce and the entire Google app, provided as effective collaborative tools for increasing corporate productivity.
                        </p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Knowledge;