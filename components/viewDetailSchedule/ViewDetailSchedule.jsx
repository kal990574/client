import React from 'react';
import styles from './ViewDetailSchedule.module.css';
import {DETAIL_SCHEDULE} from "../../common/dummy";
export default function NavigationTop({open, setOpen}) {
    return (
        <section className={styles.container}>
            <div className={styles.top}>
                <div style={{background:`${DETAIL_SCHEDULE[0].color}`}} className={styles.color}></div>
                <div className={styles.title}>{DETAIL_SCHEDULE[0].title}</div>
            </div>
            <div className={styles.detail}>오랜만에 데이트</div>
            <div className={`${styles.middle} ${styles.item}`}>
                <div>{DETAIL_SCHEDULE[0].timeStampS}</div>
                <div>{DETAIL_SCHEDULE[0].timeStampE}</div>
            </div>
            <div className={styles.item}>장소</div>
            <div className={styles.item}>인원</div>
            <div className={styles.line}></div>
            <div className={styles.item}>좋아요</div>
        </section>
    );
}