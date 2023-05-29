import styles from './Friends.module.css';
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import UserListItem from "../../../components/mypage/user-list-item/user-list-item";
import {NextPage} from "next";
import {api} from "~/utils/api";
import {IoIosArrowBack} from "react-icons/io";
import {useRouter} from "next/router";

const FriendsPage: NextPage = () => {
    const myInfoQuery = api.user.getMyInfo.useQuery(undefined);
    const router = useRouter();

    return (
        <main className={styles.container}>
            <div className={styles.nav}>
                <IoIosArrowBack className={styles.icon} onClick={() => {
                    router.back();
                }} />
                <h2>{myInfoQuery.data.name}</h2>
                <IoIosArrowBack className={styles.icon} style={{visibility: 'hidden'}} />

            </div>
            <div className={styles.contentContainer}>
                <div className={styles.listContainer}>
                    {
                        myInfoQuery.data?.friends.map((friendRelation) => {
                            return (
                                <UserListItem key={friendRelation.id} userId={friendRelation.userOtherId} follow={true} />
                            );
                        })
                    }
                </div>
            </div>
        </main>
    );
}

export default FriendsPage;
