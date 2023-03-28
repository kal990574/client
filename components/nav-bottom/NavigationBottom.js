import React from 'react';
import styles from './NavigationBottom.module.css';
import { BiCalendar, BiNews, BiBookBookmark } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi2";
import { useRouter } from 'next/router'

export default function NavigationBottom() {
    const router = useRouter();

    const onClickIcon = (e) => {
        router.push(e.currentTarget.id);
    }

    return (
        <section className={styles.container}>
                <BiCalendar id={'calendar'} class={styles.icon} onClick={onClickIcon} />
                <BiNews id={'feed'} class={styles.icon} onClick={onClickIcon} />
                <BiBookBookmark id={'diary'} class={styles.icon} onClick={onClickIcon} />
                <HiOutlineDocumentText id={'memo'} class={styles.icon} onClick={onClickIcon} />
        </section>
    );
}
// 캘린더 피드 일정추가 다이어리 메모
