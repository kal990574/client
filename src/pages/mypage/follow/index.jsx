import styles from './Follow.module.css';
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useState} from "react";
import UserListItem from "../../../components/mypage/user-list-item/user-list-item";

const dummy = [
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},
    {name: '장연지', introduce: '안녕 난 연지', follow: true},


]

export default function Follow() {
    const follower = 14;
    const following = 22;

    const [currentTab, setCurrentTab] = useState(false);
    const onClickType = (e) => {
        if(e.currentTarget.id === 'follower') {
            setCurrentTab((prev) => false);
        } else {
            setCurrentTab((prev) => true);
        }
    }

    return (
        <main className={styles.container}>
            <MyNavigation title={'이재현'} />
            <div className={styles.contentContainer}>
                <div className={styles.tabContainer}>
                    <div className={styles.tabBlock} id={'follower'} onClick={onClickType}>
                        <div className={styles.tab} style={!currentTab ? {color: 'red', borderBottom: '2px solid red'} :{ color: 'gray', borderBottom: '2px solid gray'
                        } }>
                            {follower} 팔로워
                        </div>
                    </div>
                    <div className={styles.tabBlock} id={'following'} onClick={onClickType}>
                        <div className={styles.tab} style={currentTab ? {color: 'red', borderBottom: '2px solid red'} :{ color: 'gray', borderBottom: '2px solid gray'
                        }}>
                            {following} 팔로잉
                        </div>
                    </div>
                </div>
                <div className={styles.listContainer}>
                    {
                        dummy.map((m, index) => {
                            return (
                                <UserListItem name={m.name} introduce={m.introduce} key={index} />
                            );
                        })
                    }
                </div>
            </div>
        </main>
    );
}
