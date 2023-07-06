import '../styles/btnOnTop.scss';

const ButtonOnTop = () => {

    setTimeout(() => {
        const toTop = document.getElementById('toTop');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 100) {
                toTop.classList.add('active');
            }
            else {
                toTop.classList.remove('active');
            }
        })

        toTop.addEventListener('click', () => {
            window.scrollTo(0, 0);
        })
    }, 500);

    return (
        <div id="toTop" className="BtnOnTop">
            <i className="fa fa-arrow-up"></i>
        </div>
    )
}

export default ButtonOnTop;