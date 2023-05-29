import styles from './AddCalendar.module.css';
import { BiX, BiTime, BiPlusCircle } from 'react-icons/bi';
import {useRouter} from "next/router";
import {useRef, useState} from "react";
import ColorModal from "../../components/modal/color-modal/ColorModal";
import SearchModal from "../../components/modal/search-modal/SearchModal";
import {useSession} from "next-auth/react";
import {api} from "~/utils/api";
import {NextPage} from "next";
import {SCOPE_DISCLOSURE} from '~/common/dummy';
import ScopeModal from "../../components/modal/scope-modal/ScopeModal";
import { TimePicker } from 'react-ios-time-picker';
import DatePicker from "react-datepicker";

// <div>
//     <TimePicker onChange={onChange} value={value} />
// </div>

// date:
const AddCalendarPage: NextPage = () => {
    const router = useRouter();

    const [sTime, setsTime] = useState('10:00');
    const [eTime, seteTime] = useState('11:00');

    const onChangeS = (timeValue) => {
        setsTime(timeValue);
    }

    const onChangeE = (timeValue) => {
        seteTime(timeValue);
    }

    const { data: sessionData } = useSession();
    const createScheduleMutation  = api.schedule.createSchedule.useMutation();

    const date = router.query.date ?  new Date(Number(router.query.date)) : new Date();
    const [time, setTime] = useState(false);
    const [openColor, setOpenColor] = useState(false);
    const [openFriends, setOpenFriends] = useState(false);

    const [scope, setScope] = useState(0);
    const [openScope, setOpenScope] = useState(false);
    const [memberList, setMemberList] = useState([]);

    const [startDate, setStartDate] = useState(new Date(Number(router.query.date)));
    const [endDate, setEndDate] = useState(new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate() + 1));


    const [category, setCategory] = useState({
        color: '#5c61ff'
    });

    const openScopeModal = () => {
        setOpenScope((prev) => !prev);
    }

    const openColorModal = () => {
        setOpenColor((prev) =>  !prev);
    };

    const openSearchFriendsModal = () => {
        setOpenFriends((prev) => !prev);
    };

    return (
        <main className={styles.container}>
            {
                openColor ? <ColorModal close={openColorModal} setCategory={setCategory} /> : <></>
            }
            {
                openFriends ? <SearchModal memberList={memberList} setMemberList={setMemberList} close={openSearchFriendsModal} /> : <></>
            }
            {
                openScope ? <ScopeModal scope={scope} close={openScopeModal} setScope={setScope} /> : <></>
            }
            <div className={styles.topNav}>
                {/* top navigation */}
                <BiX className={styles.icon24} onClick={(e) => {router.back()}} />
                <div className={styles.text16} onClick={() => {
                    createScheduleMutation.mutate({
                        title: "testTitle",
                        summary: "test Summary",
                        startDate: new Date(),
                        endDate: new Date(),
                    }, {
                        onSuccess: () => router.push("/")
                    })
                }}>저장</div>
            </div>
            <div className={styles.formContainer}>
                {/* input */}
                <div className={styles.lineInputContainer}>
                    {/* title */}
                    <input className={styles.lineInput} placeholder={"제목 추가( 필수 입력 )"}/>
                </div>
                <div className={styles.lineInputContainer}>
                    {/* content */}
                    <input className={styles.lineInput} placeholder={"내용 추가"} />
                </div>
                <div className={`${styles.innerContainer} ${styles.flexible}`}>
                    {/* color */}
                    <div onClick={openColorModal}>색상</div>
                    <div onClick={openColorModal} className={styles.colorContainer} style={{background: category.color}}></div>
                </div>
                <div className={`${styles.innerContainer} ${styles.flexible}`}>
                    <div>공개범위</div>
                    <div className={styles.scope} onClick={openScopeModal}>
                        { SCOPE_DISCLOSURE[scope].title }
                    </div>
                </div>
                <div className={`${styles.innerContainer}`}>
                    {/* date */}
                    <div className={`${styles.flexible}`}>
                        <div className={styles.text16}>기간</div>
                        <BiTime className={styles.icon} />
                        <div className={!time ? styles.toggleOnContainer : styles.toggleOffContainer} onClick={() => {setTime(prev => !prev)}}>
                            <div className={!time ? styles.toggleOn : styles.toggleOff}></div>
                        </div>
                    </div>
                    {
                        !time
                            ? <div style={{marginTop: '20px'}}>
                                <div>
                                    <DatePicker
                                        className={styles.dateSpan}
                                        dateFormat={"yyyy년 MM월 dd일"}
일                                       selected={startDate}
                                        onChange={date => setStartDate(date)}
                                    />
                                </div>

                            </div>
                            : <div className={styles.dateContainer}>
                                <div className={styles.dateBox}>
                                    <DatePicker
                                        className={styles.dateSpan}
                                        dateFormat={"yyyy년 MM월 dd일"}
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
                                    <DatePicker
                                        className={styles.dateSpan}
                                        dateFormat={"yyyy년 MM월 dd일"}
                                        selected={endDate}
                                        onChange={date => {
                                            if(startDate.getFullYear() <= date.getFullYear()
                                                && startDate.getMonth() <= date.getMonth()
                                                && startDate.getDate() <= date.getDate()
                                            ) {
                                                setStartDate(date)
                                            }}
                                        }
                                    />
                                </div>
                            <div className={styles.timeBox}>
                                <TimePicker style={{width: '50%'}} onChange={onChangeS} value={sTime} cellHeight={40} />
                                <TimePicker style={{width: '50%'}} onChange={onChangeE} value={eTime} cellHeight={40} />
                            </div>
                            </div>
                    }
                </div>
                <div className={styles.innerContainer}>
                    {/* place */}
                    <div>장소</div>
                    <div className={styles.lineInputContainer} style={{height: '20px', margin: '6px 0', width: '100%'}}>
                        <input className={styles.lineInput} style={{fontSize: '16px'}} />
                    </div>
                </div>
                <div className={styles.innerContainer}>
                    {/* add friends */}
                    <div className={styles.addFriends} onClick={openSearchFriendsModal}>
                        일정을 함께할 친구를 추가
                    </div>
                    <div className={styles.addFriendList}>
                        {
                            memberList.map((d) => {
                                return <div>
                                    {d}
                                </div>
                            })
                        }
                        <BiPlusCircle className={styles.icon24} onClick={openSearchFriendsModal} />
                    </div>
                </div>
            </div>
        </main>
    )
};
export default AddCalendarPage;
