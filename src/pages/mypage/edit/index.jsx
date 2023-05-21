import styles from './MyEdit.module.css';
import CustomHead from "../../../components/head/CustomHead";
import {useRouter} from "next/router";
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useCallback, useRef, useState} from "react";
import Image from "next/image";
import { BiCamera } from "react-icons/bi";


export default function MyEdit() {
    const router = useRouter();
    const inputRef = useRef(null);
    const [img, setImg] = useState('/img.png');
    const onUploadImage = useCallback((e) => {
        if (!e.target.files) {
            return;
        }
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise((resolve) => {
            reader.onload = () => {
                setImg(reader.result || '/img.png'); // 파일의 컨텐츠
                resolve();
            };
        });
        }, []);

    return (
        <main className={styles.container}>
            <CustomHead title={'MyEdit'} content={'MyEditPage'}/>
            <MyNavigation title={'프로필 편집'} />
            <div className={styles.contentContainer}>
                <div className={styles.profileImgContainer}>
                    <input style={{display: 'none'}} type="file" accept="image/*" ref={inputRef} onChange={onUploadImage} />
                    <Image
                        className={styles.profileImg}
                        onClick={()=>{inputRef.current.click()}}
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
w
                </div>
                <div className={styles.introduceContainer}>
w
                </div>
            </div>
        </main>
    )
}
