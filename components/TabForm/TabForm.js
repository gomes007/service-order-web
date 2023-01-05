import {useState} from "react";


const TabForm = ({tabs}) => {

    const [activeTab, setActiveTab] = useState(0);

    return (
        <>
            <div className="form-content">

                <nav className="menuTab">
                    <ul>
                        {tabs.map((tab, index) => (
                            <li key={index} className={activeTab === index ? 'active' : ''}>
                                <a href="#" onClick={() => setActiveTab(index)}>{tab.label}</a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="content">
                    {tabs[activeTab].content}
                </div>

            </div>
        </>
    );
}

export default TabForm
