import React from "react";

const TabManager = ({ styles, tabs, activeTab, setActiveTab }) => {
  return (
    <div className={styles.gallery__tab__container}>
      {tabs.map(({ label, value }) => {
        return (
          <div
            key={value}
            onClick={() => setActiveTab(value)}
            className={`
              ${styles.gallery__tabs} ${
              value === activeTab && styles.gallery__selected_tab
            }`}
          >
            {label}
          </div>
        );
      })}
    </div>
  );
};

export default TabManager;
