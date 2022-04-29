import style from "./MyPosts.module.css";
import Posts from "./Post/Post";
// Можно посмотерть объект style
// console.log(style);



const MyPosts = () => {
return (
            <div>
                My posts

                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>

                <div className={style.posts}>
                    <Posts />
                </div>
                
            </div>
    )
}

export default MyPosts;