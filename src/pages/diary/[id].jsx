import styles from './Diary.module.css';
import {useRouter} from "next/router";
import {IoIosArrowBack} from "react-icons/io";
import {DIARY_DUMMY} from "../../common/dummy";

export default function Diary() {
    const router = useRouter();
    const id = router.query.id;
    const data = DIARY_DUMMY.filter((d) => d.id === Number(id))[0];
    const date = new Date(data.date);

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const textAreaSize = ''

    return (
        <main className={styles.container}>
            <div className={styles.navBox}>
                <IoIosArrowBack className={styles.icon} onClick={() => router.back() } />
                <h2>
                    {months[date.getMonth()] + ' ' + date.getDate()}
                </h2>
                <IoIosArrowBack className={styles.icon} style={{visibility: 'hidden'}} />
            </div>
            <div className={styles.contentBox}>
                <div className={styles.emojiBox}>
                    <img id={data.id} className={styles.emojiImg} src={'/emoji/'+data.icon+'.png'} alt={'diary icon'} />
                </div>
                <div className={styles.diaryBox}>
                    {
                        data.picture.length > 0
                            ? <div className={styles.pictureBox}>
                                <img className={styles.picture} src={data.picture} alt={'diary picture'} />
                            </div>
                            : <></>
                    }
                    <div className={styles.diaryContentBox}>
                        <span className={styles.diaryContent}>
                            {data.content}
                        </span>
                    </div>
                </div>
            </div>
        </main>
    )
}
