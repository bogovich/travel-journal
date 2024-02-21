import { ThemeContext } from "../contexts/theme-context";
import { useContext } from "react";
import './SwitchButton.css';

const SwitchButton = () => {
    const { isDark, toggleTheme } = useContext(ThemeContext)
    return (
        <div className="onoffswitch">
            <input type="checkbox" name="onoffswitch" checked={!isDark} onChange={toggleTheme} className="onoffswitch-checkbox" id="myonoffswitch" tabIndex="0"/>
            <label className="onoffswitch-label" htmlFor="myonoffswitch">
                <span className="onoffswitch-inner"></span>
                <span className="onoffswitch-switch"></span>
            </label>
        </div>
    )
}

export default SwitchButton;