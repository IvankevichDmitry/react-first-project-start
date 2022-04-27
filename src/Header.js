/*
Для понимания.
import React from 'react';
Мы берем JSX для нашей функции из библиотеки React из node_modules
А у нас в новом React все это выполняеться в основном файле index.js.
*/

const Header = () => {
    return (
        <div>
            <a href="#A">Home</a>
            <a href="#A">News Feed</a>
            <a href="#A">Messages</a>
        </div>
    )
}

export default Header;