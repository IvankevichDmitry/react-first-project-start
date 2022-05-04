import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css"

// 2. Вот наши 2 комоненты-функции DialogItem и Message
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + " " + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    
// 4. Создали небольшую Базу Данных
let dialogsData = [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Alina" },
    { id: 3, name: "Timothy" },
    { id: 4, name: "Eketerina" },
    { id: 5, name: "Maxim" },
    { id: 6, name: "Tanya" },
];

let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "Hello" },
    { id: 3, message: "Good morning" },
    { id: 4, message: "Good day" },
    { id: 5, message: "Yes" },
    { id: 6, message: "Welcome" },
];

    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                {/* 1. Вот изначальное представление будущей компоненты
                <div className={style.dialog}>
                    <NavLink to="/dialogs/1">Dmitry</NavLink>
                </div> 
                */}
                
                {/* 3. Вот использование компоненты DialogItem                
                <DialogItem name="Dmitry" id="3" />

                // 5. Вот использование Компоненты и данных
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                 */}

            </div>

            <div className={style.messages}>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />

            </div>

        </div>
    )
};

export default Dialogs;