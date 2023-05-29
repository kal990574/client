import styles from './AddGroupMember.module.css';
import {BsCheckLg} from "react-icons/bs";
import {IoIosArrowBack} from "react-icons/io";
import {GROUP_DUMMY} from "~/common/dummy";
import {useRouter} from "next/router";
import {IoAddCircleSharp, IoCloseCircleOutline, IoCloseCircleSharp} from "react-icons/io5";
import {useState} from "react";

export default function AddGroupMember() {
    // 현재 그룹에 포함된 인원 외 사람들 리스트 보여줌.
    const router = useRouter();

    const groupId = router.query.id as string;

    const data = GROUP_DUMMY[0];
    const [addMember, setAddMember] = useState([]);

    const INVITABLE = [
        {name: '임지현', id: 123, img: '/img.png'},
        {name: '김시은', id: 13, img: '/img.png'},
        {name: '길주현', id: 1243, img: '/img.png'},
        {name: '조은지', id: 1253, img: '/img.png'},
        {name: '임동현', id: 1263, img: '/img.png'},
        {name: '현지우', id: 155123, img:'/img.png'},
        {name: '정시우', id: 1263, img: '/img.png'},
        {name: '현정은', id: 156723, img: '/img.png'},
        {name: '동지아', id: 12323, img: '/img.png'},
        {name: '고지은', id: 1512523, img: '/img.png'},
        {name: '임은수', id: 1231253, img: '/img.png'},
    ];

    return (
       <main className={styles.container}>
            <div className={styles.top}>
                <IoIosArrowBack
                    onClick={() => {
                        router.back();
                    }}
                    className={styles.icon}
                />
                <h1>그룹 멤버 추가</h1>
                <BsCheckLg
                    onClick={() => {
                        alert('그룹 멤버 추가 요청 성공')
                    }}
                    className={styles.icon}
                />
            </div>
           <div className={styles.innerContainer}>
                <div className={styles.groupName}>
                    <h2>{data.groupName}</h2>
                </div>

               <div className={styles.userList}>
                   {
                       INVITABLE.map((d, key) => {
                           return (
                               <div className={styles.userItem} key={'user'+key}>
                                   <div>
                                       <img alt={'user profile img'} src={d.img} />
                                       <h5>{d.name}</h5>
                                   </div>
                                   <div>
                                       {
                                           addMember.includes(d.id)
                                            ? <IoCloseCircleOutline
                                                   onClick={() => {
                                                       setAddMember((prev) => {
                                                           return prev.filter((p) => p !== d.id);
                                                       });
                                                   }}
                                                   style={{color: '#ff3c19'}}
                                                   className={styles.icon}
                                               />
                                               : <IoAddCircleSharp
                                                   onClick={() => {
                                                       setAddMember((prev) => [...prev, d.id]);
                                                   }}
                                                   // style={{color: '#2519ff'}}
                                                   className={styles.icon}
                                               />
                                       }
                                   </div>
                               </div>
                           )
                       })
                   }
               </div>
           </div>
        </main>
    );
}
