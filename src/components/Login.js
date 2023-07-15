import { Container } from "react-bootstrap";
import '../styles/login.scss';
import { account } from "../store/fakeData";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Login = () => {

    const navigate = useNavigate();

    const click = (on, off) => {
        const turnOn = document.getElementById(on);
        const turnOff = document.getElementById(off);

        turnOn.classList.add('display');
        turnOff.classList.remove('display');
    }

    const login = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            let mess;
            toast.promise(
                new Promise((resolve, reject) => {
                    if (username !== account.username || password !== account.password) {
                        mess = 'Wrong username or password !!!';
                        setTimeout(() => {
                            reject(mess);
                        }, 2000)

                    }
                    else {
                        mess = 'Login success !!!';
                        setTimeout(() => {
                            resolve(mess);
                            localStorage.setItem("user", account);
                            navigate("/")
                        }, 2000)
                    }
                }),
                {
                    pending: 'Wait a sec...',
                    success: mess,
                    error: mess
                },
                {
                    autoClose: 1000
                }
            )
        }
        else {
            toast.info('Please type all information');
        }
    }

    return (
        <Container className="login-page">
            <div className="form">
                <div id="login" className="login display">
                    <p className="title">Sign in</p>
                    <div className="item">
                        <label className="label" htmlFor="username">Username:</label>
                        <input type="text" id="username"></input>
                    </div>
                    <div className="item">
                        <label className="label" htmlFor="password">Password:</label>
                        <input type="password" id="password"></input>
                    </div>
                    <div className="forgot">
                        <a href="#">Forgot password</a>
                    </div>
                    <br />
                    <a onClick={() => { login() }} href="#" className="button-login">Login</a>
                    <hr />
                    <div className="other">
                        <p>Or login by <a href="#"><i className="fa-brands fa-facebook fb"></i></a> <a href="#"><i className="fa-brands fa-square-google-plus gg"></i></a></p>
                    </div>
                    <hr />
                    <div className="other">
                        <p>You don't have an account ? <a onClick={() => { click('register', 'login') }} href="#">Sign up</a></p>
                    </div>
                </div>
                <div id='register' className="register">
                    <p className="title">Sign up</p>
                    <div className="item">
                        <label className="label" htmlFor="password">Email:</label>
                        <input type="email" id="email"></input>
                    </div>
                    <div className="item">
                        <label className="label" htmlFor="password">Phone:</label>
                        <input type="text" id="phone"></input>
                    </div>
                    <div className="item">
                        <label className="label" htmlFor="username">Username:</label>
                        <input type="text" id="username"></input>
                    </div>
                    <div className="item">
                        <label className="label" htmlFor="password">Password:</label>
                        <input type="password" id="password"></input>
                    </div>
                    <br />
                    <a href="#" className="button-login">Sign up</a>
                    <hr />
                    <div className="other">
                        <p>You already have an account ? <a onClick={() => { click('login', 'register') }} href="#">Sign in</a></p>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export default Login;