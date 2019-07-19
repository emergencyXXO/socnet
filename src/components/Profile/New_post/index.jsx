import React from 'react';
import cls from './style.module.css';
function New_post(props) {
    let submit = React.createRef();
    let sub_action = () =>{

        let text = submit.current.value;
        props.addPost(text);
        submit.current.value = '';

    }

    return (

        <div className={cls.new__post}>
            <p className="had">My post</p>
            <textarea ref={submit}  placeholder="type news" id="" cols="30" rows="10"></textarea>
            <button onClick={sub_action}>Send</button>
        </div>
    )
}

export default New_post;