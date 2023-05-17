import React from 'react';
import styles from './NavigationTop.module.css';
import { BiBell, BiUserCircle, BiMenu } from "react-icons/bi";
import ViewSelector from "../../view-selector/ViewSelector";

export default function NavigationTop({open, setOpen, viewType, setViewType}) {
    return (
        <section className={styles.container}>
            <div>
                <BiMenu className={styles.icon} />
            </div>
            <div className={styles.iconContainer}>
                {
                    viewType !== undefined && <ViewSelector open={open} setOpen={setOpen} viewType={viewType} setViewType={setViewType} />
                }
                <BiBell className={styles.icon} />
                <BiUserCircle className={styles.icon} />
            </div>
        </section>
    );
}
