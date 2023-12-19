import React, { useState } from 'react';
import Recordingconfg from './Recordingconfg';
import RecordingLogs from './RecordingLogs';  // Import the SpeedSettings component

function ConfigurationsPage() {
  // State to keep track of the active setting
  const [activeSetting, setActiveSetting] = useState('Recordingconfg'); // Initialize with 'camera'

  // Function to handle button clicks and set the active setting
  const handleButtonClick = (setting) => {
    setActiveSetting(setting);
  };

  // Render the selected setting component
  const renderSettingComponent = () => {
    switch (activeSetting) {
        case 'Recordingconfg':
        return <Recordingconfg />;
        case 'RecordingLogs':
        return <RecordingLogs />;
      default:
        return null;
    }
  };

  // Render the configuration page
  return (
    <div className=" Configuration-page p-2 w-full h-screen bg-blue-50 mx-auto p-4 ">
     

      {/* Card */}
      <div className=" Camera-dash bg-white p-4 rounded-lg  w-11/12 mx-auto mt-20 shadow-xl border-t-4 border-red-500">
        {/* Buttons for Camera, Lidar, and Speed settings */}
        <div className=" Camera-routing m-2   grid grid-cols-1 md:grid-cols-2 gap-4">
       
          <button
            onClick={() => handleButtonClick('Recordingconfg')}
            className={`Recordingconfg-route flex-1 bg-[#BE2323] text-white p-2 shadow-lg  rounded-sm  ${
              activeSetting === 'Recordingconfg' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          >
            Recording Configuration
          </button>
          <button
            onClick={() => handleButtonClick('RecordingLogs')}
            className={`RecordingLogs-route flex-1 bg-[#BE2323] text-white p-2 shadow-lg  rounded-sm  ${
              activeSetting === 'RecordingLogs' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          >
           Recording Logs
          </button>
        </div>

        {/* Render the selected setting component */}
        <div className=" Configuration-main dashboard m-4">{renderSettingComponent()}</div>
      </div>
    </div>
  );
}

export default ConfigurationsPage;







