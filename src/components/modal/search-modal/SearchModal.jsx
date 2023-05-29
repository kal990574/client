import styles from './SearchModal.module.css';
import { BiX, BiSearch } from 'react-icons/bi';
import {FRIENDS_LIST} from "../../../common/dummy";

export default function SearchModal({close, setMemberList, memberList}) {

    return (
        <>
            <div className={styles.layer} onClick={close} />
            <div className={styles.modal}>
                <BiX onClick={close} className={styles.closeIcon} />
                {/*<div className={styles.searchContainer}>*/}
                {/*    <input placeholder={'일정에 추가할 친구를 검색'} className={styles.searchInput} />*/}
                {/*    <BiSearch className={styles.searchIcon} />*/}
                {/*</div>*/}
                <ul className={styles.friendsList}>
                    {
                        FRIENDS_LIST.map((user, index) => {
                            if(index > 0) {
                                return  <li
                                    style={ memberList.includes(user.id) ? {backgroundColor: '#B1B1B1'} : {backgroundColor: 'white'}}
                                    onClick={() => {
                                        setMemberList((prev) => {
                                            if(prev.includes(user.id)) {
                                                return prev.filter((d) => d !== user.id)
                                            } else {
                                                return [...prev, user.id];
                                            }
                                        })
                                    }}
                                    className={styles.friendsItem} key={index}>{user.title} @{user.id}</li>
                            }
                        })
                    }
                </ul>
            </div>
        </>
    );
}
