import React from 'react';
import cls from './style.module.css';

function New_post(props) {
    let submit = React.createRef();
    let sub_action = () => {
        props.dispatch({type: 'ADD-POST'});

    }

    let text_change = () => {
        let text = submit.current.value;
        props.dispatch({type: 'CHANGE-TEXT-AREA', massage: text});
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