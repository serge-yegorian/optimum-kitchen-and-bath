import { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header'
import './Home.scss'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5001/project/projects')
        .then((response) => {
            setProjects(response.data);
            console.log(projects)
        })
        .catch((err) => {
            console.log(err)
        })
        window.scrollTo({
            top: 0
        });
    }, [])

    

    return (
        <>
            <Header/>
            <main className='home'>
                <section className='home__section home__section--flex'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Palm Beach<br/> Kitchens and Baths</h1>
                        <p className='home__slogan'>ENHANCING LIVES THROUGH DESIGN</p>
                        </div>
                    </div>
                    <div className='home__container'>
                        <img alt='hero' className='home__image' src={require('../../assets/images/hero.png')}/>
                    </div>
                </section>
                <section className='home__section'>
                    <div className='home__container home__container--projects'>
                        {/* <div className='home__section-container'>
                            <h2 className='home__subheading'>Recent Work</h2>
                            <p className='home__description home__description--section'>We take immense pride in presenting our latest creations. Explore our Recent Work and discover the artistry and craftsmanship that defines us. </p>
                        </div> */}
                        <div className='home__work-div'>
                            <img alt='project' className='home__work' src={require('../../assets/images/work2.png')}/>
                        </div>
                        <div className='home__work-div'>
                            <img alt='project' className='home__work' src={require('../../assets/images/work3.png')}/>
                        </div>
                        <div className='home__work-div'>
                            <img alt='project' className='home__work' src={require('../../assets/images/work2.png')}/>
                        </div>
                        <div className='home__work-div'>
                            <img alt='project' className='home__work' src={require('../../assets/images/work2.png')}/>
                        </div>
                        <div className='home__work-div'>
                            <img alt='project' className='home__work' src={require('../../assets/images/work2.png')}/>
                        </div>
                        {projects.map((project) => (
                            <div onClick={()=>{navigate(`project/${project._id}`)}} className='home__work-div' key={project._id} style={{ backgroundImage: `url(${project.image.url})` }}>

                            </div>
                        ))}
                        
                    </div>
                </section>
                <section className='home__section home__section--accent'>
                    <div className='home__container'>
                        <div className='home__testimonial'>
                            <h3 className='home__customer'>Donald Trump</h3>
                            <p className='home__description'>Partnering with Palm Beach Kitchens and Baths has transformed my home.<br/><br/> Their expertise in kitchen and bath design, along with their superb customer service, made the entire process a pleasure.<br/><br/> For exceptional home upgrades, Palm Beach Kitchens and Baths is the name to trust!</p>
                            <h4 className='home__testimonial-date'>June 2022</h4>
                        </div>
                        <div className='home__testimonial'>
                            <h3 className='home__customer'>Elon Musk</h3>
                            <p className='home__description'>Optimum Cabinets has left a lasting impression on me.<br/><br/> Their dedication to precision and their innovative approach to cabinetry is truly impressive.<br/><br/> I've had the opportunity to collaborate with various companies, but Optimum Cabinets' unique blend of creativity and craftsmanship sets them apart. </p>
                            <h4 className='home__testimonial-date'>December 2021</h4>
                        </div>
                        <div className='home__testimonial'>
                            <h3 className='home__customer'>Mark Zuckerberg</h3>
                            <p className='home__description'>Partnering with Palm Beach Kitchens and Baths has transformed my home.<br/><br/> Their expertise in kitchen and bath design, along with their superb customer service, made the entire process a pleasure.<br/><br/> For exceptional home upgrades, Palm Beach Kitchens and Baths is the name to trust!</p>
                            <h4 className='home__testimonial-date'>June 2022</h4>
                        </div>
                    </div>
                </section>
                {/* <section className='home__section'>
                    <div className='home__container'>
                        <div className='home__section-container'>
                            <h2 className='home__subheading'>Why Optimum Cabinets</h2>
                            <p className='home__description home__description--section'>At our cabinet company, we take immense pride in our craft. With over two decades of experience, we've mastered the art of creating exquisite, custom cabinetry. Our team's dedication to quality, innovation, and customer satisfaction is unmatched. </p>
                        </div>
                        <div className='home__reason-div'>

                            <h3 className='home__reason'>Energy Efficiency</h3>
                            <p className='home__description'>Our state-of-the-art manufacturing facility is powered by 100% renewable energy sources. This means that for every cabinet we produce, we save 50% more energy compared to traditional manufacturing processes.</p>
                        </div>
                        <div className='home__reason-div'>

                            <h3 className='home__reason'>Water Conservation</h3>
                            <p className='home__description'>We've implemented advanced water recycling systems, allowing us to reuse 90% of the water used in the cabinet-making process. By choosing us, you're conserving thousands of gallons of water annually compared to other cabinet providers.</p>
                        </div>
                    </div>
                </section> */}
                <section className='home__section'>
                    <div className='home__container'>
                        <div className='home__section-container'>
                        <h2 className='home__subheading'>Recent Blog Posts</h2>
                            <p className='home__description home__description--section'>As a leader in the cabinet industry, we take pride in offering valuable information, tips, and trends to enhance your home. Explore our blog to stay updated on the latest in cabinet design, organization, and more. Knowledge is the key to unlocking the full potential of your living spaces, and we're here to guide you every step of the way.</p>
                        </div>
                        <div className='home__blogpost'>
                            <img alt='article' className='home__blog-image' src={require('../../assets/images/blog2.png')}/>
                            <div className='home__inner'>
                                <h3 className='home__blog-name'>How to Build a Cabinet Yourself</h3>
                                <h4 className='home__testimonial-date'>March 2022</h4>
                                <p className='home__description'>Ready to dive into the world of DIY cabinet construction? Our upcoming blog post has got you covered. Discover the essential steps and tips for crafting your own custom cabinets and transform your space with your woodworking skills....</p>
                            </div>
                        </div>
                        <div className='home__blogpost'>
                            <img alt='article' className='home__blog-image' src={require('../../assets/images/blog3.png')}/>
                            <div className='home__inner'>
                                <h3 className='home__blog-name'>How to Choose a Cabinet</h3>
                                <h4 className='home__testimonial-date'>June 2022</h4>
                                <p className='home__description'>Selecting the perfect cabinets for your home is a decision that combines functionality and style. In our upcoming blog post, we delve into the art of choosing cabinets that not only complement your space but also optimize your storage needs...</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <section className='home__section'>
                    <button className='home__cta home__cta--main'>Request a Quote</button>
                </section> */}
            </main>
            <Footer/>
        </>
    );
}

export default Home;