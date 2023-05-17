import React from 'react';
import styles from './NavigationBottom.module.css';
import { BiHome, BiNews, BiGroup } from "react-icons/bi";
import { useRouter } from 'next/router'

export default function NavigationBottom() {
    const router = useRouter();

    const onClickIcon = (e) => {
        router.push(e.currentTarget.id);
    }

    return (
        <section className={styles.container}>
            <BiNews id={'feed'} className={styles.icon} onClick={onClickIcon} />
            <BiHome id={'home'} className={styles.icon} onClick={onClickIcon} />
            <BiGroup id={'group'} className={styles.icon} onClick={onClickIcon} />
        </section>
    );
}
// 캘린더 피드 일정추가 다이어리 메모
