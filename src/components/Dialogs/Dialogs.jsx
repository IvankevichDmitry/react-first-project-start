import { NavLink } from "react-router-dom";
import style from "./Dialogs.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message
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

    // 2. БАЗА ДАННЫХ
    // ПОЛЬЗОВАТЕЛЕЙ
    let dialogs = [
        { id: 1, name: "Dmitry" },
        { id: 2, name: "Alina" },
        { id: 3, name: "Timothy" },
        { id: 4, name: "Eketerina" },
        { id: 5, name: "Maxim" },
        { id: 6, name: "Tanya" },
    ];
     // СООБЩЕНИЙ
     let messages = [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hello" },
        { id: 3, message: "Good morning" },
        { id: 4, message: "Good day" },
        { id: 5, message: "Yes" },
        { id: 6, message: "Welcome" },
    ];

    // 3. МЕТОД МАССИВОВ MAP 
    // *key - просто так, для React
    let dialogsElements = dialogs.map((item) => <DialogItem name={item.name} id={item.id} key={item.id} /> );
    // Суть метода MAP
    // let dialogsElements = [
    //     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />,
    //     <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />,
    // ]
    let messagesElements = messages.map((item) => { return (<Message message={item.message} key={item.id} />)} );



    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {/* // Использование НОВОГО МАССИВА ПОЛЬЗОВАТЕЛЕЙ */}
                {dialogsElements}
            </div>

            <div className={style.messages}>        
                {/* // Использование НОВОГО МАССИВА СООБЩЕНИЙ */}
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;