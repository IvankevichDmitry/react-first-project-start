import style from "./../Dialogs.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message

const Message = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
};

export default Message;