import StoreTheme from "./store-theme";
import './theme.css';

export default function SwitchTheme () {

    const [theme, setTheme] = StoreTheme('theme', 'dark');

    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return <div className="switchtheme" data-theme={theme}>
        <div className="container">
            <p>Click button to switch theme</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    </div>
}