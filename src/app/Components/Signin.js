"use client";

import React, { useState } from 'react';
import styles from '../styles/SignForm.module.css';
import { toast } from 'react-toastify';


const SignForm = () => {
    const [isSignUp, setIsSignUp] = useState(false);

    const [logindata, setloginData] = useState({
        email: "",

        password: "",
    });

    const [signindata, setsigninData] = useState({
        email: "",
        name: "",
        password: "",
    });

    const [confirmpassword, setconfirmPassword] = useState("");

    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    const submitlogindata = (e) => {
        e.preventDefault();
        console.log(logindata);
    }


    const submitsignindata = async(e) => {
        e.preventDefault();
        console.log(signindata, confirmpassword);

        if (signindata.name === "" || signindata.name === null) {
            toast.warning("Name field is required !!..", {
                position: "top-center"
            });
            return;
        }

        if (signindata.email === "" || signindata.email === null) {
            toast.warning("Email field is required !!..", {
                position: "top-center"
            });
            return;
        }

        if (signindata.password === "" || signindata.password === null) {
            toast.warning("Password field is required !!..", {
                position: "top-center"
            });
            return;
        }

        if (signindata.password != confirmpassword) {
            toast.warning("Password not matched !!..", {
                position: "top-center"
            });
            return;
        }

        try {

            

            // const result = await Signupuser(signindata);


            toast.success("User created successfully !!..", {
                position: "top-center"
            });
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong !!..", {
                position: "top-center"
            });
        }


    }

    return (
        <div className={styles.wrapper + (isSignUp ? ` ${styles.animateSignUp}` : ` ${styles.animateSignIn}`)}>
            <div className={`${styles.formWrapper} ${styles.signUp}  `} >
                <form >
                    <h2>Sign Up</h2>
                    <div className={styles.inputGroup}>
                        <input type="text" required

                            onChange={(event) => {
                                setsigninData({
                                    ...signindata,
                                    name: event.target.value,
                                })
                            }}
                            value={signindata.name}

                        />
                        <label>Username</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="email" required
                            onChange={(event) => {
                                setsigninData({
                                    ...signindata,
                                    email: event.target.value,
                                })
                            }}
                            value={signindata.email}

                        />
                        <label>Email</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="password" required

                            onChange={(event) => {
                                setsigninData({
                                    ...signindata,
                                    password: event.target.value,
                                })
                            }}
                            value={signindata.password}

                        />
                        <label>Password</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="password" required

                            onChange={(event) => {
                                setconfirmPassword(event.target.value)
                            }}
                            value={confirmpassword}
                        />
                        <label>Confirm Password</label>
                    </div>
                    <button onClick={submitsignindata} className={styles.btn}>Sign Up</button>
                    <div className={styles.signLink}>
                        <br />
                        <p>Already have an account? <a href="#" onClick={toggleForm}>Sign In</a></p>
                    </div>
                </form>
            </div>

            <div className={`${styles.formWrapper} ${styles.signIn}`}>
                <form>
                    <h2>Login</h2>
                    <div className={styles.inputGroup}>
                        <input type="email" required

                            onChange={(event) => {
                                setloginData({
                                    ...logindata,
                                    email: event.target.value,
                                })
                            }}
                            value={logindata.email}

                        />
                        <label>Email</label>
                    </div>
                    <div className={styles.inputGroup}>
                        <input type="password" required

                            onChange={(event) => {
                                setloginData({
                                    ...logindata,
                                    password: event.target.value,
                                })
                            }}
                            value={logindata.password}
                        />
                        <label>Password</label>
                    </div>
                    {/* <div className={styles.forgotPass}>
                        <a href="#">Forgot Password?</a>
                    </div> */}
                    <button onClick={submitlogindata} className={styles.btn}>Login</button>
                    <div className={styles.signLink}>
                        <br />
                        <p>Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignForm;
