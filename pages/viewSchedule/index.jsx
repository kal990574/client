import React from 'react';
import NavigationTop from "../../components/nav-top-viewSchedule/NavigationTop";
import ViewDetailSchedule from "../../components/view-detail-schedule/ViewDetailSchedule";
import NavigationBottom from "../../components/nav-bottom-viewSchedule/NavigationBottom";
import styles from './ViewSchedule.module.css'
import {useRouter} from "next/router";
import {DETAIL_SCHEDULE} from "../../common/dummy";

export default function ViewSchedule() {
    console.log("view schedule");

    const router = useRouter();
    const data = DETAIL_SCHEDULE[router.query.id];

    return(
        <main className={styles.container}>
            <NavigationTop />
            <ViewDetailSchedule data={data} />
            <NavigationBottom />
        </main>
    );
}
