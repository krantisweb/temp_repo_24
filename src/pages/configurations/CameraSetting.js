// import React, { useState } from 'react';
// function CameraSettings() {
//   // State to store the camera RTSP URL
//   const [rtspUrl, setRtspUrl] = useState('https://admin.vinayan@123@8647');

//   // Function to handle changes in the input field
//   const handleInputChange = (e) => {
//     setRtspUrl(e.target.value);
//   };

//   // Function to handle saving the RTSP URL
//   const handleSave = () => {
//     // Add your logic here to save the RTSP URL
//     // For example, you can use a state management library like Redux
//     // to dispatch an action to update the camera setting in your application's state.
//     // Or you can make an API request to save the setting on the server.
//     // This is a placeholder for your actual saving logic.
//     console.log('RTSP URL saved:', rtspUrl);
//   };

//   return (
//     <div className=" Camera-main-page p-4 bg-white rounded-lg " style={{ minHeight: '150px' }}>
//       <div className=" Camera-main mb-4">
//         <label className=" Camera-lable block text-sm font-medium text-gray-700">
//           Camera RTSP Url
//         </label>
//         <input
//           type="text"
//           className=" Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//           placeholder="https://admin.vinayan@123@8647"
//           value={rtspUrl}
//           onChange={handleInputChange}
//         />
//       </div>
//       {/* Save button */}
//       <div className=' Button-camera flex justify-end '>
//       <button
//         onClick={handleSave}
//         className=" Save-button bg-sky-500	 w-20	 h-8  mt-14 font-bold	flex justify-center items-center text-white  w-3/2 p-2 relative rounded-md"
//       >
//         Save
//       </button>
//       </div>
//     </div>
//   );
// }

// export default CameraSettings;