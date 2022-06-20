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
                <h1 className={style.h1}>The React project is educational for understanding <br></br>the principles of React and Redux.</h1>
                <p className={style.p}>The combination and interaction of React and Redux on the example of simple and kind messages :)</p>
            </div>

        </div>
    )
}

export default ProfileInfo;