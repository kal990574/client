import styles from './RoundButton.module.css';

export default function RoundButton({onClickEvent, src}) {
    return (
        <button className={styles.container} onClick={onClickEvent}>
            <div />
            <div />
        </button>
    )
}
