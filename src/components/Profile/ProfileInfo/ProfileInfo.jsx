import style from "./ProfileInfo.module.css";
// Можно посмотерть объект style
// console.log(style);



const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={style.img} src="https://t4.ftcdn.net/jpg/03/53/95/73/240_F_353957302_lzuGOuFVbkPMnfLCngcUco7EMS5OOxiz.jpg"></img>
            </div>

            <div className={style.descriptionBlock}>
                ФОТО И ОПИСАНИЕ
            </div>

        </div>
    )
}

export default ProfileInfo;