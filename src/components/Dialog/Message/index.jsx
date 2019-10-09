import React from 'react';
import cls from './style.module.css';
const Message = (props) => {
    return (
        <div className={`line ${cls.chart_item}`}>
            <div className={cls.img}/>
            <p className={cls.text}>{props.text}</p>
        </div>
    )
}

export default Message;