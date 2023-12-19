import React, { useState } from 'react';
// import CameraSettings from './CameraSetting'; // Import the CameraSettings component
// import LidarSettings from './LidarSetting';   // Import the LidarSettings component
// import SpeedSettings from './SpeedSetting'; 
import GeneralSettings from './GeneralSettings';
import NetworkSettings from './NetworkSettings';  // Import the SpeedSettings component

function ConfigurationsPage() {
  // State to keep track of the active setting
  const [activeSetting, setActiveSetting] = useState('GeneralSettings'); // Initialize with 'camera'

  // Function to handle button clicks and set the active setting
  const handleButtonClick = (setting) => {
    setActiveSetting(setting);
  };

  // Render the selected setting component
  const renderSettingComponent = () => {
    switch (activeSetting) {
      // case 'camera':
      //   return <CameraSettings />;
      // case 'lidar':
      //   return <LidarSettings />;
      // case 'speed':
      //   return <SpeedSettings />;
        case 'GeneralSettings':
        return <GeneralSettings />;
        case 'NetworkSettings':
        return <NetworkSettings />;
      default:
        return null;
    }
  };

  // Render the configuration page
  return (
    <div className=" Configuration-page  w-full h-screen bg-blue-50 mx-auto p-4">
      

      {/* Card */}
      <div className=" Camera-dash bg-white p-4 rounded-lg shadow-xl w-11/12 mx-auto mt-16 border-t-4 border-red-500">
        {/* Buttons for Camera, Lidar, and Speed settings */}
        <div className=" Camera-routing m-2   grid grid-cols-1 md:grid-cols-2 gap-4 ">
          {/* <button
            onClick={() => handleButtonClick('camera')}
            className={` Camera-route flex-1 bg-[#BE2323] text-white p-2 ${
              activeSetting === 'camera' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          >
            Camera
          </button> */}
          {/* <button
            onClick={() => handleButtonClick('lidar')}
            className={` Lidar-route flex-1 bg-[#BE2323] text-white p-2 ${
              activeSetting === 'lidar' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          >
            Lidar
          </button> */}
          {/* <button
            onClick={() => handleButtonClick('speed')}
            className={`Speed-route flex-1 bg-[#BE2323] text-white p-2 ${
              activeSetting === 'speed' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          >
            Speed
          </button> */}
          <button
            onClick={() => handleButtonClick('GeneralSettings')}
            className={`Generalsettings-route flex-1 bg-[#BE2323] text-white p-2 shadow-lg  rounded-sm ${
              activeSetting === 'GeneralSettings' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          >
            General settings
          </button>
          <button
            onClick={() => handleButtonClick('NetworkSettings')}
            className={`NetworkSettings-route flex-1 bg-[#BE2323] text-white p-2 shadow-lg rounded-sm ${
              activeSetting === 'NetworkSettings' ? 'bg-opacity-100' : 'bg-opacity-50'
            }`}
          >
           Network Settings
          </button>
        </div>

        {/* Render the selected setting component */}
        <div className=" Configuration-main dashboard m-4">{renderSettingComponent()}</div>
      </div>
    </div>
  );
}

export default ConfigurationsPage;