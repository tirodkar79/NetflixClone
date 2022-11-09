import loginBackgroundImage from '../assets/loginBackground.png'
import styles from '../styles/login.module.css'
function Login(){
    return(
        <div className={styles.loginContainer}>
            <img src={loginBackgroundImage} className={styles.loginBackgrounImage}></img>
        </div>
    );
}

export default Login;
