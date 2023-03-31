import styles from './DetailScheduleCard.module.css';


// props
// {id, title, color, timeType, timeStampS, timeStampE}
export default function DetailScheduleCard({props}) {
    let time = [];

    if(props.timeType === 'full') {
        time.push(<span className={styles.time}>종일</span>)
    } else {
        time.push(<span className={styles.time}>{props.timeStampS} ~ {props.timeStampE}</span>
        )
    }
    return (
        <div className={styles.container}>
            <div style={{background: props.color}} className={styles.color}>
            </div>
            <div>
                <h3 className={styles.title}>{props.title}</h3>
                {time}
            </div>
        </div>
    );
}
