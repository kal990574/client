import React from 'react';
import styles from './NavigationTop.module.css';
import { BiMenu } from "react-icons/bi";
import { HiX }from "react-icons/hi";

export default function NavigationTop({open, setOpen, viewType, setViewType}) {
    return (
        <section className={styles.container}>
            <div>
                <div>일정 세부사항</div>
                <BiMenu class={styles.icon} />
                <HiX class={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
            </div>
        </section>
    );
}
