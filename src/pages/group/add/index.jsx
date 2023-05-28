import styles from './GroupAdd.module.css';
import CustomHead from "../../../components/head/CustomHead";
import NavigationTop from "../../../components/nav/nav-top/NavigationTop";
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useState} from "react";
import {BiX} from "react-icons/bi";
import {COLOR_LIST, FRIENDS_LIST} from "../../../common/dummy";
import {AiFillMinusCircle} from "react-icons/ai";

export default function GroupAdd() {
    const [category, setCategory] = useState('');
    const [memberList, setMemberList] = useState([]);
    const [groupName, setGroupName] = useState('');
    const [openModal, setOpenModal] = useState(false);

    const onChangeGroupName = (e) => {
        setGroupName((prev) => e.target.value);
    }

    const addGroup = () => {
        alert('success')
    }


    const inviteMember = () => {
        alert('invite Memeber')
    }


    return (
        <main className={styles.container}>
            {
                openModal &&
                <div
                    id={'modalContainer'}
                    className={styles.modalContainer}
                    onClick={(e) => {
                        if (e.target.id === 'modalContainer') {
                            setOpenModal((prev) => false)
                        }
                    }}
                >
                    {
                       openModal === 'category'
                            ?  <div className={styles.modal}>
                                <div className={styles.modalTop}>
                                    <BiX style={{visibility: 'hidden'}} className={styles.icon} />
                                    <h2>카테고리</h2>
                                    <BiX className={styles.icon} onClick={() => setOpenModal((prev) => false)} />
                                </div>
                                <div className={styles.modalContent}>
                                    {
                                        COLOR_LIST.map((item, index) => {
                                            return (
                                                <div key={index} className={styles.colorListItem} onClick={() => {
                                                    setCategory((prev) => index);
                                                    setOpenModal((prev) => false);
                                                }}>
                                                    <div className={styles.color} style={{background: item.color}}></div>
                                                    <div className={styles.colorName}>
                                                        {item.name}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                            : <div className={styles.modal}>
                                <div className={styles.modalTop}>
                                    <BiX style={{visibility: 'hidden'}} className={styles.icon} />
                                    <h2>멤버초대</h2>
                                    <BiX className={styles.icon} onClick={() => setOpenModal((prev) => false)} />
                                </div>
                                <div className={styles.modalContent}>
                                    {
                                        FRIENDS_LIST.map((item, index) => {
                                            return (
                                                <div key={index} className={styles.memberListItem} onClick={() => {
                                                    setMemberList((prev) => [...prev, item]);
                                                    setOpenModal((prev) => false);
                                                }}>
                                                    <img src={item.src} alt={item.title} />
                                                    <div className={styles.colorName}>
                                                        {item.title}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                            </div>
                    }
                </div>
            }
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
                    <h2 id={'category'} className={styles.font16_700} onClick={(e) => {
                        setOpenModal((prev) => e.target.id)
                    }}>카테고리 선택</h2>
                    <div onClick={(e) => {
                        if(category === '') {
                            setOpenModal((prev) => 'category');
                        }
                    }}>
                        { category.length === 0 ? '' : COLOR_LIST[category].name}
                        { category.length === 0
                            ? <></>
                            : <AiFillMinusCircle
                                onClick={() => setCategory(() => '')}
                                style={{width: '20px', height: '20px', marginLeft: '10px'}} />}
                    </div>
                </div>

                <div className={styles.memberContainer}>
                    <h2 id={'member'} onClick={(e) => {
                        setOpenModal((prev) => e.target.id)
                    }} className={styles.font16_700}>멤버 초대</h2>
                    <div
                         className={styles.memberListBox}
                    >
                        {memberList.map((m, index) =>
                            <div
                                className={styles.memberItem}
                                key={index}>
                                {m.title}

                                <AiFillMinusCircle
                                    onClick={() => setMemberList((prev) =>  {
                                        return memberList.filter((d) => {
                                            return d.id !== m.id
                                        })
                                    })}
                                    style={{width: '20px', height: '20px', marginLeft: '10px'}} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}
