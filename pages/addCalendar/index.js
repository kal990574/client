import styles from './AddCalendar.module.css';
import { BiX, BiTime, BiPlusCircle } from 'react-icons/bi';

export default function AddCalendar() {
    return (
        <main className={styles.container}>
            <div className={styles.topNav}>
                {/* top navigation */}
                <BiX className={styles.icon} />
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
                <div>
                    {/* color */}
                    <div>색상</div>
                    <div></div>
                </div>
                <div>
                    {/* date */}
                    <div>
                        <div>기간</div>
                        <BiTime />
                        <div>toggle</div>
                    </div>
                    <div>
                        <div>
                            <div>
                                start date
                            </div>
                            <div>
                                start time
                            </div>
                        </div>
                        <div>
                            <div>
                                end date
                            </div>
                            <div>
                                end time
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* place */}
                    <div>장소</div>
                    <div className={styles.lineInputContainer} style={{height: '26px'}}>
                        <input className={styles.lineInput} style={{fontSize: '16px'}} />
                    </div>
                </div>
                <div>
                    {/* add friends */}
                    <div>
                        일정을 함께할 친구를 추가
                    </div>
                    <BiPlusCircle />
                </div>
            </div>
        </main>
    )
}
