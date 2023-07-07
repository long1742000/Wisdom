import Container from 'react-bootstrap/Container';
import '../styles/home.scss';
import { useEffect } from 'react';

const Homepage = () => {

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
        <div className="home">
            <div className="row">
                <div className='col-12 main-img'>
                    <img src={require('../assets/images/home-img.jpg')} alt='loading...'></img>
                </div>
            </div>
            <Container>
                <div className='recommend mt-5'>
                    <div className='row mb-5 hidden'>
                        <div className='col-lg-8 col-12'>
                            <h2>Cloud Server ?</h2>
                            <p>Cloud Server was born to solve many problems of cost, warranty and uptime for businesses. Especially for those who want to develop business based on the Internet. Overall, Cloud Server is one of the best server solutions today.</p>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <img src={require('../assets/images/image-services.jpg')} alt='loading...'></img>
                        </div>
                    </div>
                    <hr />

                    <div className='row mb-5 hidden'>
                        <div className='col-4 pc'>
                            <img src={require('../assets/images/image-services.jpg')} alt='loading...'></img>
                        </div>
                        <div className='col-lg-8 col-12'>
                            <h2>Cloud Storage ?</h2>
                            <p>The comprehensive storage solution Cloud Storage for businesses and individuals is built on a cloud computing platform with unlimited storage capacity, high safety.</p>
                        </div>
                        <div className='col-12 dt'>
                            <img src={require('../assets/images/image-services.jpg')} alt='loading...'></img>
                        </div>
                    </div>
                    <hr />

                    <div className='row mb-5 hidden'>
                        <div className='col-lg-8 col-12'>
                            <h2>Why choose Wisdom ?</h2>
                            <p>Wisdom will ensure you about the best service and incentives. High reputation along with a professional team gives you trust.</p>
                        </div>
                        <div className='col-lg-4 col-12'>
                            <img src={require('../assets/images/image-services.jpg')} alt='loading...'></img>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Homepage;