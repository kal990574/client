import React, {useEffect, useState} from 'react';
import NavigationTop from "../../components/calendar/nav-top/NavigationTop";
import NavigationBottom from "../../components/calendar/nav-bottom/NavigationBottom";
import CustomHead from "../../components/head/CustomHead";
import styles from './Home.module.css'
import FriendsCircleList from "../../components/calendar/friends-circle-list/FriendsCircleList";
import MonthView from "../../components/view/month-view/MonthView";
import WeekView from "../../components/view/week-view/WeekView";
import DayView from "../../components/view/day-view/DayView";
import DateSelector from "../../components/date-selector/DateSelector";

function RenderingViewType({viewType}) {
    if(viewType === 0) {
        return <MonthView />
    } else if(viewType === 1) {
        return <WeekView />
    } else {
        return <DayView />
    }
}

export default function Home() {
    const [open, setOpen] = useState(false);
    const [viewType, setViewType] = useState(0);
    const [viewContent, setViewContent] = useState(true); // ture: calendar, false: diary

    const currentDate = new Date();

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
            <DateSelector viewContent={viewContent} setViewContent={setViewContent} currentDate={currentDate} />
            <RenderingViewType viewType={viewType} />
            {viewContent ? "claendar" : 'diary'}

            <NavigationBottom />
        </main>
    );
}
