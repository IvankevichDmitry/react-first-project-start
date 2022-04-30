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
                    <Posts message="Hello. It's my first commit" count="5"/>
                    <Posts message="How are you?" count="10"/>
                    <Posts message="Okey" count="15"/>
                    <Posts message="Thank you!" count="20"/>
                    <Posts message="Yes" count="100"/>
                </div>
                
            </div>
    )
}

export default MyPosts;