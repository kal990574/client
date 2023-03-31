import styles from './DetailScheduleModal.module.css';
import '../../calendar/configs';
import DATE from "../../calendar/configs";

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

            </div>
        </section>
    )
}
