import styles from './Mypage.module.css';
import MyNavigation from "../../components/mypage/nav/my-navigation";
import {useRouter} from "next/router";

const CategoryItem =  ({color, name}) => {
    return (
        <div className={styles.categoryItemContainer}>
            <div className={styles.categoryItemColor} style={{background: color}} />
            <span className={styles.categoryItemName}>{name}</span>
        </div>
    )
}

export default function Mypage() {
    const follower = 14;
    const following = 22;
    const router = useRouter();

    const goEdit = () => {
        router.push('mypage/edit');
    }

    return (
        <main className={styles.container}>
            <MyNavigation title={'마이페이지'} />
            <div className={styles.contentContainer}>
                <section className={styles.profileSection}>
                    <div className={styles.profileImgContainer}>
                        <img src={'img.png'} className={styles.profileImg}  alt={'user profile img'}/>
                    </div>
                    <div className={styles.nameContainer}>
                        <span>
                            이재현
                        </span>
                    </div>
                    <div className={styles.profileEditButtonContainer}>
                        <button onClick={goEdit} className={styles.profileEditButton}>프로필 편집</button>
                    </div>
                    <div className={styles.followingContainer}>
                        <div className={styles.following}>
                            <span>
                                {follower} 팔로워
                            </span>
                        </div>
                        <div className={styles.following}>
                            <span>
                                {following} 팔로잉
                            </span>
                        </div>
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
