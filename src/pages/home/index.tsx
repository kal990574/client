import React, {useEffect, useState} from 'react';
import NavigationTop from "../../components/nav/nav-top/NavigationTop";
import NavigationBottom from "../../components/nav/nav-bottom/NavigationBottom";
import CustomHead from "../../components/head/CustomHead";
import styles from './Home.module.css'
import FriendsCircleList from "../../components/friends-circle-list/FriendsCircleList";
import DateSelector from "../../components/date-selector/DateSelector";
import Calendar from "../../components/calendar/Calendar";
import {api} from "../../utils/api";
import {useSession} from "next-auth/react";

export default function Home() {
    const { data: sessionData } = useSession();
    const schedules = api.schedule.getSchedules.useQuery(undefined, { enabled: sessionData?.user !== undefined });

    useEffect(() => {
        console.log(schedules.data);
    }, [schedules]);

    const [open, setOpen] = useState(false);
    const [viewType, setViewType] = useState(0);

    const onClickView = (event) => {
        if(open) {
            setOpen(false);
        }
    }

    return(
        <main className={styles.container} onClick={onClickView}>
            <CustomHead title={'Calendar'} content={'CalendarPage'}/>
            <NavigationTop open={open} setOpen={setOpen} viewType={viewType} setViewType={setViewType} />
            <FriendsCircleList />
            <Calendar viewType={viewType} />
            <NavigationBottom />
        </main>
    );
}
