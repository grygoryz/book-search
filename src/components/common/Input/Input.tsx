import React from "react";
import c from "./Input.module.scss";
import {WrappedFieldProps} from "redux-form";

const Input: React.FC<WrappedFieldProps> = ({input, ...props}) => {
    return (
        <div className={c.container}>
            <input {...input} {...props}/>
        </div>
    );
};

export default Input;
