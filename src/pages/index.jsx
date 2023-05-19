import React from 'react';
import styles from '../styles/Main.module.css';
import {useRouter} from "next/router";

export default function Main({session}) {
    console.log("Main session: ", session);
    const router = useRouter();
    const onClickKakao = async () => {
        const res = await fetch('http://localhost:3000/api/auth/callback/kakao').then((response) => {
            console.log(response);
            router.replace(response.url)
        }).catch((err) => {
           console.log(err);
        });

        console.log(res);
    }

    return(
        <main className={styles.container}>
            <h1 className={styles.logo}>CALENDARY</h1>
            <img onClick={onClickKakao} className={styles.kakao} src={'/kakao_login.png'} />
        </main>
    );
}

