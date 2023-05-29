import styles from './UserListItem.module.css';
import Image from "next/image";
import {useState} from "react";
import {api} from "~/utils/api";

export default function UserListItem({userId, follow}: {userId: string, follow: boolean}) {
    const userInfoQuery = api.user.getUserInfo.useQuery({id: userId});

    const [state, setState] = useState(follow);
    const onClickFollow = () => {
        setState((prev) => !prev);
    }

    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <Image className={styles.profile} width={60} height={60} alt={'user image'} src={'/img.png'} />
            </div>
            <div className={styles.profileContentContainer}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <span className={styles.name}>
                    {userInfoQuery.data?.name}
                </span>
                    <span className={styles.introduce}>
                    {userInfoQuery.data?.name}
                </span>
                </div>

                <button onClick={onClickFollow} className={ !state ? styles.followButton : styles.followingButton}>
                    {
                        state ? '신청 취소' : '친구 신청'
                    }
                </button>
            </div>
        </div>
    );
}
