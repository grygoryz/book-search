import React from "react";
import c from "./ButtonLink.module.scss";

type Props = {
    title: string
    link: string
}

const ButtonLink: React.FC<Props> = ({title, link}) => {
    return <a target="_blank" rel="noopener noreferrer" className={c.button} href={link}>{title}</a>;
};

export default ButtonLink;






