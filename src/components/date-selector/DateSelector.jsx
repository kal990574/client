import React, {useState} from 'react';
import styles from './DateSelector.module.css';
import { BiCaretDown, BiCalendar, BiBookBookmark } from "react-icons/bi";
import DatePicker from "react-datepicker";
import styled from 'styled-components';
import "react-datepicker/dist/react-datepicker.css";

export default function DateSelector({setOpenMonthPicker, viewContent, setViewContent, selectedDate, setSelectedDate}) {
    const CustomDatePicker = styled(DatePicker)`
        font-size: 24px;
      width: 140px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      border: none;
      &:focus {
        outline: none;
      }
    `

    return (
        <div className={styles.container}>
            <div className={styles.dateSelectBox} >
                <CustomDatePicker
                    showMonthYearPicker
                    dateFormat={"yyyy년 MM월"}
                    selected={selectedDate}
                    onChange={date => setSelectedDate(date)}
                    selectsStart
                />
                {/*<span className={styles.date}>{selectedDate.getFullYear()}년 {selectedDate.getMonth()+1}월</span>*/}
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
