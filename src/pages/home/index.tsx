import React, {useEffect, useState} from 'react';
import NavigationTop from "../../components/nav/nav-top/NavigationTop";
import NavigationBottom from "../../components/nav/nav-bottom/NavigationBottom";
import CustomHead from "../../components/head/CustomHead";
import styles from './Home.module.css'
import FriendsCircleList from "../../components/friends-circle-list/FriendsCircleList";
import Calendar from "../../components/calendar/Calendar";
import {api} from "../../utils/api";
import {useSession} from "next-auth/react";


export default function Home() {
    const { data: sessionData, status } = useSession();
    const [schedules, setSchedule] = useState(api.schedule.getSchedules.useQuery(undefined, { enabled: sessionData?.user !== undefined }));
    const [diary, setDiary] = useState(null);
    // const [selectedMonth, setSelectedMonth] = useState(new Date());
    const [openMonthPicker, setOpenMonthPicker] = useState(false);
    const [currentUser, setCurrentUser] = useState(0);

    useEffect(() => {
        console.log(schedules.data);
        // console.log(currentUser);
    }, [schedules, schedules]);

    useEffect(() => {
        console.log(currentUser);
        // diary, schedule currentUser에 맞는 데이터 받아서 set

    }, [currentUser]);

    const [open, setOpen] = useState(false);
    const [viewType, setViewType] = useState(0);

    const onClickView = () => {
        if(open) {
            setOpen(false);
        }
    }

    return(
        <main className={styles.container} onClick={onClickView}>
            <CustomHead title={'Calendar'} content={'CalendarPage'}/>
            {/*<NavigationTop open={open} setOpen={setOpen} viewType={viewType} setViewType={setViewType} />*/}
            <FriendsCircleList setCurrentUser={setCurrentUser} />
            <Calendar diary={diary} schedules={schedules} setOpenMonthPicker={setOpenMonthPicker} viewType={viewType} />
            <NavigationBottom />
        </main>
    );
}
