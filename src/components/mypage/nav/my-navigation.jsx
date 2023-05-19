import styles from './MyNavigation.module.css';
import { BiX } from 'react-icons/bi';
import {useRouter} from "next/router";

export default function MyNavigation({title, success}) {
    const router = useRouter();

    const mypage = () => {
        return (
            <div className={styles.container}>
                <BiX className={styles.icon} onClick={() => router.back()} />
                <h1 className={styles.title}>{title}</h1>
                <BiX className={styles.icon} style={{visibility: 'hidden'}} />
            </div>
        )
    }

    const editOrAdd = () => {
        return (
            <div className={styles.container}>
                <span className={styles.icon} onClick={() => router.back()}>취소</span>
                <h1 className={styles.title}>{title}</h1>
                <span className={styles.icon} onClick={success}>완료</span>
            </div>
        )
    }

    if(router.pathname.includes('edit') || router.pathname.includes('add')) {
        return editOrAdd();
    } else if(router.pathname === '/mypage'){
        return mypage();
    } else {
        return <></>
    }
}
