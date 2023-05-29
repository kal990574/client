import React, {useEffect, useState} from 'react';
import styles from './FriendsCircleList.module.css';
import FriendsCircleItem from "./FriendsCircleItem";
import {FRIENDS_LIST} from "../../common/dummy";
import {useSession} from "next-auth/react";
import {api} from "~/utils/api";
import {FriendRelationship, User} from "@prisma/client";

export default function FriendsCircleList({ data }: {data: (User & {friends: FriendRelationship[]}) | undefined}) {
    const [selected, setSelected] = useState<string>();

    if (!data)
        return null;

    return (
        <div className={styles.outerContainer}>
            <div className={styles.innerContainer}>
                <div className={styles.listContainer}>
                    <ul>
                        <FriendsCircleItem user_id={data.id} setSelected={setSelected} selected={data.id === selected} />
                    </ul>
                    <ul>
                        {
                            data.friends.map((friendInfo, index) => (
                                <FriendsCircleItem user_id={friendInfo.userOtherId} selected={friendInfo.userOtherId === selected} setSelected={setSelected} key={index} />
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
