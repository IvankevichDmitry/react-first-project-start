import style from "./MyPosts.module.css";
import Posts from "./Post/Post";
import React from "react";
// Можно посмотерть объект style
// console.log(style);



const MyPosts = (props) => {


    let postsElements = (props.posts).map( (item) => <Posts message={item.message} likesCount={item.likesCount} key={item.id} />)
    

    // Ссылка на textarea c использование ref, через метод React createRef.
    // Сслыка это объект, у которого current это textarea и value значние введеное в textarea.
    // ref - используется для нативного или обычного JS. И в основном только для чтения информации.
    let newPostElement = React.createRef()
    let addPostClick = () => {
        let text = newPostElement.current.value;
        props.addPost(text)
        newPostElement.current.value = "";
    };


    return (
        <div className={style.postsBlock}>
            <h3>My posts</h3>

            <div className={style.postsForm}>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={ addPostClick }>Add post</button>
                </div>
            </div>

            <div className={style.posts}>      
               {postsElements}
            </div>

        </div>
    )
}

export default MyPosts;