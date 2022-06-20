import { NavLink } from "react-router-dom";
import style from "./Navbar.module.css";

// Можно посмотерть объект style
// console.log(style);


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to="/profile" className={navData => navData.isActive ? style.active : style.item}>Profile</NavLink>
            </div>
            <div>
                <NavLink to="/dialogs" className={navData => navData.isActive ? style.active : style.item}>Messages</NavLink>
            </div>
            <div>
                <NavLink to="/news" className={navData => navData.isActive ? style.active : style.item}>About the project</NavLink>
            </div>
        </nav >
    )
}


export default Navbar;