import styles from './DetailScheduleCard.module.css';
import {useRouter} from "next/router";


// props
// {id, title, color, timeType, timeStampS, timeStampE, place}
export default function DetailScheduleCard({props}) {
    const router = useRouter();
    const onClick = (e) => {
        router.push(`/viewSchedule?id=${props.id}`);
    }
    let time = [];

    if(props.timeType === 'full') {
        time.push(<span className={styles.time}>종일</span>)
    } else {
        time.push(<span className={styles.time}>{props.timeStampS} ~ {props.timeStampE}</span>
        )
    }
    return (
        <div className={styles.container} onClick={onClick}>
            <div style={{background: props.color}} className={styles.color}>
            </div>
            <div>
                <h3 className={styles.title}>{props.title}</h3>
                {time}
            </div>
        </div>
    );
}
