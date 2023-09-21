import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './BlogPost.scss'

const BlogPost = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [blogContent, setBlogContent] = useState('')
    const [image, setImage] = useState('')
    const [dateFinished, setDateFinished] = useState('')

    const projectId = useParams().id
    console.log(projectId)

    useEffect(()=> {
        axios.get(`http://localhost:5001/blog/${projectId}`)
        .then((response) => {
            console.log(response.data)
            setTitle(response.data.title)
            setSummary(response.data.summary)
            setBlogContent(response.data.content)
            setImage(response.data.image.url)
            setDateFinished(response.data.createdAt)
        })
        .catch((err) => {
            console.log(err)
        })
    })

    const [isCopied, setIsCopied] = useState(false);

    const copyURL = () => {
        const urlInput = document.createElement('input');
        urlInput.value = window.location.href;
        document.body.appendChild(urlInput);
        urlInput.select();
        document.execCommand('copy');
        document.body.removeChild(urlInput);
        setIsCopied(true);
    
        // Reset the "Copied" status after 2 seconds
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      };
    

    return (
        <>
        <Header/>
        <main className='blog'>
            <img className='blog__image' src={image} />
            <h1 className='blog__title'>{title}</h1>
            <h2 className='blog__date'>{dateFinished}</h2>
            <section className='blog__content' dangerouslySetInnerHTML={{__html:blogContent}}/>
            <div className='blog__container'>
                <button onClick={copyURL} className="blog__cta blog__cta--secondary">{isCopied ? 'URL Copied' : 'Share'}</button>
                <button onClick={()=>{navigate('/contact')}} className='blog__cta'>Contact</button>
            </div>
        </main>
        <Footer/>
        </>
    );
}

export default BlogPost;