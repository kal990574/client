import React from 'react';
import styles from './NavigationTop.module.css';
import { BiBell, BiUserCircle, BiMenu } from "react-icons/bi";
import ViewSelector from "../../view-selector/ViewSelector";

export default function NavigationTop({open, setOpen}) {
    return (
        <section className={styles.container}>
            <div>
                <BiMenu class={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
                <ViewSelector open={open} setOpen={setOpen}/>
                <BiBell class={styles.icon} />
                <BiUserCircle class={styles.icon} />
            </div>
        </section>
    );
}
