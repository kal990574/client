import styles from './Mypage.module.css';
import MyNavigation from "../../components/mypage/nav/my-navigation";
import {useRouter} from "next/router";
import Image from "next/image";
import {useEffect} from "react";
import {api} from "~/utils/api";

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


    const router = useRouter();
    const goEdit = () => {
        router.push('/mypage/edit');
    }

    const goFriendsPage = (e) => {
        router.push('/mypage/friends');
    }

    return (
        <main className={styles.container}>
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
