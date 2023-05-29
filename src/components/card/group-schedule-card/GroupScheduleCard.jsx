import styles from './GroupScheduleCard.module.css';
import {BsCalendarCheckFill} from "react-icons/bs";
import {BiTime} from "react-icons/bi";
import {MdPlace} from "react-icons/md";
import {FaUsers} from "react-icons/fa";
import {DATE} from "../../../common/dummy";
import {useRouter} from "next/router";

export default function GroupScheduleCard({data, lineColor, groupId}) {
    const router = useRouter();

    const date = new Date(data.date);
    console.log(data);
    const GROUP_MEMBER = [
        {memberId: 0, name: '문서영'},
        {memberId: 1, name: '문채원'},
        {memberId: 2, name: '김승희'},
        {memberId: 3, name: '임수진'},
        {memberId: 4, name: '이민서'},
        {memberId: 5, name: '지수빈'},
        {memberId: 6, name: '도은우'},
        {memberId: 7, name: '김아름'},
    ];

    return (
        <div
            onClick={() => {
                router.push(`/group/${groupId}/schedule/${data.scheduleId}`);
            }}
            style={{
                border: `1px solid ${lineColor}`
            }}
            className={styles.container}
        >
            <div className={styles.mainContent}>
                <h2>{data.title}</h2>
                <span>{data.content}</span>
            </div>
            <div className={styles.subContent}>
                <div className={styles.subContentItem}>
                    <BsCalendarCheckFill className={styles.icon} />
                    <span>{date.getFullYear()+'년 '+(date.getMonth()+1)+'월 '+date.getDate()+'일 '+ DATE[date.getDay()]}</span>
                </div>
                    {
                        data.timeType === 'part'
                            ? <div className={styles.subContentItem}>
                                <BiTime className={styles.icon} />
                                <span>{data.timeStampS}</span>
                                <BiTime className={styles.icon} />
                                <span>{data.timeStampE}</span>
                            </div>
                            : <></>
                    }
                    <div className={styles.subContentItem}>
                        <MdPlace className={styles.icon} />
                        <span>{data.place}</span>
                    </div>

                <div className={styles.subContentItem}>
                    <FaUsers className={styles.icon} />
                    <div
                        style={{
                            width: '100%',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                        }}
                    >
                        {data.member.map((m, index) => {
                            return (
                                <span
                                    key={index + GROUP_MEMBER[m].memberId}
                                >
                                    {GROUP_MEMBER[m].name}
                                </span>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
