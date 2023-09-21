import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Project.scss'

const Project = () => {

    const navigate = useNavigate();

    const [title, setTitle] = useState('')
    const [summary, setSummary] = useState('')
    const [projectContent, setProjectContent] = useState('')
    const [image, setImage] = useState('')
    const [dateFinished, setDateFinished] = useState('')

    const projectId = useParams().id
    console.log(projectId)

    useEffect(()=> {
        axios.get(`http://localhost:5001/project/${projectId}`)
        .then((response) => {
            console.log(response.data)
            setTitle(response.data.title)
            setSummary(response.data.summary)
            setProjectContent(response.data.content)
            setImage(response.data.image.url)
            setDateFinished(response.data.dateFinished)
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
        <main className='project'>
            <img className='project__image' src={image} />
            <h1 className='project__title'>{title}</h1>
            <h2 className='project__date'>{dateFinished}</h2>
            <section className='project__content' dangerouslySetInnerHTML={{__html:projectContent}}/>
            <div className='project__container'>
                <button onClick={copyURL} className="project__cta project__cta--secondary">{isCopied ? 'URL Copied' : 'Share'}</button>
                <button onClick={()=>{navigate('/contact')}} className='project__cta'>Contact</button>
            </div>
        </main>
        <Footer/>
        </>
    );
}

export default Project;