import styles from './MyEdit.module.css';
import CustomHead from "../../../components/head/CustomHead";
import {useRouter} from "next/router";
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useCallback, useRef, useState} from "react";
import Image from "next/image";
import { BiCamera } from "react-icons/bi";
import {api} from "~/utils/api";
import {useSession} from "next-auth/react";
import {User} from "@prisma/client";


const EditForm = ({userServerData}: {userServerData: User}) => {
    const router = useRouter();

    const updateUserMutation = api.user.updateMyProfile.useMutation();

    const [nickName, setNickName] = useState(userServerData.name ?? "");
    const [introduce, setIntroduce] = useState(userServerData.introduce ?? "");

    const inputRef = useRef<any>(null);
    const [img, setImg] = useState(userServerData.image ? userServerData.image : '/img.png');
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

export default function MyEdit() {
    const userInfoQuery = api.user.getMyInfo.useQuery(undefined, {
        staleTime: Infinity,
    });

    if (!userInfoQuery.data) {
        return (
            <>
            Loading...
            </>
        )
    }
    return (
        <EditForm userServerData={userInfoQuery.data}/>
    )
}
