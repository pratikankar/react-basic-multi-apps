import { useEffect, useState } from "react"
import './scroll.css';


export default function ScrollProgress({url}) {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [scroll, setScroll] = useState(0);

    async function getData(link) {
        try {
            setLoading(true)
            const resp = await fetch(link);
            const data = await resp.json();

            if(data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }

        } catch(error) {
            console.log(error);
            setError(error.message);
        }
    }

    function scrollData() {
        const scrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setScroll((scrolled/height)*100)
    }

    useEffect(() => {
        getData(url);
    }, [url])

    useEffect(() => {
        window.addEventListener('scroll', scrollData)
        return () => {
            window.removeEventListener('scroll', ()=> {})
        }
    },[])

    if(loading) {
        return <div>Loading Data!!!</div>
    }

    if(error) {
        return <div>Error {error}</div>
    }

    return <div>
        <div className="scrollprogress">
            <h1>Scroll Progress Indicator</h1>
            <div className="scroll-container">
                <div className="progress-bar" style={{width: `${scroll}%`}}>

                </div>
            </div>
        </div>
        <div className="data-container">
        {
            data && data.length > 0 ? 
            data.map((item) => <p>{item.title}</p>)
            : null
        }
        </div>
    </div>
}