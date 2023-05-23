import styles from './UserListItem.module.css';
import Image from "next/image";
import {useState} from "react";

export default function UserListItem({name, introduce, follow}) {
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
                    {name}
                </span>
                    <span className={styles.introduce}>
                    {introduce}
                </span>
                </div>

                <button onClick={onClickFollow} className={ !state ? styles.followButton : styles.followingButton}>
                    {
                        state ? '팔로잉' : '팔로우'
                    }
                </button>
            </div>
        </div>
    );
}
