import React, {useEffect, useState} from 'react';
import styles from './FriendsCircleList.module.css';
import FriendsCircleItem from "./FriendsCircleItem";
import {FRIENDS_LIST} from "../../common/dummy";
import {useSession} from "next-auth/react";
import {api} from "~/utils/api";

export default function FriendsCircleList({setCurrentUser}) {
    const [selected, setSelected] = useState(0);
    const { data: sessionData, status } = useSession();
    const [friendList, setFriendList] = useState([]);

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.listContainer}>
                    <ul>
                        {
                            FRIENDS_LIST.map((item, index) => {
                                return <FriendsCircleItem
                                    setCurrentUser={setCurrentUser}
                                    index={index}
                                    setSelected={setSelected}
                                    key={index}
                                    selected={index === selected}
                                    title={item.title}
                                    src={item.src}
                                />
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
