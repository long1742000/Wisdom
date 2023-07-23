import '../styles/404.scss';

const NotFound = () => {
    return (
        <div className="notfound">
            <div className='content'>
                <h1>404!</h1>
                <p>The page you were looking for doesn't exist.</p>
                <p>You may have mistyped the address or the page may have moved.</p>
            </div>
        </div>
    )
}

export default NotFound;