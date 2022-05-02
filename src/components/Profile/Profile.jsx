import MyPosts from "./MyPosts/MyPosts";
import style from "./Profile.module.css";
// Можно посмотерть объект style
// console.log(style);



const Profile = () => {
    return (
        // Header Profile
        <div>
            <div>
                <img src="https://t4.ftcdn.net/jpg/03/53/95/73/240_F_353957302_lzuGOuFVbkPMnfLCngcUco7EMS5OOxiz.jpg"></img>
            </div>

            {/* MyPosts */}

            <MyPosts />



        </div>
    )
}

export default Profile;