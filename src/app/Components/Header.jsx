// components/Header.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
// import logo from "../Assets/logo.png";
import { IoIosClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";

import styles from "../styles/navbar.module.css";
import { useRouter } from 'next/navigation';

const Header = () => {

    const router = useRouter();


    const [navActive, setNavActive] = useState(false); //use to show links on mobile view  basically uddates css of links 
    const [scrolling, setScrolling] = useState(false); //use for making the bg color of header at opacity  show that all elements are visible properly
    const [login, setlogin] = useState(true); //use to check that there is user login or not
    const [user, setUser] = useState(null); //use to store the data of user 

    //function to fetch the data of user from local storage
    useEffect(() => {
        let userData = localStorage.getItem("username");
        if (userData) {
            try {
                userData = JSON.parse(userData);
                setUser(userData);
                setlogin(true);
            } catch (e) {
                console.error("Error parsing JSON from localStorage", e);
            }
        } else{
            setlogin(false);
        }
    }, [router]);


    //function use to add css to header so that its background will be transparent
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    //function to push user to home page 
    const gotohome = () => {
        router.push("/Home");
    }

    //function use to logout user means it will redirect to mainpage
    const logout = () => {
        localStorage.removeItem("username");
        setlogin(false);
        router.push("/");
    }

    const handleNavToggle = () => setNavActive(!navActive); //just toggles the value of nacActive to achieve desired css when required

    return (
        <>
            <header className={`${scrolling ? styles.scrolling : ""} ${styles.header}`}  >
                <a href="#">
                    <Image className={styles.logo} src="" alt='BasicBrush Studios Logo' />
                </a>
                <div className=' font-bold '>
                    <ul className={`${styles.navbar} ${navActive ? styles.active : ''}`}>
                        <li className="cursor-pointer" onClick={gotohome}  ><>Home</></li>
                        <li className="cursor-pointer"  ><>About Us</></li>
                        <li className="cursor-pointer"  ><>Mens</></li>
                        <li className="cursor-pointer"  ><>Womens</></li>
                        <li className="cursor-pointer"  ><>Childrens</></li>
                        {/* conditional rendering on basis of login  */}
                        {
                            login ? <li className="cursor-pointer"  ><>Cart</></li> : <li className="cursor-pointer"  ><>Login</></li>
                        }
                        {
                            login ? <li className="cursor-pointer" onClick={logout} ><>Logout</></li> : <li className="cursor-pointer"  ><>Signup</></li>
                        }
                        <a href="#" onClick={handleNavToggle} className={styles.close}>
                            <div className="bg-red-700 rounded-full p-1 w-7 h-7 flex items-center justify-center">
                                <IoIosClose className="text-white" />
                            </div>
                        </a>
                    </ul>
                </div>
                <div className={styles.mobile}>
                    <i><HiBars3 id={styles.bar} onClick={handleNavToggle} /></i>
                </div>
            </header>
        </>
    );
};

export default Header;
