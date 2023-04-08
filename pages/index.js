import React, {useState} from 'react';
import styles from '../styles/Home.module.css';
import CustomHead from "../components/head/CustomHead";
import NavigationTop from "../components/nav/nav-top/NavigationTop";
import FriendsCircleList from "../components/friends-circle-list/FriendsCircleList";
import NavigationBottom from "../components/nav/nav-bottom/NavigationBottom";
import Calendar from "../components/calendar/Calendar";

export default function Home() {
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

