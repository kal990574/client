import React, {useState} from 'react';
import CustomHead from "../../components/head/CustomHead";
import NavigationTop from "../../components/nav/nav-top/NavigationTop";
import NavigationBottom from "../../components/nav/nav-bottom/NavigationBottom";
import styles from './Group.module.css';
import {BsFillPlusCircleFill} from 'react-icons/bs'
import GroupCard from "../../components/group/group-card/GroupCard";
import {useRouter} from "next/router";

const dummy = [
    {
        primaryColor: '#FDE4F7',
        FontColor: '#FE4545',
        InviteColor: '#FA9B9B',
        groupName: '사이버보안 캡스톤디자인 스터디',
        memberList: ['손진혁', '이재현', '장연지'],
        content: '사이버보안 캡스톤디자인 스터디입니다.'
    },
    {
        primaryColor: '#FFFDCF',
        FontColor: '#FEB445',
        InviteColor: '#FAE59B',
        groupName: '해머',
        memberList: ['손진혁', '이재현', '장연지', '한창민'],
        content: '사이버보안학과 해머'
    },
]

export default function Group() {
    const router = useRouter();

    const addGroup = () => {
        router.push('/group/add');
    }

    return (
        <main className={styles.pageContainer}>
            <CustomHead title={'Group'} content={'GroupPage'}/>
            <NavigationTop />
            <section className={styles.sectionContainer}>
                <div className={styles.titleContainer}>
                    <h1>MY Group</h1>
                    <BsFillPlusCircleFill onClick={addGroup} className={styles.icon} />
                </div>
                <div className={styles.groupListContainer}>
                    <div className={styles.groupListInnerContainer}>
                        {
                            dummy.map((d, index) => {
                                return <GroupCard key={index} content={d.content} groupName={d.groupName} FontColor={d.FontColor} InviteColor={d.InviteColor} memberList={d.memberList} primaryColor={d.primaryColor} />
                            })
                        }
                    </div>
                </div>
            </section>
            <NavigationBottom />
        </main>
    );
}
