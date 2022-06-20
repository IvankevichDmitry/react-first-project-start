import style from "./MyPosts.module.css";
import Posts from "./Post/Post";
import React from "react";
// Можно посмотерть объект style
// console.log(style);



const MyPosts = (props) => {
    console.log(props)
   
    let postsElements = (props.profilePage.posts).map( (item) => <Posts message={item.message} likesCount={item.likesCount} key={item.id} />)
    

    // Ссылка на textarea c использование ref, через метод React createRef.
    // Сслыка это объект, у которого current это textarea и value значние введеное в textarea.
    // ref - используется для нативного или обычного JS. И в основном только для чтения информации.
    let newPostElement = React.createRef()
    let addPostClick = () => {
        props.dispatch({type: "ADD-POST"});
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: "UPDATE-NEW-POST-TEXT", newText: text}
        props.dispatch(action)
        //  props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText: text})
    }


    return (
        <div className={style.postsBlock}>
            <h3 className={style.h3}>My posts</h3>

        <div className={style.postcenter}>
            <div className={style.postsForm}>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} 
                    value={props.profilePage.newPostText}/>
                </div>
                <div>
                    <button onClick={ addPostClick }>Add post</button>
                </div>
            </div>

            <div className={style.posts}>      
               {postsElements}
            </div>
      </div>
        </div>
    )
}

export default MyPosts;