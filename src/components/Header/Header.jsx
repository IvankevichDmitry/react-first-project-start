import style from "./Header.module.css";
// Можно посмотерть объект style
// console.log(style);


const Header = () => {
    return (
        <header className={style.header}>
            <img src="https://www.vhv.rs/dpng/d/256-2567002_hello-png-free-download-transparent-background-hello-clip.png"></img>
        </header>
    )
}

export default Header;