import React, {useState} from 'react';
import styles from './Search.module.css';
import {IoIosArrowBack} from "react-icons/io";
import {TiDelete} from "react-icons/ti";
import {BiSearch} from "react-icons/bi";
import {useRouter} from "next/router";
import UserListItem from "../../components/mypage/user-list-item/user-list-item";

export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [currentTab, setCurrentTab] = useState(false);
    const searchDummyUser = [
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
        {name: '연지', follow: false, intro: 'hello'},
    ];

    const searchDummyCalendar = [
    ];

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const CalendarResult = () => {
        if(searchDummyCalendar.length > 0) {
            return (
                <div className={styles.searchResultBox}>
                    {
                        searchDummyCalendar.map((m, index) => {
                            return (
                                <div key={index}>
                                    w
                                </div>
                            );
                        })
                    }
                </div>
            );

        } else {
            return (
                <div className={styles.zeroResult}>
                    잂치하는 검색 결과가 없습니다.
                </div>
            );
        }
    }

    const UserResult = () => {
        if(searchDummyUser.length > 0) {
            return (
                <div className={styles.searchResultBox}>
                    {
                        searchDummyUser.map((m, index) => {
                            return (
                                <UserListItem introduce={m.intro} name={m.name} key={index} follow={m.follow} />
                            );
                        })
                    }
                </div>
            );
        } else {
            return (
                <div className={styles.zeroResult}>
                    잂치하는 검색 결과가 없습니다.
                </div>
            );
        }
    }

    return (
        <main className={styles.container}>
            <div className={styles.searchContainer}>
                <IoIosArrowBack className={styles.icon} onClick={() => router.back()} />
                <div className={styles.searchInputContainer}>
                    <BiSearch className={`${styles.icon} ${styles.searchIcon}`} />
                    <input
                        value={search}
                        onChange={onChangeSearch}
                        placeholder={'검색'}
                        type={'text'}
                        className={styles.searchInput}
                    />
                    <TiDelete
                        onClick={() => {
                            setSearch('');
                        }}
                        className={styles.deleteIcon}
                        style={ search.length <= 0 ? {visibility: 'hidden'} : {}}
                    />
                </div>
            </div>
            <div className={styles.searchResultContainer}>
                <div className={styles.tabContainer}>
                    <span onClick={() => setCurrentTab((prev) => false)} className={styles.tab} style={!currentTab ? {color: 'red'} : {}}>
                        계정
                    </span>
                    <span onClick={() => setCurrentTab((prev) => true)} className={styles.tab} style={currentTab ? {color: 'red'} : {}}>
                        일정
                    </span>
                </div>
                {
                    currentTab ? <CalendarResult /> : <UserResult />
                }
            </div>
        </main>
    );
}
