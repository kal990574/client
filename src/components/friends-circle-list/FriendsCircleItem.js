import React from 'react';
import styles from './FriendsCircleItem.module.css';
import Image from "next/image";

export default function FriendsCircleItem({index, selected, title, src, setSelected}) {
    return (
        <li className={styles.container}>
            <button onClick={() => setSelected((prev) => index)}>
                <div className={selected ? styles.selectedProfileImgBox : styles.profileImgBox}>
                    <div className={styles.profileImgInnerBox}>
                        <Image width={56}
                        height={56} className={styles.profileImg} src={src}/>
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
