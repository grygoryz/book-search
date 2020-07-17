import React from "react";
import c from "./ButtonLink.module.scss";

const ButtonLink = ({title, link}) => {

    return <a target="_blank" className={c.button} href={link}>{title}</a>
    ;
};

export default ButtonLink;






