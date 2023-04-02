import styles from './DetailScheduleModal.module.css';
import '../../calendar/configs';
import DATE from "../../calendar/configs";
import {DETAIL_SCHEDULE} from "../../../common/dummy";
import DetailScheduleCard from "../../card/detail-schedule-card/DetailScheduleCard";
import RoundButton from "../../button/round-button/RoundButton";

/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function DetailScheduleModal({dateString, setOpenModal, setDay}) {
    const date = new Date(Date.parse(dateString));

    return (
        <>
        {/*  modal layer  */}
        <section id={'outContainer'} className={styles.container} onClick={(e) => {
            console.log(e.currentTarget.id);
            if(e.currentTarget.id === 'outContainer') {
                setOpenModal((prev) => false);
                setDay((prev) => null);
            }
        }}></section>
            {/* modal */}
            <div className={styles.modalContainer}>
                <h1 className={styles.date}>{date.getMonth()+1+'월 '+date.getDate()+'일 '+DATE[date.getDay()]}</h1>
                {
                    DETAIL_SCHEDULE.map((item) => {
                        return <DetailScheduleCard props={item}>{item.title}</DetailScheduleCard>
                    })
                }
            </div>
            <div className={styles.addButtonContainer}>
                <RoundButton />
            </div>
        </>
    )
}
