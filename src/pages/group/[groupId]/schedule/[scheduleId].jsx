import styles from './GroupSchedule.module.css';
import {IoIosArrowBack} from "react-icons/all";
import {GROUP_SCHEDULE_DUMMY} from "../../detail/[id]";

export default function GroupSchedule () {
    const data = GROUP_SCHEDULE_DUMMY[0];
    console.log(data);

    return (
        <main className={styles.container}>
            <div
                className={styles.top}
            >
                <IoIosArrowBack className={styles.icon} />
                <IoIosArrowBack style={{ visibility: 'hidden'}} className={styles.icon} />
            </div>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <h2>{data.title}</h2>
                    {
                        data.timeType === 'part'
                            ? <div className={styles.part}>
                                <div>{data.timeStampS}</div>
                                <div>{data.timeStampE}</div>
                            </div>
                            : <div className={styles.full}>
                                <div>{data}</div>
                            </div>
                    }
                </div>
            </div>
        </main>
    );
}
