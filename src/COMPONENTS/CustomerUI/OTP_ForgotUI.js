import React, { useState } from "react";
import styles from "../../STYLES/CustomerCSS/OTP_ForgotUI.module.css";


const OTP_ForgotUI = () => {
    return (
        <div className={styles.container}>
            <h3 className={styles.welcomeText}>
                W E L C O M E &nbsp;&nbsp;T O
                <br />
                <br />
                ATH&nbsp;&nbsp; C O L L E C T I V E
            </h3>
            <div className={styles.loginContainer}>
                <h4>FORGOT PASSWORD</h4>
                <form>
                    <div className={styles.formGroup}>
                        <label>OTP Numbers</label>
                        <input
                            type="text"
                            className={styles.inputField}
                            placeholder=""
                        />
                    </div>
                    <button type="submit" className={styles.loginBtn}>
                        SUBMIT
                    </button>
                </form>
                
            </div>
        </div>
    );
};

export default OTP_ForgotUI;
