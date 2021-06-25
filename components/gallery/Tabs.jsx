import React, { useState } from "react";

// Component imports
import TabManager from "./TabManager";
import HaldiGallery from "./HaldiGallery";
import WeddingGallery from "./WeddingGallery";
import ReceptionGallery from "./ReceptionGallery";
import EventReminder from "./EventReminder";

const tabs = [
  { label: "Haldi", value: "haldi" },
  { label: "Wedding", value: "wedding" },
  { label: "Reception", value: "reception" },
];

const Tabs = ({ styles }) => {
  const [activeTab, setActiveTab] = useState("haldi");
  return (
    <div>
      <TabManager
        styles={styles}
        tabs={tabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <EventReminder styles={styles} event={activeTab} />

      {activeTab === "haldi" && <HaldiGallery styles={styles} />}
      {activeTab === "wedding" && <WeddingGallery styles={styles} />}
      {activeTab === "reception" && <ReceptionGallery styles={styles} />}
    </div>
  );
};

export default Tabs;
