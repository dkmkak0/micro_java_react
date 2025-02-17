import React, { useState } from "react";
import styles from "../../STYLES/CustomerCSS/LoginUI.module.css";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const LoginUI = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={styles.container}>
      <h3 className={styles.welcomeText}>
        W E L C O M E &nbsp;&nbsp;T O
        <br />
        <br />
        ATH&nbsp;&nbsp; C O L L E C T I V E
      </h3>
      <div className={styles.loginContainer}>
        <h4>LOGIN</h4>
        <form>
          <div className={styles.formGroup}>
            <label>Username</label>
            <input
              type="text"
              className={styles.inputField}
              placeholder=""
            />
          </div>
          <div className={styles.formGroup}>
            <label>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                className={styles.inputField}
                placeholder=""
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
          <div className={styles.rememberMe}>
            <div>
              <input className={styles.checkbox} type="checkbox" /> Remember
            </div>
            <a className={styles.forgot} href="#">
              Forgot password
            </a>
          </div>
          <button type="submit" className={styles.loginBtn}>
            LOGIN
          </button>
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
          Don't have an account?{" "}
          <a className={styles.sign} href="#">
            Signup
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginUI;
