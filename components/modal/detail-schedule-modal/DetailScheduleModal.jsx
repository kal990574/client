import styles from './DetailScheduleModal.module.css';
import '../../calendar/configs';
import DATE from "../../calendar/configs";
import {DETAIL_SCHEDULE} from "../../../common/dummy";
import DetailScheduleCard from "../../card/detail-schedule-card/DetailScheduleCard";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function DetailScheduleModal({dateString, setOpenModal}) {
    const date = new Date(Date.parse(dateString));

    return (
        <section className={styles.container} onClick={(e) => console.log(e.currentTarget)}>
            <div className={styles.modalContainer} onClick={(e) => console.log(e.currentTarget)}>
                <h1 className={styles.date}>{date.getMonth()+1+'월 '+date.getDate()+'일 '+DATE[date.getDay()]}</h1>
                {
                    DETAIL_SCHEDULE.map((item) => {
                        return <DetailScheduleCard props={item}>{item.title}</DetailScheduleCard>
                    })
                }
            </div>
        </section>
    )
}
