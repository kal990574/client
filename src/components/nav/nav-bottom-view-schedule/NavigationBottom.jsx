import React from 'react';
import styles from './NavigationBottom.module.css';
import {DETAIL_SCHEDULE} from "../../../common/dummy";

export default function NavigationBottom({data}) {
    return (
        <section className={styles.container}>
        <div style={{background:`${data.color}`}} className={styles.comment}></div>
        </section>
    );
}
