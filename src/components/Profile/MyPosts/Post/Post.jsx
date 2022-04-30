import style from "./Post.module.css";
// Можно посмотерть объект style
// console.log(style);



const Posts = (props) => {

    // Просмотреть объект
    // console.log(props);

    return (
        <div className={style.item}>
            <img src="https://img.favpng.com/2/9/19/euclidean-vector-man-face-png-favpng-7dphNQdwDvHR1MKgvpEbrmJZh.jpg"></img>
            
            {props.message}

            <div>
                <span>
                    {props.count}
                </span>
            </div>

        </div>
    )
}

export default Posts;