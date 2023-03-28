import React from 'react';
import styles from './WeekView.module.css';

export default function WeekView({viewContent}) {
    if(viewContent) {
        return (
            <div>calendar week view</div>
        )
    }
    return (
        <div>diary week view</div>
    )
}
