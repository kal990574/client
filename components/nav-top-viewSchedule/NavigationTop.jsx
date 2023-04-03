import React from 'react';
import styles from './NavigationTop.module.css';
import { BiMenu } from "react-icons/bi";
import { HiChatAlt2, HiX }from "react-icons/hi";

export default function NavigationTop({open, setOpen}) {
    return (
        <>
        <section className={styles.container}>
            <HiX className={styles.icon} />
            <h2>일정 세부사항</h2>
            <BiMenu className={styles.icon} />
        </section>
        </>
    );
}
