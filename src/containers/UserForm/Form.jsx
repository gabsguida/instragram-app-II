import React from 'react';

const Form = (props) => {
    return (
        <React.Fragment>
        <label>{props.title}</label>
        <input
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
        />
        </React.Fragment>
    );
}

export default Form;