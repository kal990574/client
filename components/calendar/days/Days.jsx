import React from "react";
import DATE from "../configs";
import styles from './Days.module.css';

export default function Days() {
    const days = [];

    DATE.map((item, index) => {
        days.push(
            <div key={'days'+index} className={index === 0 ? styles.sun : index === 6 ? styles.sat : styles.day}>
                {item}
            </div>
        )
    });

    return <div className={styles.container}>{days}</div>;
}
