import React from 'react';
import styles from './ViewDetailSchedule.module.css';
import {DETAIL_SCHEDULE} from "../../common/dummy";

export default function NavigationTop({data}) {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <div style={{background:`${data.color}`}} className={styles.color}></div>
                <div className={styles.title}>{data.title}</div>
            </div>
            <div className={styles.detail}>{data.content}</div>
            <div className={`${styles.time} ${styles.item}`}>
                <div>{data.timeStampS}</div>
                <div></div>
                <div>{data.timeStampE}</div>
            </div>
            <div className={styles.item}>장소</div>
            <div>{data.place}</div>
            <div className={styles.item}>인원</div>
            <div className={styles.line}></div>
            <div className={styles.item}>좋아요</div>
        </section>
    );
}
