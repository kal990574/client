import styles from './DetailScheduleModal.module.css';
import '../../calendar/configs';
import DetailScheduleCard from "../../card/detail-schedule-card/DetailScheduleCard";
import RoundButton from "../../button/round-button/RoundButton";
import {useRouter} from "next/router";
import {useState} from "react";
import {DATE, DETAIL_SCHEDULE} from "~/common/dummy";
import {isSameDate} from "~/components/view/month-view/MonthView";

/**
 * @returns {JSX.Element}
 * @constructor
 */


export default function DetailScheduleModal({schedules, dateString, setOpenModal, setDay}) {
    const date = new Date(Date.parse(dateString));
    const data = schedules.filter((d) => {
        if(isSameDate(d.startDate, date) || isSameDate(d.endDate, date)) {
            return d;
        } else if(d.startDate.getFullYear() <= date.getFullYear()
            && d.startDate.getMonth() <= date.getMonth()
            && d.startDate.getDate() <= date.getDate()
            && d.endDate.getFullYear() >= date.getFullYear()
            && d.endDate.getMonth() >= date.getMonth()
            && d.endDate.getDate() >= date.getDate()
        ) {
            return d;
        }
    });

    const [detailSchedule, setDetailSchedule] = useState(data);
    const router = useRouter();

    return (
        <>
        {/*  modal layer  */}
        <section id={'outContainer'} className={styles.container} onClick={(e) => {
            if(e.currentTarget.id === 'outContainer') {
                setOpenModal((prev) => false);
                setDay((prev) => null);
            }
        }}></section>
            {/* modal */}
            <div className={styles.modalContainer}>
                <h1 className={styles.date}>{date.getMonth()+1+'월 '+date.getDate()+'일 '+DATE[date.getDay()]}</h1>
                {
                    detailSchedule.map((item, index) => {
                        return <DetailScheduleCard key={index} props={item}>{item.title}</DetailScheduleCard>
                    })
                }
            </div>
            <div className={styles.addButtonContainer}>
                <RoundButton onClickEvent={(e) => {
                    router.push(`/addCalendar?date=${date.valueOf()}`);
                }}/>
            </div>
        </>
    )
}
