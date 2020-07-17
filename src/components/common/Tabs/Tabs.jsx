import React, {useState} from "react";
import c from "./Tabs.module.scss";
import cn from "classnames"
import { useSpring, animated, useTransition, config } from 'react-spring';

// {items[active] && items[active].content}
// items = [ {..., content}, {..., content} ]

const Tabs = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const openTab = idx => {
        setActiveIndex(idx);
    };

    const transitions = useTransition(items[activeIndex], item => item.id, {
        from: { opacity: 0, transform: "scale(0.9)" },
        enter: { opacity: 1, transform: "scale(1)" },
        leave: { opacity: 0, position: "absolute", transform: "scale(0.9)" },
        config: config.gentle,
    });

    return (
        <div className={c.tab}>
            {items.map((item, idx) => (
                <button key={idx} className={cn(c.btn, {[c.btn_active]: idx === activeIndex})}
                        onClick={() => openTab(idx)}
                >{item.title}</button>
            ))}
            <div  className={c.tabContent}>
                {transitions.map(({item, props, key}) => {
                    return <animated.div key={key} style={props}>{item.content}</animated.div>
                })}
            </div>
        </div>
    );
};

export default Tabs;



