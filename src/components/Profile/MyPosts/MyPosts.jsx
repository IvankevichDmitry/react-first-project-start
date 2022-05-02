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
                    <Posts message="Hello. It's my first commit" likesCount="5"/>
                    <Posts message="How are you?" likesCount="10"/>
                </div>
                
            </div>
    )
}

export default MyPosts;