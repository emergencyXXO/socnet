import React from 'react';
import cls from './style.module.css';


function NewPost(props) {
    let submit = React.createRef();

    return (
        <div className={cls.new__post}>
            <p className="had">My post</p>
            <textarea ref={submit} onChange={() => {
                props.text_change(submit.current.value)
            }} value={props.textArea} placeholder="type news" />
            <button onClick={() => {
                props.sub_action()
            }}>Send
            </button>
        </div>
    )
}

export default NewPost;