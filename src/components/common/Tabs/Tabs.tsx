import React, {useState} from "react";
import c from "./Tabs.module.scss";
import cn from "classnames"
import {animated, useTransition, config} from 'react-spring';

type Props = {
    items: Array<{title: string, content: JSX.Element}>
}

const Tabs: React.FC<Props> = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const openTab = (idx: number) => setActiveIndex(idx);

    const transitions = useTransition(items[activeIndex], item => item.title, {
        from: {opacity: 0, position: "absolute", transform: "scale(0.95)"},
        enter: {opacity: 1, position: "static", transform: "scale(1)"},
        leave: {opacity: 0, position: "absolute", transform: "scale(0.95)"},
        config: config.wobbly,
    });

    return (
        <div>
            {items.map((item, idx) => (
                <button key={idx}
                        className={cn(c.btn, {[c.btn_active]: idx === activeIndex})}
                        onClick={() => openTab(idx)}
                >
                    {item.title}
                </button>
            ))}
            <div className={c.tabContent}>
                {transitions.map(({item, props, key}) => (
                    <animated.div key={key} style={props}>{item.content}</animated.div>
                ))}
            </div>
        </div>
    );
};

export default Tabs;



