import React, { useState, useCallback } from 'react';
import { Calendar } from '@natscale/react-calendar';

function TodoCalendar() {
    const [calendar, setCalendar] = useState();
    const onChange = useCallback( (calendar) => {
        setCalendar(calendar);
    }, [setCalendar]);

    return (
        <div>
            <h1>Calendar</h1>
            <Calendar calendar={calendar} onChange={onChange} />
        </div>
    )
}

export default TodoCalendar;