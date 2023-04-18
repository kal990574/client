import styles from './AddCalendar.module.css';
import { BiX, BiTime, BiPlusCircle } from 'react-icons/bi';
import {useRouter} from "next/router";
import {useState} from "react";
import ColorModal from "../../components/modal/color-modal/ColorModal";
import SearchModal from "../../components/modal/search-modal/SearchModal";
import ColorPaletteModal from "../../components/modal/color-palette-modal/ColorPaletteModal";

// date:
export default function AddCalendar() {
    const router = useRouter();
    const date = new Date(Number(router.query.date));
    const [time, setTime] = useState(false);
    const [openColor, setOpenColor] = useState(false);
    const [openFriends, setOpenFriends] = useState(false);

    const openColorModal = (e) => {
        setOpenColor((prev) =>  !prev);
    };

    const openSearchFriendsModal = (e) => {
        setOpenFriends((prev) => !prev);
    };

    return (
        <main className={styles.container}>
            {
                openColor ? <ColorModal close={openColorModal} /> : <></>
            }
            {
                openFriends ? <SearchModal close={openSearchFriendsModal} /> : <></>
            }
            <div className={styles.topNav}>
                {/* top navigation */}
                <BiX className={styles.icon24} onClick={(e) => {router.back()}} />
                <div className={styles.text16}>저장</div>
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
                    <div onClick={openColorModal} className={styles.colorContainer} style={{background: '#FFA6A6'}}></div>
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
                            ? <div>
                                {date.getFullYear()+"년 "+(date.getMonth()+1)+"월 "+date.getDate()+"일     종일"}
                            </div>
                            : <div className={styles.dateContainer}>
                                <div className={styles.dateLine}>
                                    <div>
                                        start date
                                    </div>
                                    <div>
                                        start time
                                    </div>
                                </div>
                                <div className={styles.dateLine}>
                                    <div>
                                        end date
                                    </div>
                                    <div>
                                        end time
                                    </div>
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
                    <div className={styles.addFriends}>
                        일정을 함께할 친구를 추가
                    </div>
                    <BiPlusCircle className={styles.icon24} onClick={openSearchFriendsModal} />
                </div>
            </div>
        </main>
    )
}
