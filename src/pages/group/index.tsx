import React, {useState} from 'react';
import CustomHead from "../../components/head/CustomHead";
import NavigationTop from "../../components/nav/nav-top/NavigationTop";
import NavigationBottom from "../../components/nav/nav-bottom/NavigationBottom";
import styles from './Group.module.css';
import {BsFillPlusCircleFill} from 'react-icons/bs'
import GroupCard from "../../components/group/group-card/GroupCard";
import {useRouter} from "next/router";
import {api} from "~/utils/api";

export default function GroupPage() {
    const router = useRouter();

    const myGroupInfos = api.user.getMyGroupInfos.useQuery(undefined);

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
                            myGroupInfos.data?.map((d, index) => {
                                return <GroupCard
                                    key={d.id}
                                    groupId={d.id}
                                    content={d.summary}
                                    groupName={d.name}
                                    memberList={d.participants}
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
