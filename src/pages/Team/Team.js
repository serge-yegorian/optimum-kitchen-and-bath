import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Team.scss';

const Team = () => {
return (
    <>
    <Header/>
    <main className='team'>
        <section className='team__section'>
            <h1 className='team__heading'>Meet Our Team of Proffesionals</h1>
            <p className='team__slogan'>We don't stop at hiring the best; we empower them to become even better. Our commitment to excellence extends to ongoing training and development programs that keep our specialists at the forefront of industry trends and techniques.</p>
        </section>
        <section className='team__section'>
            <h2 className='team__subheading'>Our Team Members:</h2>
            <div className='team__container'>
                <div className='team__member'>
                    <img className='team__image' src={require('../../assets/images/worker1.png')}/>
                    <div className='team__content'>
                        <h3 className='team__name'>Kevin Keene</h3>
                        <p className='team__description'>Kevin is the backbone of Optimum Cabinets, bringing passion, dedication, and exceptional craftsmanship to every project. With years of experience, he has honed his skills to perfection, ensuring that every cabinet he touches is a work of art. Kevin's attention to detail and commitment to quality make him an invaluable member of our team, and his work speaks volumes about our commitment to excellence.</p>
                    </div>
                </div>
                <div className='team__member'>
                    <img className='team__image' src={require('../../assets/images/worker2.png')}/>
                    <div className='team__content'>
                        <h3 className='team__name'>Rodrigo</h3>
                        <p className='team__description'>Rodrigo is a true artisan when it comes to crafting cabinets at Optimum Cabinets. His meticulous approach and unwavering commitment to quality shine through in every piece he creates. With a passion for woodworking that is second to none, Rodrigo transforms raw materials into functional works of art. When you choose Optimum Cabinets, you're choosing Rodrigo's craftsmanship and dedication, ensuring your cabinets are nothing less than exceptional. Rodrigo embodies our commitment to delivering the finest quality, making him an integral part of our team.</p>
                    </div>
                </div>
                <div className='team__member'>
                    <img className='team__image' src={require('../../assets/images/worker3.png')}/>
                    <div className='team__content'>
                        <h3 className='team__name'>Serge</h3>
                        <p className='team__description'>At Optimum Cabinets, Serge is a master of precision and detail. With years of experience in the industry, he brings a wealth of knowledge and expertise to our team. Serge's exceptional craftsmanship is evident in every cabinet he constructs. His dedication to perfection ensures that each piece meets the highest standards of quality. When you select Optimum Cabinets, you benefit from Serge's commitment to excellence, making your cabinet project a true work of art. Serge is an indispensable member of our team, embodying our unwavering commitment to delivering top-notch craftsmanship.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className='team__section'>
            <button className='team__cta team__cta--main'>Contact Us</button>
        </section>
    </main>
    <Footer/>
    </>
);
}

export default Team;