import React from 'react';
import styles from './NavigationTop.module.css';
import { BiBell, BiUserCircle, BiMenu } from "react-icons/bi";
import ViewSelector from "../../view-selector/ViewSelector";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";

export default function NavigationTop({open, setOpen, viewType, setViewType}) {
    const router = useRouter();
    const path = router.pathname;
    console.log(path)

    const goMyPage = () => {
        const token = localStorage.getItem('token');
        if(token) {
            router.push('/mypage');
        } else {
            signIn("kakao")
        }
    }

    return (
        <section className={styles.container}>
            <div>
                <BiMenu className={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
                {
                    path === '/' ? <ViewSelector open={open} setOpen={setOpen} viewType={viewType} setViewType={setViewType} /> : <></>
                }
                <BiBell class={styles.icon} />
                <BiUserCircle onClick={goMyPage} class={styles.icon} />
            </div>
        </section>
    );
}
