import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Optimum Cabinets:</h3>
                <p className='footer__description'>Optimum Cabinets is your trusted partner in creating the perfect cabinetry solutions for your space.</p>
            </div>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Navigation:</h3>
                <ul className='footer__list'>
                    <li className='footer__li'>Projects</li>
                    <li className='footer__li'>Blog</li>
                    <li className='footer__li'>Team</li>
                    <li className='footer__li footer__li--cta'>Contact</li>
                </ul>
            </div>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Contact Us:</h3>
                <p className='footer__description'>561 906 6215</p>
                <p className='footer__description'>kevinkeene@gmail.com</p>
            </div>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Social Media:</h3>
                <p className='footer__description'>instagram</p>
                <p className='footer__description'>facebook</p>
                <p className='footer__description'>linkedin</p>
            </div>
            <div className='footer__container'>
                <h3 className='footer__subheading'>Learn How to Choose a Perfect Cabinet:</h3>
                <div className='footer__input-div'>
                <input className='footer__input' id='email' name='email' required/>
                <label className='footer__label' htmlFor='email'>Email:</label>
                <button className='footer__submit'>	&#10132;</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;