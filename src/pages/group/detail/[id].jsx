import styles from './GroupDetail.module.css';
import {BiX} from "react-icons/bi";
import {useRouter} from "next/router";
import {IoIosArrowBack} from "react-icons/all";
import {GROUP_DUMMY} from "../../../common/dummy";
import {AiFillSetting} from "react-icons/ai";
import GroupScheduleCard from "../../../components/card/group-schedule-card/GroupScheduleCard";
import {useState} from "react";

const DetailModal = ({title, summary, memberList, setOpenDetailModal}) => {
    return (
        <div className={styles.detailModal}>
            <div className={styles.top}>
                <BiX style={{visibility: 'hidden'}} className={styles.icon} />
                <BiX onClick={() => setOpenDetailModal((prev) => false)} className={styles.icon} />
            </div>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{summary}</p>
                <h2>멤버</h2>
                <div className={styles.memberList}>
                    {
                        memberList.map((d, index) => {
                            return (
                                <span key={'member'+index}>
                                    {d}
                                </span>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

// group schedule
export const GROUP_SCHEDULE_DUMMY = [
    {   scheduleId: 0,
        title: '카공1',
        content: '에이바웃에서 카공',
        member: [0, 2, 5, 6, 7], // memberId
        date: '2023-05-10',
        timeType: 'part',
        timeStampS: '3:00pm',
        timeStampE: '5:00pm',
        place: '에이바웃',
    },
    {   scheduleId: 1,
        title: '카공2',
        content: '에이바웃에서 카공',
        member: [0, 2, 5, 6, 3], // memberId
        date: '2023-05-16',
        timeType: 'full',
        timeStampS: '',
        timeStampE: '',
        place: '에이바웃',
    },
    {   scheduleId: 2,
        title: '카공3',
        content: '에이바웃에서 카공',
        member: [0, 2, 5, 6, 7], // memberId
        date: '2023-05-23',
        timeType: 'part',
        timeStampS: '3:00pm',
        timeStampE: '5:00pm',
        place: '에이바웃',
    },
    {   scheduleId: 0,
        title: '카공4',
        content: '에이바웃에서 카공',
        member: [0, 2, 5, 6, 7], // memberId
        date: '2023-05-25',
        timeType: 'part',
        timeStampS: '3:00pm',
        timeStampE: '5:00pm',
        place: '에이바웃',
    },
];

export default function GroupDetail () {
    const router = useRouter();
    const GROUP_ID = router.query.id;

    const [openGroupDetail, setOpenGroupDetail] = useState(false);

    const groupData = GROUP_DUMMY.filter(
        (m) => {
            return m.groupId.toString() === GROUP_ID});

    const GroupPrimaryColor = groupData[0].primaryColor;
    const GroupName = groupData[0].groupName;
    const GroupFontColor = groupData[0].FontColor;
    const GroupIntro = groupData[0].content;
    const GroupInviteColor = groupData[0].InviteColor;
    const GroupMemberList = groupData[0].memberList;

    return (
        <main
            style={{background: GroupPrimaryColor, color: GroupFontColor}}
            className={styles.container}
        >
            {
                openGroupDetail && <div className={styles.modalBackground} onClick={() => setOpenGroupDetail((prev) => false)}>
                    <DetailModal setOpenDetailModal={setOpenGroupDetail} title={GroupName} summary={GroupIntro} memberList={GroupMemberList} />
                </div>
            }
            <div
                style={{background: GroupInviteColor}}
                className={styles.topNav}
            >
                <IoIosArrowBack
                    className={styles.icon}
                    onClick={() => router.replace('/group')}
                />
                <h2>{GroupName}</h2>
                <AiFillSetting
                    className={styles.icon}
                />
            </div>
            <div
                className={styles.contentContainer}
            >
                <div
                    onClick={() => {
                        setOpenGroupDetail((prev) => true);
                    }}
                    style={{ border: `1px solid ${GroupFontColor}`, borderRadius: '15px'}}
                    className={styles.groupInfoContainer}
                >
                    <div className={styles.groupIntro}>
                        <h3>그룹 소개</h3>
                        <span>{GroupIntro}</span>
                    </div>
                    <div className={styles.groupMember}>
                        <h3>그룹 멤버 {GroupMemberList.length}명</h3>
                        <div>
                            {GroupMemberList.map((m, index) => <span key={index}>{m}</span>)}
                        </div>
                    </div>
                </div>

                <div
                    className={styles.groupScheduleContainer}>
                    <h2
                        style={{borderBottom: `2px solid ${GroupInviteColor}`}}
                    >그룹 일정</h2>
                    <div
                        className={styles.groupScheduleList}
                        // style={{background: GroupInviteColor, border: `1px solid ${GroupFontColor}`, borderRadius: '15px'}}
                    >
                        {
                            GROUP_SCHEDULE_DUMMY.map((m, index) => {
                                return (
                                    <GroupScheduleCard groupId={GROUP_ID} key={index} data={m} lineColor={GroupFontColor} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
