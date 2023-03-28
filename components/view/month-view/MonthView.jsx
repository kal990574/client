import React from 'react';
import styles from './MonthView.module.css';
import Calendar from "../../calendar/Calendar";

export default function MonthView({viewContent}) {
    if(viewContent) {
        return (
            <div>calendar month view</div>
        )
    }
    return (
        <div>diary month view</div>
    );
}
