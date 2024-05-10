import { useState } from "react"
import './tabs.css'


export default function Tabs({tabsData, onChange}) {

    const [tabIndex, setTabIndex] = useState(0);

    function tabClick(index) {
        setTabIndex(index);
        onChange(index);
    }

    return <div className="tabs-container">
        <div className="header">
        {
            tabsData.map((item,index) => (
                <div className={`item ${tabIndex === index ? 'active': ''}`} onClick={() => tabClick(index)} key={item.label}>
                    <span className="label">{item.label}</span>
                </div>
            ))
        }
        </div>
        <div className="content">
        {
            tabsData[tabIndex] && tabsData[tabIndex].content
        }
        </div>
    </div>
}