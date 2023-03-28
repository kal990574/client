import React, {useEffect, useState} from 'react';
import NavigationTop from "../../components/nav-top/NavigationTop";
import NavigationBottom from "../../components/nav-bottom/NavigationBottom";
import CustomHead from "../../components/head/CustomHead";
import styles from './Calendar.module.css';
import FriendsCircleList from "../../components/friends-circle-list/FriendsCircleList";
import MonthView from "../../components/view/month-view/MonthView";
import WeekView from "../../components/view/week-view/WeekView";
import DayView from "../../components/view/day-view/DayView";

// function RenderingViewType({viewType}) {
//     if(viewType === 0) {
//         return <MonthView />
//     } else if(viewType === 1) {
//         return <WeekView />
//     } else {
//         return <DayView />
//     }
// }

export default function Calendar() {
    return (
        <div>calendar</div>
    );
    // const [open, setOpen] = useState(false);
    // const [viewType, setViewType] = useState(0);
    //
    // useEffect(() => {
    //
    // }, [viewType]);
    //
    // const onClickView = (event) => {
    //     if(open) {
    //         setOpen(false);
    //     }
    // }
    //
    // return(
    //     <main className={styles.container} onClick={onClickView}>
    //         <CustomHead title={'Calendar'} content={'CalendarPage'}/>
    //         <NavigationTop open={open} setOpen={setOpen} viewType={viewType} setViewType={setViewType} />
    //         <FriendsCircleList />
    //         <RenderingViewType viewType={viewType} />
    //         <NavigationBottom />
    //     </main>
    // );
}
