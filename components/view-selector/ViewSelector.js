import React, {useState} from 'react';
import styles from './ViewSelector.module.css';
import { BiCaretDown } from "react-icons/bi";
import VIEW_TYPE_ARRAY from './config';

export default function ViewSelector({open, setOpen}) {
    const [viewType, setViewType] = useState(0);

    const onClickViewSelector = (event) => {
        setOpen((prev) => {
            return !prev;
        });
    }

    return (
        <>
            { open ?
                <ul className={styles.openContainer} onClick={onClickViewSelector}>
                    {
                        VIEW_TYPE_ARRAY.map((item, index) => {
                            return (
                                <li key={index} className={styles.selectItem} onClick={() => {setViewType((prev) => index)}}>
                                    {item}
                                </li>
                            )
                        })
                    }
                </ul>
                : <div className={styles.closeContainer} onClick={onClickViewSelector}>
                    {VIEW_TYPE_ARRAY[viewType]}
                    <BiCaretDown className={styles.icon} />
                </div>
            }
        </>
    );
}
