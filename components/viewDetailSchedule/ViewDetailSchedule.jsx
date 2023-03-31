import React from 'react';
import styles from './ViewDetailSchedule.module.css';
import {DETAIL_SCHEDULE} from "../../common/dummy";
export default function NavigationTop({open, setOpen}) {
    return (
        <>
        <div style={{background:`${DETAIL_SCHEDULE[0].color}`}} className={styles.color}></div>
        <div>{DETAIL_SCHEDULE[0].title}</div>
        <div>세부사항</div>
        <div>{DETAIL_SCHEDULE[0].timeStampS} ~ {DETAIL_SCHEDULE[0].timeStampE}</div>
        <div>장소</div>
        <div>인원</div>
        <div>Line</div>
        <div>좋아요</div>
        </>
    );
}