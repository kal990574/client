import styles from './Friends.module.css';
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import UserListItem from "../../../components/mypage/user-list-item/user-list-item";
import {NextPage} from "next";
import {api} from "~/utils/api";

const FriendsPage: NextPage = () => {
    const myInfoQuery = api.user.getMyInfo.useQuery(undefined);

    return (
        <main className={styles.container}>
            <MyNavigation title={myInfoQuery.data?.name} />
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