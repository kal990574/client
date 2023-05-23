import React, {useState} from 'react';
import styles from './Search.module.css';
import {IoIosArrowBack} from "react-icons/all";
import {BiSearch} from "react-icons/bi";
import {useRouter} from "next/router";


export default function Search() {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const [currentTab, setCurrentTab] = useState(false);
    const searchDummyUser = [
        {name: '연지', follow: false, intro: 'hello'}
    ];

    const searchDummyCalendar = [
    ];

    const onChangeSearch = (e) => {
        setSearch((prev) =>  e.target.value);
    }

    const SearchBar = () => {
        return (
            <div className={styles.searchContainer}>
                <IoIosArrowBack className={styles.icon} onClick={() => router.back()} />
                <div className={styles.searchInputContainer}>
                    <BiSearch className={`${styles.icon} ${styles.searchIcon}`} />
                    <input
                        onChange={onChangeSearch}
                        placeholder={'검색'}
                        type={'text'}
                        className={styles.searchInput}
                    />
                </div>
            </div>
        )
    }

    const CalendarResult = () => {
        if(searchDummyCalendar.length > 0) {
            searchDummyCalendar.map((m, index) => {
                return (
                    <div>

                    </div>
                );
            });
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
            searchDummyUser.map((m, index) => {
                return (
                    <div>

                    </div>
                );
            });
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
            <SearchBar />
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
