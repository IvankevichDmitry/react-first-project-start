import style from "./MyPosts.module.css";
import Posts from "./Post/Post";
// Можно посмотерть объект style
// console.log(style);



const MyPosts = () => {

    let postsData = [
        { id: 1, message: "Hi, how are you?", likesCount: 10 },
        { id: 2, message: "Post 1", likesCount: 30 },
    ];

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
                <Posts message={postsData[0].message} likesCount={postsData[0].likesCount} />
                <Posts message={postsData[1].message} likesCount={postsData[1].likesCount} />
            </div>

        </div>
    )
}

export default MyPosts;