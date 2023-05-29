import React, {useState} from 'react';
import CustomHead from "../../components/head/CustomHead";
import NavigationTop from "../../components/nav/nav-top/NavigationTop";
import NavigationBottom from "../../components/nav/nav-bottom/NavigationBottom";
import styles from './Group.module.css';
import {BsFillPlusCircleFill} from 'react-icons/bs'
import GroupCard from "../../components/group/group-card/GroupCard";
import {useRouter} from "next/router";
import {GROUP_DUMMY} from "../../common/dummy";

export default function Group() {
    const router = useRouter();

    const addGroup = () => {
        router.push('/group/add');
    }

    return (
        <main className={styles.pageContainer}>
            <CustomHead title={'Group'} content={'GroupPage'}/>
            {/*<NavigationTop />*/}
            <section className={styles.sectionContainer}>
                <div className={styles.titleContainer}>
                    <h1>MY Group</h1>
                    <BsFillPlusCircleFill onClick={addGroup} className={styles.icon} />
                </div>
                <div className={styles.groupListContainer}>
                    <div className={styles.groupListInnerContainer}>
                        {
                            GROUP_DUMMY.map((d, index) => {
                                return <GroupCard
                                    groupId={d.groupId}
                                    key={d.groupId}
                                    content={d.content}
                                    groupName={d.groupName}
                                    FontColor={d.FontColor}
                                    InviteColor={d.InviteColor}
                                    memberList={d.memberList}
                                    primaryColor={d.primaryColor}
                                />
                            })
                        }
                    </div>
                </div>
            </section>
            <NavigationBottom />
        </main>
    );
}
