import styles from './MyEdit.module.css';
import CustomHead from "../../../components/head/CustomHead";
import {useRouter} from "next/router";
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useCallback, useRef, useState} from "react";
import Image from "next/image";
import { BiCamera } from "react-icons/bi";
import {api} from "../../../utils/api";
import {useSession} from "next-auth/react";


export default function MyEdit() {
    const {data: sessionData} = useSession();
    // const localUser = localStorage.getItem('user');
    const router = useRouter();
    // const user = JSON.parse(localUser);
    const user = {
        id: 'qwe',
        name: '김유저',
        introduce: '나는 김유저입니다.',
        image: null,
    };

    const updateUserMutation = api.user.updateMyProfile.useMutation();
    const userData = api.user.getUserInfo.useQuery({id: user.id}).data;
    const [nickName, setNickName] = useState(user.name);
    const [introduce, setIntroduce] = useState(user.introduce);

    const inputRef = useRef<any>(null);
    const [img, setImg] = useState(user.image ? user.image : '/img.png');
    const onUploadImage = useCallback((e: any) => {
        if (!e.target.files) {
            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                if(reader.result !== null) {
                    setImg(reader.result.toString() || '/img.png'); // 파일의 컨텐츠
                }
                // resolve();
            };
        });
    }, []);

    const onChangeInput = (e: any) => {
        if(e.target.name ==='nickName') {
            setNickName(e.target.value);
        } else if(e.target.name === 'introduce') {
            setIntroduce(e.target.value);
        }
    }

    const onClickSuccess = () => {
        updateUserMutation.mutate({
            image: img,
            name: nickName,
            introduce: introduce,
        }, {
            onSuccess: () => router.push('/home')
        })
    }

    return (
        <main className={styles.container}>
            <CustomHead title={'MyEdit'} content={'MyEditPage'}/>
            <MyNavigation title={'프로필 편집'} success={onClickSuccess} />
            <div className={styles.contentContainer}>
                <div className={styles.profileImgContainer}>
                    <input style={{display: 'none'}} type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
                    <Image
                        alt={'user profile img'}
                        className={styles.profileImg}
                        onClick={()=>{
                            if(inputRef.current !== null) {
                                inputRef.current.click();
                            }
                        }}
                        width={150}
                        height={150}
                        src={img}
                    />
                    <div
                        onClick={()=>{inputRef.current.click()}}
                        className={styles.cameraIcon}>
                        <BiCamera className={styles.icon} />
                    </div>

                </div>
                <div className={styles.nickNameContainer}>
                    <input
                        maxLength={20}
                        placeholder={'이름 입력(최대 20글자)'}
                        name={'nickName'}
                        onChange={onChangeInput}
                        value={nickName}
                        className={styles.nickNameInput}
                        type={'text'}
                        required={true}
                    />
                </div>
                <div className={styles.introduceContainer}>
                    <label className={styles.introduceLabel}>프로필 소개</label>
                    <input
                        maxLength={60}
                        placeholder={'소개 입력(최대 60글자)'}
                        name={'introduce'}
                        onChange={onChangeInput}
                        value={introduce}
                        className={styles.introduceInput}
                        type={'text'} />
                </div>
            </div>
        </main>
    )
}
