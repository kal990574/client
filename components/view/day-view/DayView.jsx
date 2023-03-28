import React from 'react';
import styles from './DayView.module.css';

export default function DayView({viewContent}) {
    if(viewContent) {
        return (
            <div>calendar day view</div>
        )
    }
    return (
        <div>diary day view</div>
    )
}
