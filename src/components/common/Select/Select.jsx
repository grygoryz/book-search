import React from "react";
import c from "./Select.module.scss"

const Select = ({value, children, title, input}) => {
    return (
        <div>
            <span className={c.title}>{title}</span>
            <select {...input} value={value} className={c.select}>
                {children}
            </select>
        </div>
    )
};

export default Select