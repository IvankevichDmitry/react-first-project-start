import style from "./Navbar.module.css";
// Можно посмотерть объект style
// console.log(style);


const Navbar = () => {
    return (
        <nav className={style.nav}>
            <div className={style.item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={`${style.item} ${style.active}`}>
                <a href="/dialogs">Messages</a>
            </div>
            <div className={style.item}>
                <a href="/news">News</a>
            </div>
            <div className={style.item}>
                <a href="/music">Music</a>
            </div>
            <div className={style.item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    )
}


export default Navbar;