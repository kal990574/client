import React from 'react';
import styles from './MonthView.module.css';
import {addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek} from "date-fns";

export default function MonthView({viewContent, currentDate, selectedDate, onDateClick}) {
    const monthStart = startOfMonth(currentDate.getMonth());
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    let key = -1;
    let rowKey = -1;

    while(day <= endDate) {
        rowKey++;
        for(let i = 0;  i < 7 ; i++) {
            key++;
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div className={styles.days} key={key}>
                    <span>{formattedDate}</span>
                </div>,
            );
            day = addDays(day, 1);
        }
        rows.push(
            <div className={styles.week} key={rowKey}>{days}</div>,
        );
        days = [];
    }

    return <div className={styles.container}>{rows}</div>
}
