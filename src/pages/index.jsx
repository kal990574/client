import React from 'react';
import styles from '../styles/Main.module.css';

export default function Main({session}) {
    console.log("Main session: ", session)
    return(
        <main className={styles.container}>
            home
        </main>
    );
}

