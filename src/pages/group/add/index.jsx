import styles from './GroupAdd.module.css';
import CustomHead from "../../../components/head/CustomHead";
import NavigationTop from "../../../components/nav/nav-top/NavigationTop";
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useState} from "react";

export default function GroupAdd() {
    const [category, setCategory] = useState('');
    const [memberList, setMemberList] = useState([]);
    const [groupName, setGroupName] = useState('');

    const onChangeGroupName = (e) => {
        setGroupName((prev) => e.target.value);
    }

    const addGroup = () => {
        alert('success')
    }

    const selectCategory = () => {
        alert('selectCategory')
    }

    const inviteMember = () => {
        alert('invite Memeber')
    }

    return (
        <main className={styles.container}>
            <CustomHead title={'create group'} content={'GroupAddPage'}/>
            <MyNavigation title={'그룹 생성'} success={addGroup} />
            <div className={styles.innerContainer}>
                {/*<div className={styles.groupCardContainer}>*/}
                    <input
                        onChange={onChangeGroupName}
                        className={styles.groupCardContainer}
                        placeholder={'그룹명을 입력하세요'}
                        value={groupName}
                        name={'groupName'}
                        type={'text'}
                        required={'required'} />
                {/*</div>*/}
                <div className={styles.categoryContainer}>
                    <h2 className={styles.font16_700} onClick={selectCategory}>카테고리 선택</h2>
                    <span onClick={selectCategory}>{category}</span>
                </div>
                <div className={styles.memberContainer}>
                    <h2 onClick={inviteMember} className={styles.font16_700}>멤버 초대</h2>
                    <div onClick={inviteMember}>
                        {memberList.map((m, index) => <span key={index}>{m.name}</span>)}
                    </div>
                </div>
            </div>
        </main>
    );
}
