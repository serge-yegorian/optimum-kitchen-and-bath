import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Projects.scss'
import { useEffect } from 'react';

const Projects = () => {

    useEffect(()=> {
        window.scrollTo({
            top: 0
        });
    })

    return (
        <>
            <Header/>
            <main className='projects'>
            <section className='home__section home__section--flex home__section--flex-projects'>
                    <div className='home__container home__container--black'>
                        <div>
                        <h1 className='home__heading'>Recent Projects</h1>
                        <p className='home__slogan'>Discover Our Latest Creations</p>
                        </div>
                    </div>
                </section>
                <section className='projects__section'>
                    <h1 className='projects__heading'>Recent Projects</h1>
                    <p className='projects__slogan'>We take immense pride in presenting our latest creations. Explore our Recent Work and discover the artistry and craftsmanship that defines us.</p>
                </section>
                <section className='projects__section'>
                    <div className='projects__container'>
                        <div className='projects__project'>
                            <img alt='project' className='projects__image' src={require('../../assets/images/work1.png')}/>
                            <div className='projects__data'>
                                <h2 className='projects__city'>Boca Raton</h2>
                                <h3 className='projects__date'>June 2023</h3>
                            </div>
                        </div>
                        <div className='projects__project'>
                            <img alt='project' className='projects__image' src={require('../../assets/images/blog3.png')}/>
                            <div className='projects__data'>
                                <h2 className='projects__city'>West Palm Beach</h2>
                                <h3 className='projects__date'>May 2023</h3>
                            </div>
                        </div>
                        <div className='projects__project'>
                            <img alt='project' className='projects__image' src={require('../../assets/images/blog2.png')}/>
                            <div className='projects__data'>
                                <h2 className='projects__city'>Jupyter</h2>
                                <h3 className='projects__date'>March 2023</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </>
    );
}

export default Projects;