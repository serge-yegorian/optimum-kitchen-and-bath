import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Blog.scss'

const Blog = () => {
    return (
        <>
        <Header/>
        <main className='blog'>
            <section className='blog__section'>
                <h1 className='blog__heading'>Blog</h1>
                <p className='blog__slogan'>Dive into a world of design ideas, renovation tips, and customer success stories. Our blog is your go-to resource for expert advice, inspiration, and the latest trends in kitchen and cabinet design. Explore, learn, and discover how we can transform your kitchen into the heart of your dream home.</p>
            </section>
            <section className='blog__section'>
                <div className='blog__container'>
                    <div className='blog__blogpost'>
                        <img alt='article' className='blog__blog-image' src={require('../../assets/images/blog1.png')}/>
                        <div className='blog__inner'>
                            <h3 className='blog__blog-name'>How to Choose a Cabinet</h3>
                            <h4 className='blog__date'>August 2022</h4>
                            <p className='blog__description'>Selecting the perfect cabinets for your home is a decision that combines functionality and style. In our upcoming blog post, we delve into the art of choosing cabinets that not only complement your space but also optimize your storage needs. From materials and finishes to layout and design, discover the key factors that will empower you to make the ideal cabinet choice for your lifestyle and aesthetic preferences...</p>
                        </div>
                    </div>
                    <div className='blog__blogpost'>
                        <img alt='article' className='blog__blog-image' src={require('../../assets/images/blog2.png')}/>
                        <div className='blog__inner'>
                            <h3 className='blog__blog-name'>How to Choose a Cabinet</h3>
                            <h4 className='blog__date'>August 2022</h4>
                            <p className='blog__description'>Selecting the perfect cabinets for your home is a decision that combines functionality and style. In our upcoming blog post, we delve into the art of choosing cabinets that not only complement your space but also optimize your storage needs. From materials and finishes to layout and design, discover the key factors that will empower you to make the ideal cabinet choice for your lifestyle and aesthetic preferences...</p>
                        </div>
                    </div>

                    <div className='blog__blogpost'>
                        <img alt='article' className='blog__blog-image' src={require('../../assets/images/work3.png')}/>
                        <div className='blog__inner'>
                            <h3 className='blog__blog-name'>How to Destroy a Cabinet</h3>
                            <h4 className='blog__date'>August 2022</h4>
                            <p className='blog__description'>Destroy the perfect cabinets for your home is a decision that combines functionality and style. In our upcoming blog post, we delve into the art of destroying cabinets that not only complement your space but also optimize your storage needs. From materials and finishes to layout and design, discover the key factors that will empower you to destroy the ideal cabinet choice for your lifestyle and aesthetic preferences...</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
        </>
    );
}

export default Blog;