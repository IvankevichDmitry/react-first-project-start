import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css"

// Вот наши 2 комоненты-функции DialogItem и Message
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
    
// Создали небольшую Базу Данных
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
                {/* Вот изначальное представление будущей компоненты
                <div className={style.dialog + " " + style.active}>
                    <NavLink to="/dialogs/1">Name</NavLink>
                </div> 
                */}
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name="Timothy" id="3" />
                <DialogItem name="Ekaterina" id="4" />
                <DialogItem name="Maxim" id="5" />
                <DialogItem name="Tanya" id="6" />
            </div>

            <div className={style.messages}>
                {/* Вот изначальное представление будущей компоненты
                <div className={style.message}>Hi</div>
                */}
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
                <Message message={messagesData[2].message} />

            </div>

        </div>
    )
};

export default Dialogs;