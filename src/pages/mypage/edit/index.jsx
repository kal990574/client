import styles from './MyEdit.module.css';
import CustomHead from "../../../components/head/CustomHead";
import {useRouter} from "next/router";
import MyNavigation from "../../../components/mypage/nav/my-navigation";
import {useCallback, useRef, useState} from "react";
import Image from "next/image";
import { BiCamera } from "react-icons/bi";


export default function MyEdit() {
    const [nickName, setNickName] = useState('이재현');
    const [introduce, setIntroduce] = useState('이재현이다 나는');

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

    const onChangeInput = (e) => {
        if(e.target.name ==='nickName') {
            setNickName(e.target.value);
        } else if(e.target.name === 'introduce') {
            setIntroduce(e.target.value);
        }
    }

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
                    <input
                        name={'nickName'}
                        onChange={onChangeInput}
                        value={nickName}
                        className={styles.nickNameInput}
                        type={'text'} required="required" />
                </div>
                <div className={styles.introduceContainer}>
                    <label className={styles.introduceLabel}>프로필 소개</label>
                    <input
                        placeholder={'입력(최대 60글자)'}
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
