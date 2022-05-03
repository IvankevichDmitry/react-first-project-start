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
    return (
        <div className={style.dialogs}>

            <div className={style.dialogsItems}>
                {/* Вот изначальное представление будущей компоненты
                <div className={style.dialog + " " + style.active}>
                    <NavLink to="/dialogs/1">Name</NavLink>
                </div> 
                */}
                <DialogItem name="Dmitry" id="1" />
                <DialogItem name="Alina" id="2" />
                <DialogItem name="Timothy" id="3" />
                <DialogItem name="Ekaterina" id="4" />
                <DialogItem name="Maxim" id="5" />
                <DialogItem name="Tanya" id="6" />
            </div>

            <div className={style.messages}>
                {/* Вот изначальное представление будущей компоненты
                <div className={style.message}>Hi</div>
                */}
                <Message message="Hi" />
                <Message message="Hello" />
                <Message message="Good morning" />
                
            </div>

        </div>
    )
};

export default Dialogs;