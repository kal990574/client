import styles from './ColorModal.module.css';
import { BiX } from 'react-icons/bi';
import {COLOR_LIST} from '../../../common/dummy';

export default function ColorModal({close}) {
    return (
        <>
            <div className={styles.layer} onClick={close}></div>
            <div className={styles.modal}>
                <BiX className={styles.icon} onClick={close} />
                <div className={styles.colorListContainer}>
                    <div className={styles.colorListItem}>
                        <div className={styles.color} style={{background: '#D9D9D9'}}></div>
                        <div className={styles.colorName}>
                            색상 선택
                        </div>
                    </div>

                    {
                        COLOR_LIST.map((item, index) => {
                            return (
                                <div key={index} className={styles.colorListItem}>
                                    <div className={styles.color} style={{background: item.color}}></div>
                                    <div className={styles.colorName}>
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    );
}
