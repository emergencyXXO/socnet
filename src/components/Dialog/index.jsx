import React from 'react';
import cls from './style.module.css';
import User from './User/';
import Message from './Message/';
import NewMessageCont from "./NewMessage/container";

const Dialog = (props) => {

    return (

        <div className={`line ${cls.dialog_area}`}>
            <div className={cls.dialog_list}>
                <p className={cls.had}>List</p>
                {props.UserData.map(el => <User key={el.id} id={el.id} name={el.name}/>)}
            </div>
            <div className={cls.chart_area}>
                <div className={cls.chart_screen}>
                    {props.MessageData.map(el => <Message key={el.id} id={el.id} text={el.text}/>)}
                </div>
                <NewMessageCont/>
            </div>
        </div>
    )
}

export default Dialog;