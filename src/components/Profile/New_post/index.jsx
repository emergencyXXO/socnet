import React from 'react';
import cls from './style.module.css';
function New_post() {
    return (

        <div className={cls.new__post}>
            <p className="had">My post</p>
            <textarea name="" placeholder="type news" id="" cols="30" rows="10"></textarea>
            <button>Send</button>
        </div>
    )
}

export default New_post;