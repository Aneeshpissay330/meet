import React, { useState } from 'react';
import './Tabs.css';

interface TabItem {
  title: string;
  component: React.ReactNode;
}

interface TabProps {
  label: string;
  onClick: () => void;
  isActive: boolean;
}

const Tab: React.FC<TabProps> = ({ label, onClick, isActive }) => (
  <div
    className={`tab ${isActive ? 'active' : ''}`}
    onClick={onClick}
  >
    {label}
  </div>
);

interface TabsProps {
  tabs: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div>
      <div className="tabs-container">
        <div className="tabs">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              label={tab.title}
              isActive={index === activeTabIndex}
              onClick={() => handleTabClick(index)}
            />
          ))}
        </div>
      </div>
      <div className="tab-content">
        {tabs[activeTabIndex].component}
      </div>
    </div>
  );
};

export default Tabs;