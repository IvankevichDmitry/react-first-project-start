import style from "./Profile.module.css";
// Можно посмотерть объект style
// console.log(style);



const Profile = () => {
    return (
        <div className={style.content}>
            <div>
                <img src="https://t4.ftcdn.net/jpg/03/53/95/73/240_F_353957302_lzuGOuFVbkPMnfLCngcUco7EMS5OOxiz.jpg"></img>
            </div>

            <div className={style.logotip}>
                <img src="https://img.favpng.com/2/9/19/euclidean-vector-man-face-png-favpng-7dphNQdwDvHR1MKgvpEbrmJZh.jpg"></img>
                avatar+description
            </div>

            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={style.posts}>
                    <div className={style.item}>
                        post 1
                    </div>
                    <div className={style.item}>
                        post 2
                    </div>
                </div>
            </div>

            <div>
            </div>

        </div>
    )
}

export default Profile;