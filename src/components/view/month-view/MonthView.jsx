import React, {useEffect} from 'react';
import styles from './MonthView.module.css';
import {addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek} from "date-fns";
import DetailScheduleModal from "../../modal/detail-schedule-modal/DetailScheduleModal";
import {DIARY_DUMMY} from "~/common/dummy";

export default function MonthView({stateDay, setDay, viewContent, currentDate, selectedDate, onDateClick}) {
    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const today = new Date();

    // diary data
    const data = DIARY_DUMMY;
    data.forEach((d, index) => {
        data[index].date = new Date(d.date)
    });

    const onClickEvent = (e) => {
        setDay(e.target.id);
    }

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';
    let key = -1;
    let rowKey = -1;

    while(day <= endDate) {

        rowKey++;
        for(let i = 0;  i < 7 ; i++) {
            const result = data.filter(d =>{
                if(day.getFullYear() === d.date.getFullYear() && day.getMonth() === d.date.getMonth() && day.getDate() === d.date.getDate()) {
                    return d;
                }
            });

            key++;
            formattedDate = format(day, 'd');
            if(day.getMonth() === currentDate.getMonth()) {
                if(today.getFullYear() === day.getFullYear() && today.getMonth() === day.getMonth() && today.getDate() === day.getDate() ) {
                    days.push(
                        <div onClick={onClickEvent} id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} className={`${styles.days} ${styles.today}`} key={key}>
                            <span id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} className={i === 0 ? styles.sun : i === 6 ? styles.sat : styles.date}>
                                {/* current day*/}
                                {formattedDate}
                            </span>
                            { result.length > 0 ? <img src={'./emoji/'+result[0].icon+'.png'} alt={'diary icon'} /> : <></> }
                        </div>,
                    );
                } else {
                    days.push(
                        <div id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} key={key} onClick={onClickEvent} className={styles.days}>
                            <span id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} className={i === 0 ? styles.sun : i === 6 ? styles.sat : styles.date}>
                                {/* not currnet date*/}
                                {formattedDate}
                            </span>
                            { result.length > 0 ? <img src={'./emoji/'+result[0].icon+'.png'} alt={'diary icon'} /> : <></> }
                        </div>,
                    );
                }
            } else {
                days.push(
                    <div className={styles.days} key={key}>
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
