import React, {useState} from 'react';
import NavigationTop from "../../components/calendar/nav-top/NavigationTop";
import NavigationBottom from "../../components/calendar/nav-bottom/NavigationBottom";
import CustomHead from "../../components/head/CustomHead";
import styles from './Calendar.module.css';
import FriendsCircleList from "../../components/calendar/friends-circle-list/FriendsCircleList";

export default function Calendar() {
    const [open, setOpen] = useState(false);
    const onClickView = (event) => {
        if(open) {
            setOpen(false);
        }
    }

    return(
        <main className={styles.container} onClick={onClickView}>
            <CustomHead title={'Calendar'} content={'CalendarPage'}/>
            <NavigationTop open={open} setOpen={setOpen}/>
            <FriendsCircleList />
            <NavigationBottom />
            calendar page
        </main>
    );
}
