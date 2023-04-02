import styles from './AddCalendar.module.css';
import { BiX } from 'react-icons/bi';

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
                <div>
                    {/* title */}
                    title
                </div>
                <div>
                    {/* content */}
                    content
                </div>
                <div>
                    {/* color */}
                    color
                </div>
                <div>
                    {/* date */}
                    date
                </div>
                <div>
                    {/* place */}
                    place
                </div>
                <div>
                    {/* add friends */}
                    add friends
                </div>
            </div>
        </main>
    )
}
