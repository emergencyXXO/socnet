import React from 'react';
import cls from './style.module.css';
import {AddMassageActionCreator, InputChangeActionCreator} from "../../../Store";

const New_message = (props) => {
    let inputValue = React.createRef();

    let  newMess = () => {
        props.dispatch(AddMassageActionCreator());
    }
    let text_change = () => {
        let text = inputValue.current.value;
        props.dispatch(InputChangeActionCreator(text));

    }
    return (
        <div className={cls.message}>
            <input ref={inputValue} onChange={text_change} value={props.inputArea} type="text" placeholder="type"/>
            <button onClick={newMess}>submit</button>
        </div>
    )
}

export default New_message;