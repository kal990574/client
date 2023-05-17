import styles from './MyNavigation.module.css';
import { BiX } from 'react-icons/bi';
import {useRouter} from "next/router";

export default function MyNavigation() {
    const router = useRouter();
    const TITLE = router.pathname.includes('edit') ? '프로필 편집' :'마이페이지';
    const mypage = () => {
        return (
            <div className={styles.container}>
                <BiX className={styles.icon} onClick={() => router.back()} />
                <h1 className={styles.title}>{TITLE}</h1>
                <BiX className={styles.icon} style={{visibility: 'hidden'}} />
            </div>
        )
    }

    const edit = () => {
        return (
            <div className={styles.container}>
                <span className={styles.icon} onClick={() => router.back()}>취소</span>
                <h1 className={styles.title}>{TITLE}</h1>
                <span className={styles.icon} onClick={() => router.back()}>완료</span>
            </div>
        )
    }

    if(router.pathname.includes('edit')) {
        return edit();
    } else {
        return mypage();
    }
}
