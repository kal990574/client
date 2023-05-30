import React from 'react';
import styles from '../styles/Main.module.css';
import {signIn, useSession} from "next-auth/react";
import {GetServerSideProps} from "next";
import {getServerAuthSession} from "~/server/auth";

export default function Main() {
    return(
        <main className={styles.container}>
            <h1 className={styles.logo}>CALENDARY</h1>
            <div className={styles.kakaoContainer}>
                <img onClick={() => signIn('kakao')} className={styles.kakao} src={'/kakao_login.png'} />
            </div>
        </main>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getServerAuthSession(context);

    if (session) {
        return {
            redirect: {
                destination: "/home"
            },
            props: {}
        }
    }

    return {
        props: {}
    }
}
