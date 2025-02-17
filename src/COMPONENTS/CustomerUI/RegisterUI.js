import React, { useState } from "react";
import styles from "../../STYLES/CustomerCSS/RegisterUI.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterUI = () => {
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
                <h4>REGISTER</h4>
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
                                className={styles.eyeIcons}
                                onClick={() => setShowPassword((prev) => !prev)}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <div className={styles.formGroup}>
                        <label>Fullname</label>
                        <input
                            type="text"
                            className={styles.inputField}
                            placeholder=""
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Address</label>
                        <input
                            type="text"
                            className={styles.inputField}
                            placeholder=""
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Phone Numbers</label>
                        <input
                            type="text"
                            className={styles.inputField}
                            placeholder=""
                        />
                    </div>


                    <button type="submit" className={styles.loginBtn}>
                        REGISTER
                    </button>
                </form>

            </div>
        </div>
    );
};

export default RegisterUI;
