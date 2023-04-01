import React from 'react';
import styles from './NavigationBottom.module.css';
import {DETAIL_SCHEDULE} from "../../common/dummy";

export default function NavigationBottom({open, setOpen}) {
    return (
        <section className={styles.container}>
        <div style={{background:`${DETAIL_SCHEDULE[0].color}`}} className={styles.comment}></div>
        </section>
    );
}
