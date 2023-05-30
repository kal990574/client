import  styles from './Mypage.module.css';
import MyNavigation from "../../components/mypage/nav/my-navigation";
import {useRouter} from "next/router";
import Image from "next/image";
import {api} from "~/utils/api";
import {IoAddCircle} from "react-icons/io5";
import {useCallback, useState} from "react";
import {BiX} from "react-icons/bi";
import {PRIMARY_COLOR} from "~/components/calendar/configs";
import {AiOutlineCheck} from "react-icons/ai";

const CategoryItem =  ({color, name}: {color: string, name: string}) => {
    return (
        <div className={styles.categoryItemContainer}>
            <div className={styles.categoryItemColor} style={{background: color}} />
            <span className={styles.categoryItemName}>{name}</span>
        </div>
    )
}


export default function UserInfoPage() {
    const router = useRouter();

    const utils = api.useContext();

    const myInfoQuery = api.user.getMyInfo.useQuery(undefined);

    const createCategoryMutation = api.user.createCategory.useMutation({
        onSuccess: () => {
            utils.user.getCategories.invalidate();
        }
    });

    const getCategoriesQuery = api.user.getCategories.useQuery(undefined);


    const [isOpenCreateCategory, setIsOpenCreateCategory] = useState(false);
    const [createCategoryName, setCreateCategoryName]= useState('');
    const [createCategoryColor, setCreateCategoryColor] = useState<string>(Object.keys(PRIMARY_COLOR)[0]);

    const goEdit = () => {
        router.push('/mypage/edit');
    }

    const goFriendsPage = () => {
        router.push('/mypage/friends');
    }

    const addCategory = useCallback(() => {
        createCategoryMutation.mutate({
            name: createCategoryName,
            color: createCategoryColor,
        }, {
            onSuccess: () => {
                setIsOpenCreateCategory(false);
            }
        })
    }, [createCategoryMutation, createCategoryName, createCategoryColor]);

    return (
        <main className={styles.container}>
            {
                isOpenCreateCategory && <div className={styles.categoryModalContainer}>
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
                                setIsOpenCreateCategory((prev) => false);
                            }
                            } style={{width: '28px', height: '28px'}} />
                        </div>

                        <div style={{width: '100%', height: 'calc(100% - 52px)'}}>
                            <div className={styles.colorPalette}>
                                {
                                    Object.entries(PRIMARY_COLOR).map(([key, value]) => {
                                        return (
                                            <div
                                                style={{position: 'relative'}}
                                                key={key} onClick={() => {
                                                setCreateCategoryColor(key);
                                            }}>
                                                {
                                                    (createCategoryColor === key) && (
                                                        <AiOutlineCheck
                                                            style={{
                                                                top: '10px',
                                                                position:'absolute',
                                                                width: '36px',
                                                                height: '36px',
                                                            }}
                                                        />
                                                    )
                                                }
                                                <div style={{
                                                    width: '36px',
                                                    height: '36px',
                                                    borderRadius: '50px',
                                                    background: value.primary
                                                }} />
                                            </div>
                                        )
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
                                    type={'text'}
                                    value={createCategoryName}
                                    onChange={(e) => {
                                        setCreateCategoryName(e.currentTarget.value);
                                    }}
                                />
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
                            setIsOpenCreateCategory((prev) => true);
                        }} />
                    </div>
                    <div className={styles.categoryListContainer}>
                        {
                            getCategoriesQuery.data?.map((category) => (
                                <CategoryItem color={PRIMARY_COLOR[category.color].primary} name={category.name} />
                            ))
                        }
                    </div>
                </section>
            </div>
        </main>
    )
}
