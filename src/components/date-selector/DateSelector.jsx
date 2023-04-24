import React from 'react';
import styles from './DateSelector.module.css';
import { BiCaretDown, BiCalendar, BiBookBookmark } from "react-icons/bi";

export default function DateSelector({viewContent, setViewContent, selectedDate, setSelectedDate}) {
    return (
        <div className={styles.container}>
            <div className={styles.dateSelectBox}>
                <span className={styles.date}>{selectedDate.getFullYear()}년 {selectedDate.getMonth()+1}월</span>
                <BiCaretDown className={styles.icon} />
            </div>

            <div className={styles.typeSelectBox}>
                <div className={viewContent ? styles.selected : styles.notSelected}>
                    <BiCalendar className={styles.icon} onClick={() => {setViewContent((prev) => true)}} />
                </div>
                <div className={!viewContent ? styles.selected : styles.notSelected}>
                    <BiBookBookmark className={styles.icon} onClick={() => {setViewContent((prev) => false)}} />
                </div>
            </div>
        </div>
    )
}
