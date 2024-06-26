// src/pages/Register/Calendar.jsx
import React from 'react';
import styled from 'styled-components';

const CalendarContainer = styled.div`
    height: 100%;
    width: 100%;
    max-width: 250px;
    margin: 0;
    margin-top: 40px;
    margin-left: 0px;
    text-align: center;
    background-color: #ffffff;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const CalendarHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #ffffff;
    border-bottom: 1px solid #ddd;
    font-size: 12px;
    font-weight: bold;
    border-radius: 12px 12px 0 0;
`;

const CalendarBody = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 2px;
    padding: 8px;
    margin: 5px;
    font-size: 12px;
    font-weight: bold;
`;

const Day = styled.div`
    background-color: ${(props) => (props.isCurrentDay ? '#FFCC01' : '#fffff')};
    border-radius: 4px;
    text-align: center;
    color: ${(props) => (props.isCurrentDay ? '#f5f5f5' : props.isCurrentMonth ? '#000' : '#ccc')};
    font-size: 12px;
    padding: 1px 0;
`;

const CalendarButton = styled.button`
    background: none;
    border: none;
    cursor: pointer;
    font-size: 16px;
    padding: 5px;
    color: #333;

    &:hover {
        color: #ffcc01;
    }
`;

const Calendar = () => {
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();

    const [month, setMonth] = React.useState(currentMonth);
    const [year, setYear] = React.useState(currentYear);

    const handlePrevMonth = () => {
        if (month === 1) {
            setMonth(12);
            setYear(year - 1);
        } else {
            setMonth(month - 1);
        }
    };

    const handleNextMonth = () => {
        if (month === 12) {
            setMonth(1);
            setYear(year + 1);
        } else {
            setMonth(month + 1);
        }
    }

    const daysInMonth = new Date(year, month, 0).getDate();
    const daysInPrevMonth = new Date(year, month - 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month - 1, 1).getDay();

    return (
        <CalendarContainer>
            <CalendarHeader>
                <CalendarButton onClick={handlePrevMonth}>{'<'}</CalendarButton>
                <div>{`${year}.${month.toString().padStart(2, '0')}`}</div>
                <CalendarButton onClick={handleNextMonth}>{'>'}</CalendarButton>
            </CalendarHeader>
            <CalendarBody>
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day}>{day}</div>
                ))}
                {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                    <Day key={`prev-${index}`} isCurrentMonth={false}>
                        {daysInPrevMonth - firstDayOfMonth + index + 1}
                    </Day>
                ))}

                {Array.from({ length: daysInMonth }).map((_, i) => (
                    <Day key={i+1} isCurrentDay={i + 1 === currentDay && month === currentMonth && year === currentYear} isCurrentMonth={true}>
                        {i + 1}
                    </Day>
                ))}
                {Array.from({ length: (42 - (firstDayOfMonth + daysInMonth)) }).map((_, index) => (
                    <Day key={`next-${index}`} isCurrentMonth={false}>
                        {index + 1}
                    </Day>
                ))}
            </CalendarBody>
        </CalendarContainer>
    );
};

export default Calendar;
