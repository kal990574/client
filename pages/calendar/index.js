import React from 'react';
import { BiBell } from "react-icons/bi";
import NavigationTop from "../../components/calendar/nav-top/NavigationTop";
import CustomHead from "../../components/head/CustomHead";

export default function Calendar() {
    return(
        <div>
            <CustomHead title={'Calendar'} content={'CalendarPage'}/>
            <NavigationTop />
            calendar page
        </div>
    );
}
