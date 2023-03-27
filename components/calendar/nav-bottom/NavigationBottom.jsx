import React from 'react';
import styles from './NavigationBottom.module.css';
import { BiCalendar, BiNews, BiBookBookmark } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi2";

export default function NavigationBottom() {
    return (
        <section className={styles.container}>
                <BiCalendar class={styles.icon} />
                <BiNews class={styles.icon} />
                <BiBookBookmark class={styles.icon} />
                <HiOutlineDocumentText class={styles.icon} />
        </section>
    );
}
// 캘린더 피드 일정추가 다이어리 메모
