import React from 'react';
import styles from './MonthView.module.css';
import {addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek} from "date-fns";

export default function MonthView({viewContent, currentDate, selectedDate, onDateClick}) {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const today = new Date();

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
            if(today.getFullYear() === day.getFullYear() && today.getMonth() === day.getMonth() && today.getDate() === day.getDate() ) {
                days.push(
                    <div className={`${styles.days} ${styles.today}`} key={key}>
                        <span className={i === 0 ? styles.sun : i === 6 ? styles.sat : styles.date}>{formattedDate}</span>
                    </div>,
                );
            } else {
                days.push(
                    <div className={styles.days} key={key}>
                        <span className={i === 0 ? styles.sun : i === 6 ? styles.sat : styles.date}>{formattedDate}</span>
                    </div>,
                );
            }

            day = addDays(day, 1);
        }
        rows.push(
            <div className={styles.week} key={rowKey}>{days}</div>,
        );
        days = [];
    }

    return <div className={styles.container}>{rows}</div>
}
