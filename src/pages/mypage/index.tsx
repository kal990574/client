import  styles from './Mypage.module.css';
import MyNavigation from "../../components/mypage/nav/my-navigation";
import {useRouter} from "next/router";
import Image from "next/image";
import {api} from "~/utils/api";
import {IoAddCircle} from "react-icons/io5";
import {useState} from "react";
import {BiX} from "react-icons/bi";
import {PRIMARY_COLOR} from "~/components/calendar/configs";
import {AiOutlineCheck} from "react-icons/all";

const CategoryItem =  ({color, name}: {color: string, name: string}) => {
    return (
        <div className={styles.categoryItemContainer}>
            <div className={styles.categoryItemColor} style={{background: color}} />
            <span className={styles.categoryItemName}>{name}</span>
        </div>
    )
}


export default function UserInfoPage() {
    const myInfoQuery = api.user.getMyInfo.useQuery(undefined);
    const [openCategory, setOpenCategory] = useState(false);
    const [name, setName]= useState('');
    const [color, setColor] = useState(0);

    const router = useRouter();
    const goEdit = () => {
        router.push('/mypage/edit');
    }

    const goFriendsPage = (e) => {
        router.push('/mypage/friends');
    }

    const addCategory = (e) => {
        alert('add category')
    }

    return (
        <main className={styles.container}>
            {
                openCategory && <div className={styles.categoryModalContainer}>
                    <div className={styles.categoryModal}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                width: 'calc(100% - 20px)',
                                height: '32px',
                                padding: '10px',}}
                        >
                            <BiX style={{width: '28px', height: '28px', visibility: 'hidden'}}/>
                            <span
                                style={{fontSize: '20px', fontWeight: '700'}}
                            >카테고리 추가</span>
                            <BiX onClick={() => {
                                setOpenCategory((prev) => false);
                            }
                            } style={{width: '28px', height: '28px'}} />
                        </div>

                        <div style={{width: '100%', height: 'calc(100% - 52px)'}}>
                            <div className={styles.colorPalette}>
                                {
                                    Object.keys(PRIMARY_COLOR).map((key, index) => {
                                        return <div
                                            style={{position: 'relative'}}
                                            key={index} onClick={() => {
                                                setColor((prev) => index);
                                        }}>
                                            {
                                                color === index
                                                    ? <AiOutlineCheck
                                                      style={{
                                                          top: '10px',
                                                          position:'absolute',
                                                          width: '36px',
                                                          height: '36px',
                                                        }}
                                                    />
                                                    : <></>
                                            }
                                            <div style={{
                                               width: '36px',
                                                height: '36px',
                                                borderRadius: '50px',
                                                background: PRIMARY_COLOR[key].primary
                                            }} />
                                        </div>
                                    })
                                }
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    style={{
                                        width: '80%',
                                        height: '30px',
                                        border: 'none',
                                        outline: 'none',
                                        padding: '0',
                                    }}
                                    placeholder={'카테고리 이름 입력'}
                                    type={'text'} value={name} onChange={(e) => {
                                    setName(e.currentTarget.value);
                                }}/>
                            </div>
                            <div style={{width: '100%', height: '50px', display:'flex', alignItems:'center', justifyContent:'center'}}>
                                <button className={styles.addButton} onClick={addCategory}>
                                    추가
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            }
            <MyNavigation title={'마이페이지'} />
            <div className={styles.contentContainer}>
                <section className={styles.profileSection}>
                    <div className={styles.profileImgContainer}>
                        <Image width={150} height={150} src={'/img.png'} className={styles.profileImg}  alt={'user profile img'}/>
                    </div>
                    <div className={styles.nameContainer}>
                        <span>
                            {myInfoQuery.data?.name}
                        </span>
                    </div>
                    <div className={styles.profileEditButtonContainer}>
                        <button onClick={goEdit} className={styles.profileEditButton}>프로필 편집</button>
                    </div>
                    <div className={styles.followingContainer}>
                         <span onClick={goFriendsPage}>
                             {myInfoQuery.data?.friends.length} 명의 친구가 있어요!
                         </span>
                    </div>
                </section>
                <section className={styles.categorySection}>
                    <div className={styles.categoryTitleContainer}>
                        <span className={styles.categoryTitle}>카테고리</span>
                        <IoAddCircle className={styles.icon} onClick={() => {
                            setOpenCategory((prev) => true);
                        }} />
                    </div>
                    <div className={styles.categoryListContainer}>
                        {/* dummy data */}
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                        <CategoryItem color={'#FFA6A6'} name={'데이트'} />
                    </div>
                </section>
            </div>
        </main>
    )
}
