import styles from './AddGroupSchedule.module.css';
import {useRouter} from "next/router";
import {BiTime, BiX} from "react-icons/bi";
import {IoCheckmarkSharp} from "react-icons/io5";
import {SCOPE_DISCLOSURE} from "../../../../common/dummy";

export default function AddGroupSchedule() {
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
                            <div className={styles.scheduleDateContainer}>
                                <span>기간</span>
                                <BiTime className={styles.icon} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
