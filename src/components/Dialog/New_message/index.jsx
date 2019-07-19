import React from 'react';
import cls from './style.module.css';
const New_message = (props) => {
    let inputValue = React.createRef();
    let newMess = () => {
        alert(inputValue.current.value);
    }
    return (
        <div className={cls.message}>
            <input ref={inputValue} type="text" placeholder="type"/>
            <button onClick={newMess}>submit</button>
        </div>
    )
}

export default New_message;