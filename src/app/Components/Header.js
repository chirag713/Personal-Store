// components/Header.js
"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
// import logo from "../Assets/logo.png";
import { IoIosClose } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";

import styles from "../styles/navbar.module.css";

const Header = () => {
    const [navActive, setNavActive] = useState(false);
    const [scrolling, setScrolling] = useState(false);
    const [login, setlogin] = useState(true);

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

    const handleNavToggle = () => setNavActive(!navActive);

    return (
        <>
            <header className={`${scrolling ? styles.scrolling : ""} ${styles.header}`}  >
                <a href="#">
                    <Image className={styles.logo} src="" alt='BasicBrush Studios Logo' />
                </a>
                <div>
                    <ul className={`${styles.navbar} ${navActive ? styles.active : ''}`}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About Us</a></li>
                        <li><a href="/">Mens</a></li>
                        <li><a href="/">Womens</a></li>
                        <li><a href="/">Childrens</a></li>
                        {
                            login ? <li><a href="/">Cart</a></li> : <li><a href="/">Login</a></li>

                            
                        }
                        {
                            login ? <li><a href="/">Logout</a></li> : <li><a href="/">Signup</a></li>
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
