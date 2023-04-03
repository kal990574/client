import styles from './SearchModal.module.css';
import { BiX, BiSearch } from 'react-icons/bi';
import {FRIENDS_LIST} from "../../../common/dummy";

export default function SearchModal({close}) {
    return (
        <>
            <div className={styles.layer} onClick={close} />
            <div className={styles.modal}>
                <BiX onClick={close} className={styles.closeIcon} />
                <div className={styles.searchContainer}>
                    <input placeholder={'일정에 추가할 친구를 검색'} className={styles.searchInput} />
                    <BiSearch className={styles.searchIcon} />
                </div>
                <ul className={styles.friendsList}>
                    {
                        FRIENDS_LIST.map((user, index) => {
                            if(index > 0) {
                                return  <li className={styles.friendsItem} key={index}>{user.title} @{user.id}</li>
                            }
                        })
                    }
                </ul>
            </div>
        </>
    );
}
