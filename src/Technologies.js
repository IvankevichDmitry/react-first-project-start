/*
Для понимания.
import React from 'react';
Мы берем JSX для нашей функции из библиотеки React из node_modules
А у нас в новом React все это выполняеться в основном файле index.js.
*/

const Technologies = () => {
    return (
        <div className="App">
            <div>
                <h1>Технологии</h1>
                <ul>
                    <li>html, css, js</li>
                    <li>react, redux</li>
                </ul>
            </div>
            <div>
                <h2>Инструменты</h2>
                <p>VScode, git, gitHub</p>
            </div>
        </div>
    )
}

export default Technologies;