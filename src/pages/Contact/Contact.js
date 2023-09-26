import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { useEffect } from 'react';
import './Contact.scss';

const Contact = () => {

    useEffect(()=> {
        window.scrollTo({
            top: 0
        });
    
    })
    return (
        <>
        <Header/>
        <section className='home__section home__section--flex home__section--flex-contact'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Contact</h1>
                        <p className='home__slogan'>Let's work together</p>
                        </div>
                    </div>
                </section>
        <main className='contact'>
        
        <section className='contact__section contact__section--image'>
            <img className='contact__image' alt='worker on a kitchen' src={require('../../assets/images/contact.png')}/>
        </section>
        <section className='contact__section contact__section--form'>
            <form className='contact__form'>
                <h1 className='contact__heading'>Get a Quote Today</h1>
                <p className='contact__description'>We answer in less than 24 hours</p>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='name' id='name' />
                    <label className='contact__label' htmlFor='name'>Name:</label>
                </div>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='phone' id='phone' />
                    <label className='contact__label' htmlFor='phone'>Phone:</label>
                </div>
                <div className='contact__input-div'>
                    <input required className='contact__input' name='email' id='email' />
                    <label className='contact__label' htmlFor='email'>Email:</label>
                </div>
                <div className='contact__input-div'>
                    <textarea required className='contact__input contact__input--textarea' rows={5} name='name' id='name' />
                    <label className='contact__label' htmlFor='name'>How can we help:</label>
                </div>
                <button className='contact__cta'>Submit</button>
            </form>
        </section>
    </main>
    <Footer/>
    </>
    );
}

export default Contact;