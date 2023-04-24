import styles from './ScopeModal.module.css';
import {BiX} from 'react-icons/bi';
import styled from 'styled-components';
import {SCOPE_DISCLOSURE} from "../../../common/dummy";

const ScopeItem = styled.li`
    width: 100%;
    height: 34px;
    display: flex;
    font-size: 14px;
    align-items: center;
    border-bottom: 1px solid #D9D9D9;
`;

export default function ScopeModal({close, setScope}) {
    return (
        <>
            <div className={styles.layer} onClick={close}></div>
            <div className={styles.modal}>
                <div className={styles.top}>
                    <BiX className={styles.close} onClick={close} />
                    <h2>공개범위</h2>
                </div>
                <div className={styles.content}>
                    <ul>
                        {
                            SCOPE_DISCLOSURE.map((item) => <ScopeItem key={item.id}>{item.title}</ScopeItem>)
                        }
                    </ul>
                    <button className={styles.button} type={'button'}>확인</button>
                </div>
            </div>
        </>
    )
}
