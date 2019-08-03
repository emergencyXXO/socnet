import React from 'react';
import cls from './style.module.css';
import {AddPostActionCreator, TextChangeActionCreator} from "../../../reducer/ProfilePageReducer";




function New_post(props) {
    let submit = React.createRef();
    
    let sub_action = () => {
        props.dispatch(AddPostActionCreator());

    }

    let text_change = () => {
        let text = submit.current.value;
        props.dispatch(TextChangeActionCreator(text));
    }

    return (
        <div className={cls.new__post}>
            <p className="had">My post</p>
            <textarea ref={submit} onChange={text_change} value={props.textArea} placeholder="type news" ></textarea>
            <button onClick={sub_action}>Send</button>
        </div>
    )
}

export default New_post;