import styles from './EmojiModal.module.css';
import {BiX} from "react-icons/bi";
import {EMOJI} from "~/components/modal/detail-diray-modal/DetailDirayModal";

export default function EmojiModal({setOpenEmoji, setEmoji}) {
    return(
        <div className={styles.container}>
            <div className={styles.top}>
                <BiX className={styles.icon} style={{visibility:'hidden'}} />
                <h2>오늘의 기분</h2>
                <BiX className={styles.icon} onClick={() => setOpenEmoji((prev) => false)} />
            </div>
            <div className={styles.emojiBox}>
                <div className={styles.emojiBoard}>
                    {
                        EMOJI.map((m, index) => {
                            return <img
                                onClick={() => setEmoji((prev) => index)}
                                alt={m.src}
                                src={m.src}
                                key={index}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    );
}
