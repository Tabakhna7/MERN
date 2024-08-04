import React, { useState } from 'react';

const Tabs = () => {
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  const [selectedTab, setSelectedTab] = useState("");

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div>

      <div className='d-flex justify-content-between'>
        {tabs.map((tabName) => (
          <button
            key={tabName}
            className="btn btn-dark m-2 px-5 py-1 btn-lg"
            onClick={() => handleTabClick(tabName)}
          >
            {tabName}
          </button>
        ))}
      </div>

      {selectedTab && (
        <div className="mt-3 border border-secondary text-start" style={{ height: '200px' }}>
          <p className='fw-bold'>{selectedTab} Components ....</p>
        </div>
      )}
    </div>
  );
};

export default Tabs;
