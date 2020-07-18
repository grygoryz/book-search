import React from "react";
import c from "./Preloader.module.scss"
import {animated, useSpring, useTrail} from "react-spring";

const Preloader = () => {

    return <div className={c.container}>
        <div className={c.circle}/>
    </div>
};

export default Preloader;






