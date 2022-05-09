import style from "./Message.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message

const Message = (props) => {

    console.log(style.message)

    return (
        <div className={style.item}>
           <img src="https://e7.pngegg.com/pngimages/906/662/png-clipart-dot-dot.png"></img>
            <div className={style.message}>{props.message}</div>
        </div>
    )
};

export default Message;