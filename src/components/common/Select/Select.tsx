import React from "react";
import c from "./Select.module.scss"
import {WrappedFieldProps} from "redux-form";

type Props = {
    value: string
    title: string
}
// todo чекнуть потом
const Select: React.FC<WrappedFieldProps & Props> = ({value, children, title, input, ...rest}) => {
    return (
        <div className={c.container}>
            <span className={c.title}>{title}</span>
            <select  {...input} value={value} className={c.select}>
                {children}
            </select>
        </div>
    )
};

export default Select