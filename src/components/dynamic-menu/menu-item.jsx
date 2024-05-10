import { useState } from "react";
import MenuList from "./menu-list";
import { FaPlus, FaMinus} from 'react-icons/fa';
import './styles.css';

export default function MenuItem({item}) {

    const [showChildren, setShowChildren] = useState({});

    function toggle(label) {
        setShowChildren({
            ...showChildren,
            [label]: !showChildren[label]
        })
    }

    return <li>
        <div className="menu-item">
            <p>{item.label}</p>
            {
                item && item.children && item.children.length ? <span onClick={() => toggle(item.label)}>
                    {
                        showChildren[item.label] ? <FaMinus /> : <FaPlus />
                    }
                    </span> : null
            }
        </div>
        
        {
            item && item.children && item.children.length > 0 && showChildren[item.label] ?
            <MenuList list={item.children} />
            : null
        }
    </li>
}