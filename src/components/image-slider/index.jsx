import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';
import './styles.css';


export default function ImageSlider({url, limit}) {
    
    const [image, setImage] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function getImages(url) {
        try {
            setLoading(true);
            const resp = await fetch(`${url}?page=2&limit=${limit}`);
            const data = await resp.json();

            if(data) {
                setImage(data);
                setLoading(false)
            }
        } catch(error) {
            setError(error.message);
            setLoading(false);
        }
    }


    function toLeft() {
        setCurrentImage(currentImage === 0 ? image.length - 1 : currentImage - 1)
    }

    function toRight() {
        setCurrentImage(currentImage === image.length -1 ? 0 : currentImage + 1)
    }

    useEffect(() => {
        if(url !== ''){
            getImages(url)
        }
    }, [url])

    if(loading) {
        return <div>Loading data!!!!!</div>
    }

    if(error !== null) {
        return <div>Error Occurred! {error}</div>
    }

    return <div className="container">
        <BsArrowLeftCircleFill onClick={toLeft} className="arrow arrow-left"/>
        {
            image && image.length ? 
            image.map((item, index)=> (
                <img
                    key={item.id}
                    alt={item.download_url}
                    src={item.download_url}
                    className={currentImage === index ? "current-image" : "current-image hide-current-image"}
                />
            ))
            : null}
            <BsArrowRightCircleFill onClick={toRight} className="arrow arrow-right"/>
            <span className="circle-indicators">
                {
                    image && image.length ?
                    image.map((_, index) => (<button
                    key={index}
                    className={currentImage === index ? "current-indicator" : "current-indicator change-current-indicator"} onClick={() => setCurrentImage(index)}></button>
                ))
                : null
                }
            </span>
    </div>
}