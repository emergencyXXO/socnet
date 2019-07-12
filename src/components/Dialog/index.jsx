import React from 'react';
import cls from './style.module.css';
import User from './User/';
import Message from './Message/'

const Dialog = () => {
    return (

        <div className={`line ${cls.dialog_area}`}>
            <div className={cls.dialog_list}>
                <p className={cls.had}>List</p>
                <User name="Andrey" />
                <User name="Vasa" />
            </div>
            <div className={cls.chart_area}>
                <div className={cls.chart_screen}>
                    <Message text="mesasdasd"/>
                    <Message text="213123sadasdasd"/>
                </div>
                <div className={cls.message}>
                    <input type="text" placeholder="type"/>
                    <button>submit</button>
                </div>
            </div>
        </div>
    )
}

export default Dialog;