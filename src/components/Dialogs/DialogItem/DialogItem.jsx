import { NavLink } from "react-router-dom";
import style from "./../Dialogs.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog + " " + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;