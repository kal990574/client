import styles from './GroupCard.module.css';
import { BiX } from 'react-icons/bi';
import {CgMathPlus} from "react-icons/cg";
import {useRouter} from "next/router";
import {GroupParticipant} from "@prisma/client";

export default function GroupCard(
    {groupId, primaryColor, FontColor, InviteColor, groupName, memberList, content}:
        {groupId: string, content: string, groupName: string, memberList: (GroupParticipant & {participant: {id: string, name: string | null}})[]}) {
    const color = primaryColor ? primaryColor : '#FDE4F7';
    const fontColor = FontColor ? FontColor : '#FE4545';
    const inviteColor = InviteColor ? InviteColor :'#FA9B9B';
    const INVITE = 'invite';
    const router = useRouter();

    return (
        <div
            onClick={(e) => {
                if(e.target.tagName !== 'BUTTON') {
                    router.replace('group/detail/'+groupId);
                }
            }}
            className={styles.groupCardContainer} style={{background: color}}>
            <div className={styles.titleContainer}>
                <h1 style={{color: fontColor}}>{
                    groupName
                }</h1>
               {/*<BiX className={styles.icon} />*/}
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentDiv}>
                    <span>
                        {content}
                    </span>
                </div>
                <div className={styles.inviteDiv}>
                    <button
                        onClick={(e) => {
                            router.push('/group/add/member/'+groupId);
                        }}
                        style={{background: inviteColor, color: 'rgba(0, 0, 0, 0.5)',}}>
                        {INVITE}
                    </button>
                    <CgMathPlus className={styles.iconPlus} />
                </div>
            </div>
            <div className={styles.memberContainer}>
                <div
                    style={{width: '30px', color: fontColor, fontWeight: 700, marginRight: '10px',}}>
                    멤버
                </div>
                <div className={styles.memberList}>
                    {memberList.map((m, index) => {
                        return <span key={index}>{m.participant.name}</span>
                    })}
                </div>
            </div>
        </div>
    );
}
