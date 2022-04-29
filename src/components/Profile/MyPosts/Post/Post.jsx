import style from "./Post.module.css";
// Можно посмотерть объект style
// console.log(style);



const Posts = () => {
    return (
        <div className={style.item}>
            <img src="https://img.favpng.com/2/9/19/euclidean-vector-man-face-png-favpng-7dphNQdwDvHR1MKgvpEbrmJZh.jpg"></img>
            
            post 1

            <div>
                <span>like</span>
            </div>

        </div>
    )
}

export default Posts;