import { Container } from "react-bootstrap"
import { useParams } from "react-router";
import '../styles/category.scss';
import { categories, products } from "../store/fakeData";
import { useEffect } from "react";

const Category = () => {

    const id = useParams().id;
    const item = categories.filter(item => item.id == id);
    const data = item[0];

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
        <div id="header" className="category">
            <Container>
                {data &&
                    <>
                        <div className="row">
                            <div className='col-12 main-img'>
                                <img src={require(`../assets/images/${data.image}`)} alt="loading..."></img>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className='col-12 title'>
                                <p>{data.name}</p>
                            </div>
                            <div className="col-12 recommend">
                                <p>{data.recommend}</p>
                            </div>
                            <div className="br"></div>
                            <div className='col-12 title'>
                                <p>Feature</p>
                            </div>
                            {data.feature && data.feature.map((item, index) => {
                                {
                                    if (item.id % 2) {
                                        return (
                                            <div key={index} className="col-md-6 col-12 item" >
                                                <div className="row even hidden">
                                                    <div className="col-2 number">
                                                        <p>{item.id}</p>
                                                    </div>
                                                    <div className="col-10">
                                                        <p className="name">{item.name}</p>
                                                        <p className="text">{item.content}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                    else {
                                        return (
                                            <div key={index} className="col-md-6 col-12 item" >
                                                <div className="row odd hidden">
                                                    <div className="col-10">
                                                        <p className="name">{item.name}</p>
                                                        <p>{item.content}</p>
                                                    </div>
                                                    <div className="col-2 number">
                                                        <p>{item.id}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                }
                            })}
                            {!data.feature &&
                                <p>Updating...</p>
                            }
                            <div className="br"></div>
                            <div className='col-12 title'>
                                <p>Benefit</p>
                            </div>
                            {data.benefit && data.benefit.map((item, index) => {
                                return (
                                    <div key={index} className="benefit hidden">
                                        <p>{item.content}</p>
                                    </div>
                                )
                            })}
                            {!data.benefit &&
                                <p>Updating...</p>
                            }
                            <div className="br"></div>
                            <div className='col-12 title'>
                                <p>Products</p>
                            </div>
                            <table>
                                <tbody>
                                    <tr className="title">
                                        <td><p>Name</p></td>
                                        <td><p>Detail</p></td>
                                        <td></td>
                                    </tr>
                                    {products.map((item, index) => {
                                        if (item.categoryId == id) {
                                            return (
                                                <tr key={index}>
                                                    <td className="name">
                                                        <p>{item.name}</p>
                                                    </td>
                                                    <td className="detail">
                                                        <p><strong>OS:</strong> {item.OS}</p>
                                                        <p><strong>Core:</strong> {item.core}</p>
                                                        <p><strong>RAM:</strong> {item.ram} Gb</p>
                                                        <p><strong>Storage:</strong> {item.storage}</p>
                                                        <p><strong>Bandwidth:</strong> {item.bandwidth} Mb/s</p>
                                                        <p><strong>Flow:</strong> {item.flow}</p>
                                                        <p><strong>IP:</strong> {item.ip}</p>
                                                        <p><strong>Network Infrastructure:</strong> {item.networkInfrastructure} Gb/s</p>
                                                    </td>
                                                    <td>
                                                        <a href="#" className="buy">Register</a>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                        else {
                                            <tr>
                                                <td colSpan={3}><p>Updating...</p></td>
                                            </tr>
                                        }
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </>
                }
            </Container>
        </div >
    )
}

export default Category;