import React, {useEffect} from 'react';
import styles from './MonthView.module.css';
import {addDays, endOfMonth, endOfWeek, format, startOfMonth, startOfWeek} from "date-fns";
import DetailScheduleModal from "../../modal/detail-schedule-modal/DetailScheduleModal";
import {CALENDAR_SCHEDULE_DUMMY, DIARY_DUMMY} from "~/common/dummy";
import styled from 'styled-components';
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {api} from "~/utils/api";

const DaysScheduleS = styled.div`
  margin-left: 1px;
  width: calc(100% - 1px);
  height: 19px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  color: white;
  font-weight: 800;
  font-size: 14px;
  overflow: hidden;
  padding-top: 1px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
`;

const DaysScheduleM = styled.div`
  width: 100%;
  height: 19px;
  color: white;
  font-weight: 800;
  font-size: 14px;
  overflow: hidden;
  padding-top: 1px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
`;


const DaysScheduleE = styled.div`
  margin-right: 1px;
  width: calc(100% - 1px);
  height: 19px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  color: white;
  font-weight: 800;
  overflow: hidden;
  font-size: 14px;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
  padding-top: 1px;
`;

const FullTime = styled.div`
    width: 100%;
    height: 23px;
  border-radius: 15px;
  display: flex;
  align-items: center;
    color: white;
    font-weight: 800;
    font-size: 14px;
    overflow: hidden;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
  padding-top: 1px;
`;

const PartTime = styled.div`
  width: calc(100% - 4px);
  border-radius: 15px;
  font-size: 14px;
  font-weight: 800;
  height: 19px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.5);
  padding-top: 1px;
`;

export const isSameDate = (date1: Date, date2: Date) => {
    return date1.getFullYear() === date2.getFullYear()
        && date1.getMonth() === date2.getMonth()
        && date1.getDate() === date2.getDate();
}

export default function MonthView({diary, stateDay, setDay, viewContent, currentDate, selectedDate, onDateClick}) {
    const { data: sessionData, status } = useSession();
    const schedules = api.schedule.getSchedules.useQuery(undefined, { enabled: sessionData?.user !== undefined });

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);
    const today = new Date();
    const router = useRouter();

    const checkDaysSchedule = (standard, start, end) => {
        // 1 start
        // 2 m
        // 3 end
        const year = standard.getYear();
        const yearS = start.getYear();
        const yearE = end.getYear();

        const month = standard.getMonth();
        const monthS = start.getMonth();
        const monthE = end.getMonth();

        const day = standard.getDate();
        const dayS = start.getDate();
        const dayE = end.getDate();


        // start가 standard 보다 이전 날짜이거나 같은날짜 이면서 end가 이후 거나 같은 날짜이면 true
        // start가 standard보다 이후 날짜 이거나 end가 standard보다 이전날짜이면 false
        if(yearS <= year && yearE >= year
            &&  monthS <= month && monthE >= month
            && dayS <= day && dayE >= day
        ) {
            if(year === yearS && month === monthS && day === dayS) {
                return 1;
            } else if(year === yearE && month === monthE && day === dayE) {
                return 3;
            } else {
                return 2;
            }
        } else {
            return -1;
        }

    }


    const CATEGORY = {
        0 : {color: '#f58442'},
        1 : {color: '#725cff'},
        2: {color: '#f2b0ff'},
        3: {color: '#1f48ff'},
    };

    // viewContent === true -> calendar
    // const data = viewContent ? schedules : diary;

    // diary data
    const data = viewContent
        ? schedules.data :
        DIARY_DUMMY.map(d => ({
            ...d, date: new Date(d.date)
        }));

    const onClickEvent = (e) => {
        const temp = e.currentTarget.children[1];
        if(!viewContent && temp !== undefined && temp.tagName === 'IMG') {
            router.push('/diary/'+temp.id);
        } else {
            setDay(e.currentTarget.id);
        }
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
            const result = !viewContent ? data.filter(d =>{
                if(day.getFullYear() === d.date.getFullYear() && day.getMonth() === d.date.getMonth() && day.getDate() === d.date.getDate()) {
                    return d;
                }
            }) : data.filter((d) => {
                const temp = d;
                if(isSameDate(d.startDate, d.endDate) && isSameDate(d.startDate, day) && d.startTime === '') {
                   temp.type = 'full';
                   return temp;
               } else if(isSameDate(d.startDate, d.endDate) && isSameDate(d.startDate, day) && d.startTime !== '') {
                    temp.type = 'part';
                    return temp;
                }
               else if(checkDaysSchedule(day, d.startDate, d.endDate) > 0) {
                   // 기간긴놈
                    temp.type = checkDaysSchedule(day, d.startDate, d.endDate);
                    return temp;
                }
            });
            // console.log(day);
            // console.log(result);
            // console.log("");

            key++;
            formattedDate = format(day, 'd');
            const dayRender = [];

            viewContent && result.forEach((d) => {
                if(d.type === 'full') {
                    dayRender.push(
                        <FullTime
                            style={{
                                background: `${CATEGORY[d.categoryName === null ? 1 : d.categoryName]?.color}`
                            }}
                        >
                            <span
                                style={{
                                    width: 'auto',
                                    overflow: 'hidden',
                                    margin: '0',
                                    textOverflow: 'ellipsis',
                                    lineHeight: 'inherit',
                                    whiteSpace: 'nowrap',
                                    paddingLeft: '1px',
                                    height: '20px',
                                }}
                            >
                               {d.title.slice(0, 5)}
                            </span>
                        </FullTime>
                    );
                } else if( d.type === 'part') {
                    console.log(d);
                    dayRender.push(
                        <PartTime
                            style={{
                                border: `2px solid ${CATEGORY[d.categoryName === null ? 1 : d.categoryName]?.color}`
                            }}
                        >
                            <span
                                style={{
                                    width: 'auto',
                                    overflow: 'hidden',
                                    margin: '0',
                                    textOverflow: 'ellipsis',
                                    lineHeight: 'inherit',
                                    whiteSpace: 'nowrap',
                                    paddingLeft: '1px',
                                    height: '20px',
                                }}
                            >
                                { d.title.slice(0, 5)}
                            </span>
                        </PartTime>
                    );
                } else if( d.type === 1) {
                    dayRender.push(
                        <DaysScheduleS
                            style={{
                                background: `${CATEGORY[d.categoryName === null ? 1 : d.categoryName]?.color}`
                            }}
                        >
                        </DaysScheduleS>
                    );
                } else if( d.type === 2) {
                    dayRender.push(
                        <DaysScheduleM
                            style={{
                                background: `${CATEGORY[d.categoryName === null ? 1 : d.categoryName]?.color}`
                            }}
                        >
                            <span
                                style={{
                                    width: 'auto',
                                    overflow: 'hidden',
                                    margin: '0',
                                    textOverflow: 'ellipsis',
                                    lineHeight: 'inherit',
                                    whiteSpace: 'nowrap',
                                    height: '20px',
                                }}
                            >
                                { d.startDate.getDate() +1 === day.getDate() ? d.title.slice(0, 5) : ''}
                                { d.startDate.getDate() +2 === day.getDate() ? d.title.slice(5,11) : ''}
                                { d.startDate.getDate() +3 === day.getDate() ? d.title.slice(11,) : ''}

                            </span>
                        </DaysScheduleM>
                    );
                } else {
                    // type === 3
                    dayRender.push(
                        <DaysScheduleE
                            style={{
                                background: `${CATEGORY[d.categoryName === null ? 1 : d.categoryName]?.color}`
                            }}
                        />
                    );
                }

            });

            if(day.getMonth() === currentDate.getMonth()) {
                if(today.getFullYear() === day.getFullYear() && today.getMonth() === day.getMonth() && today.getDate() === day.getDate() ) {
                    days.push(
                        <div onClick={onClickEvent} id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} className={`${styles.days} ${styles.today}`} key={key}>
                            <span id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} className={i === 0 ? styles.sun : i === 6 ? styles.sat : styles.date}>
                                {/* current day*/}
                                {formattedDate}
                            </span>
                            {  !viewContent && result.length > 0 ? <img id={result[0].id} className={styles.emojiImg} src={'./emoji/'+result[0].icon+'.png'} alt={'diary icon'} /> : <></> }
                            { viewContent && result.length > 0 ?
                                <div className={styles.dayFlex}>
                                    {dayRender}
                                </div>
                                : <></> }
                        </div>,
                    );
                } else {
                    days.push(
                        <div id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} key={key} onClick={onClickEvent} className={styles.days}>
                            <span id={day.getFullYear()+'-'+(day.getMonth()+1)+'-'+day.getDate()} className={i === 0 ? styles.sun : i === 6 ? styles.sat : styles.date}>
                                {/* not currnet date*/}
                                {formattedDate}
                            </span>
                            { !viewContent && result.length > 0 ?
                                <img id={result[0].id} className={styles.emojiImg} src={'./emoji/'+result[0].icon+'.png'} alt={'diary icon'} />
                                : <></> }
                            { viewContent && result.length > 0 ?
                                <div className={styles.dayFlex}>
                                    {dayRender}
                                </div>
                                : <></> }
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
