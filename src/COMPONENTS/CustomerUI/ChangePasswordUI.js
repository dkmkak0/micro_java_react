import React, { useState } from "react";
import styles from "../../STYLES/CustomerCSS/ChangePasswordUI.module.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ChangePasswordUI = () => {
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className={styles.container}>
            <h3 className={styles.welcomeText}>
                W E L C O M E &nbsp;&nbsp;T O
                <br />
                <br />
                ATH&nbsp;&nbsp; C O L L E C T I V E
            </h3>
            <div className={styles.loginContainer}>
                <h4>CHANGE PASSWORD</h4>
                <form>

                    {/* Old Password */}
                    <div className={styles.formGroup}>
                        <label>Old Password</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={showOldPassword ? "text" : "password"}
                                className={styles.inputField}
                                placeholder=""
                            />
                            <span
                                className={styles.eyeIcon}
                                onClick={() => setShowOldPassword(!showOldPassword)}
                            >
                                {showOldPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    {/* New Password */}
                    <div className={styles.formGroup}>
                        <label>New Password</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={showNewPassword ? "text" : "password"}
                                className={styles.inputField}
                                placeholder=""
                            />
                            <span
                                className={styles.eyeIcon}
                                onClick={() => setShowNewPassword(!showNewPassword)}
                            >
                                {showNewPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className={styles.formGroup}>
                        <label>Confirm Password</label>
                        <div className={styles.passwordWrapper}>
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className={styles.inputField}
                                placeholder=""
                            />
                            <span
                                className={styles.eyeIcon}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>

                    <button type="submit" className={styles.loginBtn}>
                        SUBMIT
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ChangePasswordUI;
