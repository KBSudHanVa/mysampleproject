import { Button } from "antd";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"
// import { FaSun, FaMoon } from "react-icons/fa";

const ToggleThemeButton = ({darkTheme, toggleTheme}) => {
    return ( 
        <div className="toggle-theme-btn">
            <Button onClick={toggleTheme}>
                {/* {darkTheme ? <FaSun/> : <FaMoon/>} */}
                {darkTheme ? <HiOutlineSun/> : <HiOutlineMoon/>}
            </Button>
        </div>
     );
}
 
export default ToggleThemeButton;