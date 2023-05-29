import styles from './Alarm.module.css';
import {IoIosArrowBack} from "react-icons/all";

export default function Alarm() {
    const today = new Date();
    const dummy = [
        {date: '2023-05-29', img: '', message: '민서님이 팔로우하였습니다.'},
        {date: '2023-05-29', img: '', message: '수진님이 팔로우하였습니다.'},
        {date: '2023-05-28', img: '', message: '승현님이 팔로우하였습니다.'},
        {date: '2023-05-27', img: '', message: '지수님이 팔로우하였습니다.'},
    ]

    dummy.forEach((d, index) => {
       dummy[index].date = new Date(d.date);
    });

    // dummy 일자 기준 정렬
    // dummy.sort()

    const render = [];


    return (
        <main className={styles.container}>
            <div className={styles.topNav}>
                <IoIosArrowBack className={styles.icon} />
                <h2>알림</h2>
                <IoIosArrowBack className={styles.icon} style={{visibility: 'hidden'}} />
            </div>
            <div className={styles.contentContainer}>
                {render}
            </div>
        </main>
    )
}
