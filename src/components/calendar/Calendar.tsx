import React, {useEffect, useState} from 'react';
import MonthView from "../view/month-view/MonthView";
import WeekView from "../view/week-view/WeekView";
import DayView from "../view/day-view/DayView";
import DateSelector from "../date-selector/DateSelector";
import Days from "./days/Days";
import DetailScheduleModal from "../modal/detail-schedule-modal/DetailScheduleModal";
import {useSession} from "next-auth/react";
import DetailDiaryModal from "~/components/modal/detail-diray-modal/DetailDirayModal";

export default function Calendar({diary, schedules, viewType, setOpenMonthPicker }: {viewType: number, setOpenMonthPicker: any}) {
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

    return (
        <>
            <DateSelector key={'datePicker'}
                          setOpenMonthPicker={setOpenMonthPicker}
                          viewContent={viewContent}
                          setViewContent={setViewContent}
                          selectedDate={selectedMonth}
                          setSelectedDate={setSelectedMonth} />
            { viewType === 0 || viewType === 1 ? <Days /> : <></> }

            { /* Calendar Area */ }
            {
                (viewType == 0) && (
                    <MonthView diary={diary} schedules={schedules} key={'monthView'} stateDay={day} setDay={setDay} viewContent={viewContent} currentDate={currentDate} />
                )
            }
            {
                (viewType == 1) && (
                    <WeekView key={'weekView'}  viewContent={viewContent} />
                )
            }
            {
                (viewType == 2) && (
                    <DayView key={'dayView'} viewContent={viewContent} />
                )
            }

            {
                (openModal && viewContent) && (
                    <DetailScheduleModal
                        schedules={schedules.data}
                        dateString={day}
                        setOpenModal={setOpenModal}
                        setDay={setDay} />
                )
            }

            {
                (openModal && !viewContent) && (
                    <DetailDiaryModal dateString={day} setOpenModal={setOpenModal} />
                )
            }
        </>
    )
}
