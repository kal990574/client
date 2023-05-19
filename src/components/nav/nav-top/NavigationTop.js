import React from 'react';
import styles from './NavigationTop.module.css';
import { BiBell, BiUserCircle, BiMenu } from "react-icons/bi";
import ViewSelector from "../../view-selector/ViewSelector";
import {signIn} from "next-auth/react";

export default function NavigationTop({open, setOpen, viewType, setViewType}) {
    return (
        <section className={styles.container}>
            <div>
                <BiMenu className={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
                <ViewSelector open={open} setOpen={setOpen} viewType={viewType} setViewType={setViewType} />
                <BiBell class={styles.icon} />
                <BiUserCircle onClick={() => signIn("kakao")} class={styles.icon} />
            </div>
        </section>
    );
}
