import React, {useEffect} from 'react';
import styles from '../styles/Main.module.css';
import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";

export default function Main() {
    const router = useRouter();
    const { data: sessionData, status } = useSession();

    if(status === 'authenticated') {
        if(sessionData.user.name === null) {
            router.push('/mypage/edit')
        } else {
            router.push('/home');
        }
    }

    return(
        <main className={styles.container}>
            <h1 className={styles.logo}>CALENDARY</h1>
            <div className={styles.kakaoContainer}>
                <img onClick={() => signIn('kakao')} className={styles.kakao} src={'/kakao_login.png'} />
            </div>
        </main>
    );
}

