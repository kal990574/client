import styles from './AddGroupSchedule.module.css';
import {useRouter} from "next/router";
import {BiTime, BiX} from "react-icons/bi";
import {IoCalendarNumber, IoCheckmarkSharp} from "react-icons/io5";
import {SCOPE_DISCLOSURE} from "../../../../common/dummy";
import DatePicker from "react-datepicker";
import {useState} from "react";
import { TimePicker } from 'react-ios-time-picker';
import styled from "styled-components";
import 'react-datepicker/dist/react-datepicker.css'


export default function AddGroupSchedule() {
    const GROUP_SCEHDULE_DUMMY = {
        id: '',
        title: '',
        summary: '',
        categoryName: '',
        category: '',
        startDate: '',
        endDate: '',
        startTime: '',
        endTime: '',
        location: '',
        groupId: '',
        group: '',
    }

    const CustomDatePicker = styled(DatePicker)`
        font-size: 18px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      border: none;
      margin-bottom: 10px;
      &:focus {
        outline: none;
      }`

    const CustomTimePicker = styled(TimePicker)`
      font-size: 18px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
      outline: none;
      border: none;
      &:focus {
        outline: none;
      }`

    const router = useRouter();
    const data = {
            groupId: 0,
            primaryColor: '#FDE4F7',
            FontColor: '#FE4545',
            InviteColor: '#FA9B9B',
            groupName: '사이버보안 캡스톤디자인 스터디',
            memberList: ['손진혁', '이재현', '장연지'],
            content: '사이버보안 캡스톤디자인 스터디입니다.'
        };

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const [sTime, setsTime] = useState('10:00');
    const [eTime, seteTime] = useState('11:00');

    const [type, setType] = useState(false);

    const onChangeS = (timeValue) => {
        setsTime(timeValue);
    }

    const onChangeE = (timeValue) => {
        seteTime(timeValue);
    }

    return (
        <main className={styles.container}>
            <div className={styles.top}>
                <BiX className={styles.icon} onClick={() => router.back() } />
                <IoCheckmarkSharp onClick={() => {
                    alert('일정 등록');
                }} className={styles.icon} />
            </div>

            <div className={styles.content}>
                <div className={styles.groupContent}>
                    <h3>{data.groupName}</h3>
                </div>

                <div className={styles.inputContainer}>
                    <div className={styles.mainInputContainer}>
                        <input className={styles.inputStyle} type={'text'} placeholder={'제목 추가 (required)'}/>
                        <input className={styles.inputStyle} type={'text'} placeholder={'내용 추가 (optional)'}/>
                    </div>

                    <div className={styles.scheduleInputContainer}>

                        <div className={styles.scheduleDateContainer}>
                            <div className={styles.dateDivNav}>
                                <span>기간</span>
                                {
                                   type ? <IoCalendarNumber className={styles.icon} onClick={() => setType( prev => false)} /> : <BiTime className={styles.icon} onClick={() => setType( prev => true)} />
                                }
                            </div>

                            <div className={styles.dateDiv}>
                                <div>
                                    <CustomDatePicker
                                        dateFormat={"yyyy. MM. dd"}
                                        selected={startDate}
                                        onChange={date => {
                                            if(endDate.getFullYear() >= date.getFullYear()
                                                && endDate.getMonth() >= date.getMonth()
                                                && endDate.getDate() >= date.getDate()
                                            ) {
                                                setStartDate(date)
                                            }
                                        }}
                                    />
                                    { type && <CustomTimePicker onChange={onChangeS} value={sTime} cellHeight={40} /> }
                                </div>
                                <div>
                                    <CustomDatePicker
                                        dateFormat={"yyyy. MM. dd"}
                                        selected={endDate}
                                        onChange={date => {
                                            if(startDate.getFullYear() >= date.getFullYear()
                                                && startDate.getMonth() >= date.getMonth()
                                                && startDate.getDate() >= date.getDate()
                                            ) {
                                                setEndDate(date)
                                            }
                                        }}
                                    />
                                    { type && <CustomTimePicker onChange={onChangeE} value={eTime} cellHeight={40} />}
                                </div>
                            </div>
                            <div className={styles.locationBox}>
                                <span>장소</span>
                                <input type={'text'} placeholder={'장소를 입력해주세요. (required)'} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}
