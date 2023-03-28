import React from 'react';
import styles from './Calendar.module.css';
import MonthView from "../view/month-view/MonthView";
import WeekView from "../view/week-view/WeekView";
import DayView from "../view/day-view/DayView";

export default function Calendar({viewType, viewContent}) {
    if(viewType === 0) {
        return (
            <MonthView viewContent={viewContent} />
        )
    } else if(viewType === 1) {
        return (
            <WeekView viewContent={viewContent} />
        )
    } else {
        return (
            <DayView viewContent={viewContent} />
        )
    }
}
