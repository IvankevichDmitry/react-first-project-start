import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// Можно посмотерть объект style
// console.log(style);



const Profile = (props) => {
   

    return (
        <div>
            {/* // Header Profile */}
            <ProfileInfo />

            {/* // MyPosts */}
            <MyPosts posts={props.state.posts} addPost={props.addPost}/>
        </div>
    )
}

export default Profile;