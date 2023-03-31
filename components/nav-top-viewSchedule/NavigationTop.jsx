import React from 'react';
import styles from './NavigationTop.module.css';
import { BiMenu } from "react-icons/bi";
import { HiChatAlt2, HiX }from "react-icons/hi";

export default function NavigationTop({open, setOpen}) {
    return (
        <>
        <section className={styles.container}>
            <div>
                <HiX className={styles.icon} />
                <BiMenu className={styles.iconRight} />
            </div>
        </section>
        <h2 className={styles.title}>일정 세부사항</h2>
        </>
    );
}
