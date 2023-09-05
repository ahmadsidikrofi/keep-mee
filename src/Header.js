import { useEffect, useState } from "react";

const Header = () => {
    const [ darkMode, setDarkMode ] = useState(
        localStorage.getItem('dark') || 'light'
    );
    const handleDarkMode = () => {
        if ( darkMode === 'light' ) {
            setDarkMode('dark-mode')
        } else {
            setDarkMode('light');
        }
    }

    useEffect(() => {
        localStorage.setItem('dark', darkMode)
        document.body.className = darkMode;
    }, [darkMode])


    return (
        <div className={`header ${darkMode}`}>
            <h1>Keep mee <br />
                <small style={{ fontWeight: "normal", fontSize: "30px"}}>note me</small>
            </h1>
            <button className="save" onClick={(handleDarkMode)}>Dark mode</button>
        </div>
    )
}

export default Header;