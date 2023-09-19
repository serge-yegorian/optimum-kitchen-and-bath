import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Contact.scss';

const Contact = () => {
    return (
        <>
        <Header/>
        <main className='contact'>
        <section className='contact__section'>
            <img className='contact__image' alt='worker on a kitchen' src={require('../../assets/images/contact.png')}/>
        </section>
        <section className='contact__section'>
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
                <button className='contact__cta' contact__cta--main>Submit</button>
            </form>
        </section>
    </main>
    <Footer/>
    </>
    );
}

export default Contact;