import React, {useState} from 'react';
import styles from './Calendar.module.css';
import MonthView from "../view/month-view/MonthView";
import WeekView from "../view/week-view/WeekView";
import DayView from "../view/day-view/DayView";
import DateSelector from "../date-selector/DateSelector";
import Days from "./days/Days";

export default function Calendar({viewType}) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewContent, setViewContent] = useState(true); // ture: calendar, false: diary

    return (
        <>
            <DateSelector viewContent={viewContent} setViewContent={setViewContent} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
            { viewType === 0 || viewType === 1 ? <Days /> : <></> }
            {
                viewType === 0 ? <MonthView viewContent={viewContent} />
                    : viewType === 1 ? <WeekView viewContent={viewContent} />
                    : <DayView viewContent={viewContent} />
            }

        </>
    )
}
