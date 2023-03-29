import React, {useState} from 'react';
import styles from './Calendar.module.css';
import MonthView from "../view/month-view/MonthView";
import WeekView from "../view/week-view/WeekView";
import DayView from "../view/day-view/DayView";
import DateSelector from "../date-selector/DateSelector";
import Days from "./days/Days";
import DetailScheduleModal from "../modal/detail-schedule-modal/DetailScheduleModal";

export default function Calendar({viewType}) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [viewContent, setViewContent] = useState(true); // ture: calendar, false: diary
    const [open, setOpen] = useState();

    // eslint-disable-next-line react/jsx-key
    const render = [<DateSelector viewContent={viewContent} setViewContent={setViewContent} selectedDate={selectedDate} setSelectedDate={setSelectedDate} />,
    <>{ viewType === 0 || viewType === 1 ? <Days /> : <></> }</>];

    if(viewType === 0) {
        render.push(<MonthView viewContent={viewContent} currentDate={currentDate} />);
    } else if(viewType === 1) {
        render.push(<WeekView viewContent={viewContent} />);
    } else {
        render.push(<DayView viewContent={viewContent} />);
    }

    render.push(<DetailScheduleModal />);

    return <>{render}</>;
}
