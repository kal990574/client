import React, {useState} from 'react';
import styles from './NavigationBottom.module.css';
import {BiHome, BiSearch, BiGroup, BiUserCircle} from "react-icons/bi";
import { useRouter } from 'next/router'
import {IoAddCircle} from "react-icons/io5";
import {signIn} from "next-auth/react";
import {FiBook, FiCalendar} from 'react-icons/fi';

export default function NavigationBottom() {
    const router = useRouter();

    const onClickIcon = (e) => {
        const token = localStorage.getItem('token');
        router.replace('/'+e.currentTarget.id);

        // if(token) {
        //     router.replace('/'+e.currentTarget.id);
        // } else {
        //     signIn("kakao")
        // }
    }

    return (
        <section className={styles.container}>
            <BiHome id={'home'} className={styles.icon} onClick={onClickIcon} />
            <BiSearch id={'search'} className={styles.icon} onClick={onClickIcon} />
            <IoAddCircle
                onClick={() => {
                    router.replace('/addCalendar');
                }}
                id={'add'}
                className={styles.icon}
            />
            <BiGroup id={'group'} className={styles.icon} onClick={onClickIcon} />
            <BiUserCircle id={'mypage'} onClick={onClickIcon} className={styles.icon} />
        </section>
    );
}
// 캘린더 피드 일정추가 다이어리 메모
