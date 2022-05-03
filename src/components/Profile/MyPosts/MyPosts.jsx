import style from "./MyPosts.module.css";
import Posts from "./Post/Post";
// Можно посмотерть объект style
// console.log(style);



const MyPosts = () => {
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
                    <Posts message="Hello. It's my first commit" likesCount="5"/>
                    <Posts message="How are you?" likesCount="10"/>
                </div>
                
            </div>
    )
}

export default MyPosts;