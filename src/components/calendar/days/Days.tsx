import React from "react";
import { DATE } from "../configs";
import styles from './Days.module.css';

export default function Days() {
    return (
        <div className={styles.container}>
            {
                DATE.map((item, index) => {
                    return (
                        <div key={'days'+index} className={index === 0 ? styles.sun : index === 6 ? styles.sat : styles.day}>
                            {item}
                        </div>
                    )
                })
            }
        </div>
    );
}
