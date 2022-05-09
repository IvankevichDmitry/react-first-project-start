import { NavLink } from "react-router-dom";
import style from "./DialogItem.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message
const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={style.dialog}>
            <img src="https://e7.pngegg.com/pngimages/906/662/png-clipart-dot-dot.png"></img>
            <NavLink to={path} className={style.item}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;