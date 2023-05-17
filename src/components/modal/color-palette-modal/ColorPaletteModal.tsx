import styles from './ColorPaletteModal.module.css';
import { Wheel } from "@uiw/react-color";
import { useState } from "react";
import { BiX } from 'react-icons/bi';

const ColorPaletteModal = ({close}) => {
    const [hex, setHex] = useState("#ffff");
    const [category, setCategory] = useState('카테고리 이름');

    const onChangeCategory = (e) => {
        setCategory(e.currentTarget.value);
    }

    return (
        <>
            <div className={styles.layer} onClick={close} />
            <div className={styles.modal}>
                <div className={styles.topContainer}>
                    <div className={styles.color} style={{background: hex}} />
                    <input defaultValue={category} type={"text"} onChange={onChangeCategory}  className={styles.categoryName} />
                    <BiX className={styles.closeIcon} onClick={close} />
                </div>
                <div className={styles.colorPaletteContainer}>
                    {/*<Wheel color={hex} onChange={(color) => {*/}
                    {/*    setHex(color.hex);*/}
                    {/*}}/>*/}
                    <span className={styles.hex}>{hex}</span>
                </div>
                <button className={styles.button}>추가</button>
            </div>
        </>
    );
};

export default ColorPaletteModal;
