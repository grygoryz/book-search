import React from "react";
import c from "./Input.module.scss";

const Input = ({input, ...props}) => {
    return (
        <div className={c.container}>
            <input {...input} {...props}/>
        </div>
    );
};

export default Input;
