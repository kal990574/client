import styles from './GroupDetail.module.css';
import {BiX} from "react-icons/bi";
import {useRouter} from "next/router";
import {IoIosArrowBack, IoMdAddCircleOutline} from "react-icons/io";
import {GROUP_DUMMY} from "../../../common/dummy";
import {AiFillSetting} from "react-icons/ai";
import GroupScheduleCard from "../../../components/card/group-schedule-card/GroupScheduleCard";
import {useState} from "react";
import {api} from "~/utils/api";
import {GroupParticipant} from "@prisma/client";

const DetailModal = ({title, summary, memberList, setOpenDetailModal}: {
    title: string,
    summary: string,
    setOpenDetailModal: any,
    memberList: (GroupParticipant & {participant: {id: string, name: string | null}})[]
}) => {
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
                                    {d.participant.name}
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
    const GROUP_ID = router.query.id as string;

    const [openGroupDetail, setOpenGroupDetail] = useState(false);

    const groupInfo = api.user.getGroupInfo.useQuery(GROUP_ID);

    const GroupPrimaryColor = '#FDE4F7';
    const GroupFontColor = '#FE4545';
    const GroupInviteColor = '#FA9B9B';

    if (!groupInfo.data)
        return null;

    return (
        <main
            style={{background: GroupPrimaryColor, color: GroupFontColor}}
            className={styles.container}
        >
            {
                openGroupDetail && <div className={styles.modalBackground} onClick={() => setOpenGroupDetail((prev) => false)}>
                    <DetailModal setOpenDetailModal={setOpenGroupDetail} title={groupInfo.data.name} summary={groupInfo.data.summary} memberList={groupInfo.data.participants} />
                </div>
            }
            <div
                style={{background: GroupInviteColor}}
                className={styles.topNav}
            >
                <IoIosArrowBack
                    className={styles.icon}
                    onClick={() => router.push('/group')}
                />
                <h2>{groupInfo.data.name}</h2>
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
                        <span>{groupInfo.data.summary}</span>
                    </div>
                    <div className={styles.groupMember}>
                        <h3>그룹 멤버 {groupInfo.data.participants.length}명</h3>
                        <div>
                            {groupInfo.data.participants.map((m, index) => <span key={index}>{m.participant.name}</span>)}
                        </div>
                    </div>
                </div>

                <div
                    className={styles.groupScheduleContainer}>
                    <h2
                        style={{borderBottom: `2px solid ${GroupInviteColor}`}}
                    >그룹 일정</h2>
                    <IoMdAddCircleOutline onClick={() => {
                        router.push(`/group/add/schedule/${GROUP_ID}`);
                    }} className={styles.addIcon} />
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
