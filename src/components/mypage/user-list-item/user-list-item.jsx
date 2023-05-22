import styles from './UserListItem.module.css';
import Image from "next/image";

export default function UserListItem({name, introduce}) {
    return (
        <div className={styles.container}>
            <div className={styles.profileContainer}>
                <Image className={styles.profile} width={60} height={60} alt={'user image'} src={'/img.png'} />
            </div>
            <div className={styles.profileContentContainer}>
                <span className={styles.name}>
                    {name}
                </span>
                <span className={styles.introduce}>
                    {introduce}
                </span>
            </div>
        </div>
    );
}
