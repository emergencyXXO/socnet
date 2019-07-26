import React from 'react';
import cls from './style.module.css';
import {BrowserRouter} from "react-router-dom";
import User from './User/';
import Message from './Message/';
import New_message from "./New_message";

const Dialog = (props) => {


    return (
        <BrowserRouter>
            <div className={`line ${cls.dialog_area}`}>
                <div className={cls.dialog_list}>
                    <p className={cls.had}>List</p>
                    {props.users.map(el => <User id={el.id} name={el.name}/>)}

                </div>
                <div className={cls.chart_area}>
                    <div className={cls.chart_screen}>
                        {props.messages.map(el => <Message id={el.id} text={el.text}/>)}
                    </div>
                    <New_message/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Dialog;