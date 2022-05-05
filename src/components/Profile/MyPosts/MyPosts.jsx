import style from "./MyPosts.module.css";
import Posts from "./Post/Post";
// Можно посмотерть объект style
// console.log(style);



const MyPosts = () => {

    // Данные с сообщениями. Суть в Dialogs
    let posts = [
        { id: 1, message: "Hi, how are you?", likesCount: 10 },
        { id: 2, message: "Post 1", likesCount: 30 },
        { id: 3, message: "Post 2", likesCount: 100 },
        { id: 5, message: "Post 3", likesCount: 110 },
    ];
    let postsElements = posts.map( (item) => <Posts message={item.message} likesCount={item.likesCount} key={item.id} />)



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