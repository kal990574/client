import React from 'react';
import styles from './FriendsCircleList.module.css';
import FriendsCircleItem from "./FriendsCircleItem";
import FRIENDS_LIST from "../../common/dummy";

export default function FriendsCircleList() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.listContainer}>
                    <ul>
                        {
                            FRIENDS_LIST.map((item, index) => {
                                return <FriendsCircleItem key={index} selected={index === 0} title={item.title} src={item.src} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
