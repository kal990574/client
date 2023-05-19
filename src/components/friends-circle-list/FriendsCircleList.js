import React, {useState} from 'react';
import styles from './FriendsCircleList.module.css';
import FriendsCircleItem from "./FriendsCircleItem";
import {FRIENDS_LIST} from "../../common/dummy";

export default function FriendsCircleList() {
    const [selected, setSelected] = useState(0);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.listContainer}>
                    <ul>
                        {
                            FRIENDS_LIST.map((item, index) => {
                                return <FriendsCircleItem index={index} setSelected={setSelected} key={index} selected={index === selected} title={item.title} src={item.src} />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
