import React, {useEffect, useState} from 'react';
import MonthView from "../view/month-view/MonthView";
import WeekView from "../view/week-view/WeekView";
import DayView from "../view/day-view/DayView";
import DateSelector from "../date-selector/DateSelector";
import Days from "./days/Days";
import DetailScheduleModal from "../modal/detail-schedule-modal/DetailScheduleModal";
import {useSession} from "next-auth/react";
import DetailDiaryModal from "~/components/modal/detail-diray-modal/DetailDirayModal";

export default function Calendar({
                                     viewType, setOpenMonthPicker
}) {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [viewContent, setViewContent] = useState(true); // ture: calendar, false: diary
    const [day, setDay] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedMonth, setSelectedMonth] = useState(new Date());
    const { data: sessionData } = useSession();

    useEffect(() => {
        setCurrentDate((prev) => selectedMonth);
    }, [selectedMonth])

    // useEffect(() => {
    //     console.log(viewContent)
    // }, [viewContent])

    useEffect(() => {
        if(day !== null) {
            setOpenModal((prev) => true);
        } else {
            setOpenModal((prev) => false);
        }
    },[day]);

    const render = [
        <DateSelector key={'datePicker'}
                      setOpenMonthPicker={setOpenMonthPicker}
                      viewContent={viewContent}
                      setViewContent={setViewContent}
                      selectedDate={selectedMonth}
                      setSelectedDate={setSelectedMonth} />,
    <>{ viewType === 0 || viewType === 1 ? <Days /> : <></> }</>];

    if(viewType === 0) {
        render.push(<MonthView key={'monthView'} stateDay={day} setDay={setDay} viewContent={viewContent} currentDate={currentDate} />);
    } else if(viewType === 1) {
        render.push(<WeekView key={'weekView'}  viewContent={viewContent} />);
    } else {
        render.push(<DayView key={'dayView'} viewContent={viewContent} />);
    }


    openModal && render.push(
            viewContent
                ? render.push(<DetailScheduleModal dateString={day} setOpenModal={setOpenModal} setDay={setDay} />)
                : render.push(
                    <DetailDiaryModal
                        dateString={day}
                        setOpenModal={setOpenModal}
                    />
                )
    )

    return <>{render}</>;
}
