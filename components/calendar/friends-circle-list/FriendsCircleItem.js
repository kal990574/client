import React from 'react';
import styles from './FriendsCircleItem.module.css';

export default function FriendsCircleItem({selected, key, title, src}) {
    return (
        <li className={styles.container} key={key}>
            <button>
                <div className={selected ? styles.selectedProfileImgBox : styles.profileImgBox}>
                    <div className={styles.profileImgInnerBox}>
                        <img className={styles.profileImg} src={src}/>
                    </div>
                    {/*<span className={styles.profileImgContainer}>*/}
                    {/*</span>*/}
                </div>
                <div>
                    <div>
                        {title}
                    </div>
                </div>
            </button>
        </li>
    );
}
