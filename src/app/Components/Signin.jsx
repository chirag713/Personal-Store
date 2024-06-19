"use client";

import React, { useEffect, useState } from 'react';
import styles from '../styles/SignForm.module.css';
import { toast } from 'react-toastify';
import { Loginuser, Signupuser } from '../services/userservise';
import { useRouter } from 'next/navigation';


const SignForm = () => {

    const router = useRouter();


    const [isSignUp, setIsSignUp] = useState(false);//use to show signupform or loginin form

    //function to fetch the data of user from local storage and if user is loggedin then it will not allow this component and redirets to home page
    useEffect(() => {
        let userData = localStorage.getItem("username");
        if (userData) {
            router.push("/");
        }
    }, [router]);

    useEffect(()=>{
        let login = localStorage.getItem("login");
        if(login){
            setIsSignUp(true);
            localStorage.removeItem("login");
        }
    },[])

    // data which is used for login purpose
    const [logindata, setloginData] = useState({
        email: "",
        password: "",
    });

    //data use for signup purpose
    const [signindata, setsigninData] = useState({
        email: "",
        name: "",
        password: "",
    });

    //additional check that reminds user their password at time of signup
    const [confirmpassword, setconfirmPassword] = useState("");

    //function us to change variable is signup
    const toggleForm = () => {
        setIsSignUp(!isSignUp);
    };

    //login for login
    const submitlogindata = async (e) => {
        e.preventDefault();

        //if email or password is not there then we cant attempt for login
        if (logindata.email === "" || logindata.email === null) {
            toast.warning("Email field is required !!..", {
                position: "top-center"
            });
            return;
        }

        if (logindata.password === "" || logindata.password === null) {
            toast.warning("Password field is required !!..", {
                position: "top-center"
            });
            return;
        }

        try {

            //function for which calls api for login
            let result = await Loginuser(logindata);
            toast.success("User logged successfully !!..", {
                position: "top-center"
            });
            delete result.user.password;

            //set details of user to localstorage for further flow 
            localStorage.setItem('username', JSON.stringify(result.user));

            //redirects to home page
            router.push("/");
        } catch (error) {

            //error handling
            toast.error("Something went wrong !!..", {
                position: "top-center"
            });
        }
    }


    // login for signup
    const submitsignindata = async (e) => {
        e.preventDefault();
        console.log(signindata, confirmpassword);

         //if email or password or name is not there then we cant attempt for login
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


        // if password is not same as comfirm password then there is issue in password field we again have to type it

        if (signindata.password != confirmpassword) {
            toast.warning("Password not matched !!..", {
                position: "top-center"
            });
            return;
        }

        try {

            //function for which calls api for signup
            const result = await Signupuser(signindata);

            toast.success("User created successfully !!..", {
                position: "top-center"
            });
            delete result.user.password;

            //set details of user to localstorage for further flow 
            localStorage.setItem('username', JSON.stringify(result.user));

            //redirects to home page
            router.push("/");
        } catch (error) {
            //error handling
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
