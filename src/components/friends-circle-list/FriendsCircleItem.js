import React from 'react';
import styles from './FriendsCircleItem.module.css';
import Image from "next/image";

export default function FriendsCircleItem({selected, title, src}) {
    return (
        <li className={styles.container}>
            <button>
                <div className={selected ? styles.selectedProfileImgBox : styles.profileImgBox}>
                    <div className={styles.profileImgInnerBox}>
                        <Image className={styles.profileImg} src={src}/>
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
