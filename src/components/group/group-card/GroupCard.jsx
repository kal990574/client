import styles from './GroupCard.module.css';
import { BiX } from 'react-icons/bi';
import {CgMathPlus} from "react-icons/cg";

export default function GroupCard({primaryColor, FontColor, InviteColor, groupName, memberList, content}) {
    const color = primaryColor ? primaryColor : '#FDE4F7';
    const fontColor = FontColor ? FontColor : '#FE4545';
    const inviteColor = InviteColor ? InviteColor :'#FA9B9B';
    const INVITE = 'invite';

    return (
        <div className={styles.groupCardContainer} style={{background: color}}>
            <div className={styles.titleContainer}>
                <h1 style={{color: fontColor}}>{
                    groupName
                }</h1>
               <BiX className={styles.icon} />
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.contentDiv}>
                    <span>
                        {content}
                    </span>
                </div>
                <div className={styles.inviteDiv}>
                    <button style={{background: inviteColor, color: 'rgba(0, 0, 0, 0.5)',}}>
                        {INVITE}
                    </button>
                    <CgMathPlus className={styles.iconPlus} />
                </div>
            </div>
            <div className={styles.memberContainer}>
                <span style={{color: fontColor, fontWeight: 700, marginRight: '10px',}}>
                    멤버
                </span>
                <span>
                    {memberList}
                </span>
            </div>
        </div>
    );
}
