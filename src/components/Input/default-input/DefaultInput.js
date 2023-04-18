import React, {useEffect, useState} from 'react';
import styles from './Defaultinput.module.css';

export default function DefaultInput({useInput, type, defaultValue, placeholder, regExp}) {
    const [valid, setValid] = useState(false);

    return (
        <>
            <input type={type} {...useInput} className={styles.container} placeholder={placeholder} />
            {
                valid ? <span>입력 형식이 올바르지 않습니다.</span> : <></>
            }
        </>
    )
}
