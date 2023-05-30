import styles from './GroupSchedule.module.css';
import {IoIosArrowBack} from "react-icons/io";
import {GROUP_SCHEDULE_DUMMY} from "../../detail/[id]";
import {useRouter} from "next/router";

export default function GroupSchedule () {
    const router = useRouter();

    const data = GROUP_SCHEDULE_DUMMY[router.query.scheduleId];
    console.log(data);
    return (
        <main className={styles.container}>
            <div
                className={styles.top}
            >
                <IoIosArrowBack className={styles.icon} onClick={() => {
                    router.back();
                }} />
                <IoIosArrowBack style={{ visibility: 'hidden'}} className={styles.icon} />
            </div>
            <div className={styles.main}>
                <div className={styles.mainContent}>
                    <h2 style={{color: '#80ffc3'}}>{data.title}</h2>
                    {
                        data.timeType === 'part'
                            ? <div className={styles.part}>
                                <div>{data.timeStampS}</div>
                                <div>{data.timeStampE}</div>
                            </div>
                            : <div className={styles.full}>
                                <div>data</div>
                            </div>
                    }
                </div>
                <div className={styles.subContent}>

                </div>
            </div>
        </main>
    );
}
