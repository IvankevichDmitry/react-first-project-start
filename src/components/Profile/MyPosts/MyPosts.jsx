import style from "./MyPosts.module.css";
import Posts from "./Post/Post";
// Можно посмотерть объект style
// console.log(style);



const MyPosts = (props) => {

    // Получаем данные из index.js в MyPosts.jsx через другие компоненты и их props.
    // И создаем массив с компонетаой и данными.

    let postsElements = (props.posts).map( (item) => <Posts message={item.message} likesCount={item.likesCount} key={item.id} />)

    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>

            <div className={style.postsForm}>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>

            <div className={style.posts}>      
               {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;