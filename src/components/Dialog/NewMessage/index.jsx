import React from 'react';
import cls from './style.module.css';



const NewMessage = (props) => {
    let inputValue = React.createRef();

    let  newMess = () => {
        props.newMess();
    }
    let text_change = () => {
        let text = inputValue.current.value;
        props.text_change(text);

    }
    return (
        <div className={cls.message}>
            <input ref={inputValue} onChange={text_change} value={props.inputArea} type="text" placeholder="type"/>
            <button onClick={newMess}>submit</button>
        </div>
    )
}

export default NewMessage;