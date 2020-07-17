import React, {useState} from "react";
import c from "./Tabs.module.scss";
import cn from "classnames"

const Tabs = ({items}) => {
    const [active, setActive] = useState(0);

    const openTab = idx => setActive(idx);

    return (
        <div className={c.tab}>
            {items.map((item, idx) => (
                <button key={idx} className={cn(c.btn, {[c.btn_active]: idx === active})}
                        onClick={() => openTab(idx)}
                >{item.title}</button>
            ))}
            <div className={c.tabContent}>
                {items[active] && items[active].content}
            </div>
        </div>
    );
};

export default Tabs;






