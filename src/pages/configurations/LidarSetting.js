// import React, { useState } from 'react';

// function CameraSettings() {
//   const [rtspUrl, setRtspUrl] = useState('https://admin.vinayan@123@8647');
//   const [triggerMode, setTriggerMode] = useState('auto'); // Initialize with 'auto'

//   const handleInputChange = (e) => {
//     setRtspUrl(e.target.value);
//   };

//   const handleTriggerChange = (e) => {
//     setTriggerMode(e.target.value);
//   };

//   const handleSave = () => {
//     // Add your logic here to save the RTSP URL and trigger mode
//     console.log('RTSP URL saved:', rtspUrl);
//     console.log('Trigger Mode:', triggerMode);
//   };

//   return (
//     <div className=" Lidar-main-page p-4 bg-white rounded-lg" style={{ minHeight: '150px' }}>
//       <div className=" Lidar-main mb-4">
//         <label className=" Lidar-lable block text-sm font-medium text-gray-700">Lidar MAC Address</label>
//         <input
//           type="text"
//           className=" Lidar-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//           placeholder="https://admin.vinayan@123@8647"
//           value={rtspUrl}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div className=" Lidar-dash mb-0">
//         <label className=" Trigger-Mode block text-sm font-medium text-gray-700 ">Trigger Mode</label>
//         <div className=" Lidar-radio flex flex-col">
//           <label className="mr-4 ">
//             <input
//               type="radio"
//               value="auto"
//               checked={triggerMode === 'auto'}
//               onChange={handleTriggerChange}
//             />
//             Auto
//           </label>
//           <label>
//             <input
//               type="radio"
//               value="manual"
//               checked={triggerMode === 'manual'}
//               onChange={handleTriggerChange}
//             />
//             Manual
//           </label>
//         </div>
//       </div>
//       <div className="Lidar-button flex justify-end">
//         <button
//           onClick={handleSave}
//           className=" Save-button bg-sky-500 w-20 h-8 mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 relative  rounded-md"
//         >
//           Save
//         </button>
//       </div>
//     </div>
//   );
// }

// export default CameraSettings;