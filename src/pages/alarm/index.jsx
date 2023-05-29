import styles from './Alarm.module.css';
import { IoIosArrowBack } from "react-icons/io";
import styled from 'styled-components';

const AlarmCard = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export default function Alarm() {
    const today = new Date();

    let dummy = [
        {date: '2023-05-29', img: '', message: '민서님이 팔로우하였습니다.'},
        {date: '2023-05-29', img: '', message: '수진님이 팔로우하였습니다.'},
        {date: '2023-05-28', img: '', message: '승현님이 팔로우하였습니다.'},
        {date: '2023-05-27', img: '', message: '지수님이 팔로우하였습니다.'},
    ]

    dummy.forEach((d, index) => {
       dummy[index].date = new Date(d.date);
    });

    const todayList = dummy.filter((d) => {
        return d.date.getFullYear() === today.getFullYear()
            && d.date.getMonth() === today.getMonth()
            && d.date.getDate() === today.getDate();
    });

    dummy.sort(function(a,b) {
        return new Date(b.date) - new Date(a.date);
    });

    dummy = dummy.filter((d) => {
        return d.date.getFullYear() !== today.getFullYear()
            || d.date.getMonth() !== today.getMonth()
            || d.date.getDate() !== today.getDate();
    });

    todayList.sort();

    // dummy 일자 기준 정렬
    // dummy.sort()

    const render = [];

    let currentDate = today;
    const rendering = {};


    for(let i = 0 ; i < dummy.length ; i++) {
        if( dummy[i].date.getFullYear() !== currentDate.getFullYear()
            || dummy[i].date.getMonth() !== currentDate.getMonth()
            || dummy[i].date.getDate() !== currentDate.getDate()) {
            currentDate = dummy[i].date;
            rendering[currentDate] = [];
        }
        rendering[currentDate].push(dummy[i].message);
    }

    return (
        <main className={styles.container}>
            <div className={styles.topNav}>
                <IoIosArrowBack className={styles.icon} />
                <h2>알림</h2>
                <IoIosArrowBack className={styles.icon} style={{visibility: 'hidden'}} />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.todayContainer}>
                    <h3>오늘</h3>
                    <div className={styles.alarmList}>
                        {
                            todayList.map((d, index) => {
                                return <AlarmCard key={'today'+index}>
                                    {d.message}
                                </AlarmCard>
                            })
                        }
                    </div>
                </div>
                {
                    Object.keys(rendering).map((key,index) => {
                        const date = new Date(key);
                        const result = [];
                        rendering[key].forEach((d, index) => {
                            result.push(<AlarmCard key={'day'+key+index}>
                                {d}
                            </AlarmCard>);
                        });

                        return <div className={styles.dayContainer} key={index}>
                            <h3>{date.getFullYear()+'년 '+(date.getMonth()+1)+'월 '+date.getDate()+'일'}</h3>
                            <div className={styles.alarmList}>
                                {result}
                            </div>
                        </div>;
                    })
                }
            </div>
        </main>
    )
}
