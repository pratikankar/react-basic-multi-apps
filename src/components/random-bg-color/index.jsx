import { useEffect, useState } from "react";


export default function RandomBGColor() {

    const [colorType, setType] = useState('hex');
    const [color, setColor] = useState('#000000');

    function generateHexColor() {
        const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for(let i=0; i<6; i++) {
            hexColor += arr[generateRandom(arr.length)]
        }
        setColor(hexColor);
    }

    function generateRGBColor() {
        const r = generateRandom(256);
        const g = generateRandom(256);
        const b = generateRandom(256);

        setColor(`rgb(${r},${g},${b})`);
    }

    function generateRandom(length) {
        return Math.floor(Math.random()*length);
    }

    useEffect(() => {
        if(colorType === 'rgb') {
            generateRGBColor();
        } else {
            generateHexColor();
        }
    }, [colorType])

    return <div style={{
        width: '100vw',
        height: '100vh',
        background: color
    }}>
        <button onClick={() => setType('hex')}>Set HEX Color</button>
        <button onClick={() => setType('rgb')}>Set RGB Color</button>
        <button onClick={colorType === 'hex' ? generateHexColor : generateRGBColor}>Generate Random Color</button>
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFF',
            fontSize: '60px',
            marginTop: '50px',
            flexDirection: 'column',
            gap: '20px'
        }}>
            <h3>{colorType === 'rgb' ? 'RGB Color': 'HEX Color'}</h3>
            <h3>{color}</h3>
        </div>
    </div>
}