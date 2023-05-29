import styles from './ColorPaletteModal.module.css';
import { Wheel } from "@uiw/react-color";
import React, { useState } from "react";
import { BiX } from 'react-icons/bi';

const ColorPaletteModal = ({setOpenColorPalette}) => {
    const [hex, setHex] = useState("#ffff");
    const [category, setCategory] = useState('카테고리 이름');

    const onChangeCategory = (e: React.FormEvent<HTMLInputElement>) => {
        setCategory(e.currentTarget.value);
    }

    return (
        <>
            <div className={styles.layer} onClick={() => {
                setOpenColorPalette((prev) => false);
            }} />
            <div className={styles.modal}>
                <div className={styles.topContainer}>
                    <div className={styles.color} style={{background: hex}} />
                    <input defaultValue={category} type={"text"} onChange={onChangeCategory}  className={styles.categoryName} />
                    <BiX className={styles.closeIcon} onClick={() => {
                        setOpenColorPalette((prev) => false);
                    }}  />
                </div>
                <div className={styles.colorPaletteContainer}>
                    <Wheel color={hex} onChange={(color) => {
                        setHex(color.hex);
                    }}/>
                    <span className={styles.hex}>{hex}</span>
                </div>
                <button className={styles.button}
                        onClick={() => {
                            alert('category 추가');
                        }}
                >
                    추가
                </button>
            </div>
        </>
    );
};

export default ColorPaletteModal;
