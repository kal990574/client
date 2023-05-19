import styles from './MyEdit.module.css';
import CustomHead from "../../../components/head/CustomHead";
import {useRouter} from "next/router";
import MyNavigation from "../../../components/mypage/nav/my-navigation";

export default function MyEdit() {
    const router = useRouter();
    console.log(router.pathname)
    return (
        <main>
            <CustomHead title={'MyEdit'} content={'MyEditPage'}/>
            <MyNavigation title={'프로필 편집'} />


        </main>
    )
}
