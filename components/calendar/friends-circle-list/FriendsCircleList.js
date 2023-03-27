import React from 'react';
import styles from './FriendsCircleList.module.css';
import FriendsCircleItem from "./FriendsCircleItem";
import FRIENDS_LIST from "../../../common/dummy";

export default function FriendsCircleList() {
    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.listContainer}>
                    <ul>
                        {
                            FRIENDS_LIST.map((item, index) => {
                                return <FriendsCircleItem title={item.title} selected={index === 0} src={item.src} key={index} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
