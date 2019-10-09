import React from 'react';
import cls from './style.module.css';
import {Field, reduxForm} from "redux-form";
import {Input} from "../../FormControl";
import {maxLengthCreator, required} from "../../../util/validations/validators";

const maxLengt10 = maxLengthCreator(10);
const MessageForm = (props) => {


    return(
        <form onSubmit={props.handleSubmit}>
            <Field name="message"
                   component={Input}
                   placeholder="type"
                   validate={[required, maxLengt10]}/>
            <button>submit</button>
        </form>
    )
}

const MessageReduxForm = reduxForm({
    form:'newMessageFrom'
})(MessageForm);

const NewMessage = (props) => {
    const onSubmit = (formData) => {
            props.newMess(formData.message);
    }
    return (
        <div className={cls.message}>
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default NewMessage;