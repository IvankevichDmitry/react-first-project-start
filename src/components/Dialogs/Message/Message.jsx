import style from "./../Dialogs.module.css"

// 1. Вот наши 2 комоненты-функции DialogItem и Message

const Message = (props) => {
    return (
        <div className={style.item}>
           <img src="https://img.favpng.com/2/9/19/euclidean-vector-man-face-png-favpng-7dphNQdwDvHR1MKgvpEbrmJZh.jpg"></img>
            <div className={style.message}>{props.message}</div>
        </div>
    )
};

export default Message;