import React from 'react';
import styles from '../styles/Main.module.css';
import {signIn} from "next-auth/react";

export default function Main({session}) {

    return(
        <main className={styles.container}>
            <h1 className={styles.logo}>CALENDARY</h1>
            <div className={styles.kakaoContainer}>
                <img onClick={() => signIn('kakao')} className={styles.kakao} src={'/kakao_login.png'} />
            </div>
        </main>
    );
}

