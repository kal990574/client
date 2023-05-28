import React from 'react';
import styles from './NavigationTop.module.css';
import { BiBell, BiUserCircle, BiMenu } from "react-icons/bi";
import ViewSelector from "../../view-selector/ViewSelector";
import {signIn} from "next-auth/react";
import {useRouter} from "next/router";
import {AiFillSetting} from 'react-icons/ai';

export default function NavigationTop({open, setOpen, viewType, setViewType}) {
    const router = useRouter();
    const path = router.pathname;

    return (
        <section className={styles.container}>
            <div style={{visibility: 'hidden'}}>
                <AiFillSetting className={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
                {
                    path === '/' ? <ViewSelector open={open} setOpen={setOpen} viewType={viewType} setViewType={setViewType} /> : <></>
                }
                <BiBell onClick={() => router.push('/alarm')} className={styles.icon} />
            </div>
        </section>
    );
}
