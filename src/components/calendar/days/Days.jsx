import React from "react";
import styles from './Days.module.css';
import {DATE} from "~/components/calendar/configs";

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
