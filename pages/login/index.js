import React, {useState} from 'react';
import styles from './Login.module.css';
import DefaultInput from "../../components/Input/default-input/DefaultInput";
import {useRouter} from "next/router";

export default function Login() {
    const router = useRouter();
    const useInput=(defaultValue)=>{
        const [value,setValue] = useState(defaultValue);
        const onChange=e=>{
            const {value}={...e.target}
            setValue(value)
        }

        return{value,onChange}
    }

    const userId = useInput('');
    const userPw = useInput('');

    const handleSubmit = e =>{
        e.preventDefault();
        if(userId.value === 'admin' && userPw.value === 'admin') {
            alert("로그인 성공");
            router.push('/calendar');
        }

    }

    return (
        <section className={styles.container}>
            <main className={styles.mainContainer}>
                <section className={styles.logoContainer}>
                    <div>
                        {/* 임시 이미지 */}
                        <img className={styles.logoImg} src={'./gathering.png'}/>
                    </div>
                    <div className={styles.appTitleContainer}>
                        <h1>CALENDARY</h1>
                        <span>일정과 공유</span>
                    </div>
                </section>
                <div className={styles.authContainer}>
                    <form>
                        <div>
                            <DefaultInput useInput={userId} type={'string'} placeholder={'ID'} />
                        </div>
                        <div>
                            <DefaultInput useInput={userPw} type={'string'} placeholder={'PW'} />
                        </div>
                        <button onClick={handleSubmit} className={styles.loginButton} type={"submit"}>LOGIN</button>
                    </form>
                </div>
                {/* OAuth */}
                {/*<div className={styles.oAuthContainer}>*/}
                {/*    <div>*/}
                {/*        kakaotalk login*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        google login*/}
                {/*    </div>*/}
                {/*</div>*/}
            </main>
            <footer className={styles.footerContainer}>
                <div>
                    <span>Github: ~~~~~</span>
                    <span>개발자: 진재연</span>
                </div>

                <p className={styles.copyright}>
                    &copy; 2023 copyright
                </p>
            </footer>
        </section>
    );
}
