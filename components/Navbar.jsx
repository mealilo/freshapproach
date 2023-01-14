import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import NavItem from "./NavItem";
import styles from '../styles/Home.module.css';
import SubscribeButton from "./SubscribeButton";



const MENU_LIST = [
    { text: "Become a Vendor", href: "/" },
    { text: "Explore Produce", href: "https:www.google.com" }
];
const Navbar = () => {
    const [navActive, setNavActive] = useState(null);
    const [activeIdx, setActiveIdx] = useState(-1);

    return (
        <header>
            <nav className={`nav`}>

                <Image
                    src="/carrot.png"
                    alt="Fresh Approach"
                    className={styles.vercelLogo}
                    width={100}
                    height={100}
                    priority
                />

                <div
                    onClick={() => setNavActive(!navActive)}
                    className={`nav__menu-bar`}
                >
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className={`${navActive ? "active" : ""} nav__menu-list`}>
                    {MENU_LIST.map((menu, idx) => (
                        <div
                            onClick={() => {
                                setActiveIdx(idx);
                                setNavActive(false);
                            }}
                            key={menu.text}
                        >
                            <NavItem active={activeIdx === idx} {...menu} />
                        </div>
                    ))}
                    <SubscribeButton></SubscribeButton>

                </div>
            </nav>
        </header>
    );
};

export default Navbar;