import styles from './MyNavigation.module.css';
import { BiX } from 'react-icons/bi';
import {useRouter} from "next/router";

export default function MyNavigation() {
    const router = useRouter();

    const TITLE = '마이페이지';
    return (
        <div className={styles.container}>
            <BiX className={styles.icon} onClick={() => router.back()} />
            <h1 className={styles.title}>{TITLE}</h1>
            <BiX className={styles.icon} style={{visibility: 'hidden'}} />
        </div>
    )
}
