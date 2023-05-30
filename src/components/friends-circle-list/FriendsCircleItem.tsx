import React from 'react';
import styles from './FriendsCircleItem.module.css';
import Image from "next/image";
import {api} from "~/utils/api";

export default function FriendsCircleItem({user_id, selected, setSelected}: { user_id: string, selected: boolean, setSelected: any }) {
    const userInfoQuery = api.user.getUserInfo.useQuery({id: user_id});

    if (!userInfoQuery.data)
        return null;

    return (
        <li className={styles.container}>
            <button onClick={() => setSelected(user_id)}>
                <div className={selected ? styles.selectedProfileImgBox : styles.profileImgBox}>
                    <div className={styles.profileImgInnerBox}>
                        <Image width={56}
                               alt={'user profile image'}
                               height={56}
                               className={styles.profileImg}
                               src={"/img.png"}/>
                    </div>
                    {/*<span className={styles.profileImgContainer}>*/}
                    {/*</span>*/}
                </div>
                <div>
                    <div>
                        {userInfoQuery.data?.name}
                    </div>
                </div>
            </button>
        </li>
    );
}
