import React from "react";
import styles from "../STYLES/LoginUI.module.css";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginUI = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.welcomeText}>WELCOME TO<br /><b>TIỆM RỬA XE</b></h3>
      <div className={styles.loginContainer}>
        <h4>LOGIN</h4>
        <form>
          <div className={styles.formGroup}>
            <label>Username</label>
            <input type="text" className={styles.inputField} placeholder="" />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <input type="password" className={styles.inputField} placeholder="" />
          </div>
          <div className={styles.rememberMe}>
            <div>
              <input className= {styles.checkbox} type="checkbox" /> Remember
            </div>
            <a className={styles.forgot} href="#">Forgot password</a>
          </div>
          <button type="submit" className={styles.loginBtn}>LOGIN</button>
        </form>
        <p className={styles.orText}>or</p>
        <div className={styles.socialIcons}>
        <div className={styles.iconCircle}>
            <FcGoogle className={styles.googleIcon} />
          </div> 
          <div className={styles.iconCircle}>
            <FaFacebook className={styles.facebookIcon} />
          </div>
        </div>
        <p className={styles.signupText}>
          Don't have an account? <a className={styles.sign} href="#">Signup</a>
        </p>
      </div>
    </div>
  );
};

export default LoginUI;
