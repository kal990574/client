import React from 'react';
import NavigationTop from "../../components/nav-top-viewSchedule/NavigationTop";
import ViewDetailSchedule from "../../components/viewDetailSchedule/ViewDetailSchedule";
import styles from './ViewSchedule.module.css'
export default function ViewSchedule() {
    return(
        <main className={styles.container}>
            <NavigationTop />
            <ViewDetailSchedule/>
        </main>
    );
}