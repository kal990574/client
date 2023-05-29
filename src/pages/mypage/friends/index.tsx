import styles from './Friends.module.css';
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useState} from "react";
import UserListItem from "../../../components/mypage/user-list-item/user-list-item";
import {NextPage} from "next";

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
];

const FriendsPage: NextPage = () => {
    return (
        <main className={styles.container}>
            <MyNavigation title={'이재현'} />
            <div className={styles.contentContainer}>
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

export default FriendsPage;