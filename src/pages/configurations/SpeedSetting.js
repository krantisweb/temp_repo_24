// import React, { useState } from "react";

// function SpeedSettings() {
//   // State to keep track of the speed value for each vehicle
//   const [speedCAR, setSpeedCAR] = useState(50);
//   const [speedBIKE, setSpeedBIKE] = useState(50);
//   const [speedAUTO, setSpeedAUTO] = useState(50);
//   const [speedPICKUP, setSpeedPICKUP] = useState(50);
//   const [speedVAN, setSpeedVAN] = useState(50);
//   const [speedMISCELLANEOUS, setSpeedMISCELLANEOUS] = useState(50);

//   // Function to handle changes in each slider
//   const handleSpeedChange = (vehicle, event) => {
//     const newSpeed = parseInt(event.target.value, 10);
//     switch (vehicle) {
//       case "CAR":
//         setSpeedCAR(newSpeed);
//         break;
//       case "BIKE":
//         setSpeedBIKE(newSpeed);
//         break;
//       case "AUTO":
//         setSpeedAUTO(newSpeed);
//         break;
//       case "PICKUP":
//         setSpeedPICKUP(newSpeed);
//         break;
//       case "VAN":
//         setSpeedVAN(newSpeed);
//         break;
//       case "MISCELLANEOUS":
//         setSpeedMISCELLANEOUS(newSpeed);
//         break;
//       default:
//         break;
//     }
//   };
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
//     <div className=" Speed-vehicle mt-10">
//       {[
//         { vehicle: "CAR", label: "CAR" },
//         { vehicle: "BIKE", label: "BIKE" },
//         { vehicle: "AUTO", label: "AUTO" },
//         { vehicle: "PICKUP", label: "PICKUP" },
//         { vehicle: "VAN", label: "VAN" },
//         { vehicle: "MISCELLANEOUS", label: "MISCELLANEOUS" },
//       ].map((item) => (
//         <div key={item.vehicle} className="flex items-center justify-center gap-4">
//           <div className="w-full text-center flex gap-3">
//             <label htmlFor={`speedSlider${item.vehicle}`} className="text-lg font-medium">
//               {item.label}
//             </label>
//             <input
//               type="range"
//               id={`speedSlider${item.vehicle}`}
//               name={`speedSlider${item.vehicle}`}
//               min="0"
//               max="200"
//               value={eval(`speed${item.vehicle}`)}
//               onChange={(event) => handleSpeedChange(item.vehicle, event)}
//               className=" Speed-range w-full mt-2"
//             />
//           </div>
//           <div className=" Speed-box w-12 text-center">
//             <input
//               type="text"
//               id={`speedValue${item.vehicle}`}
//               name={`speedValue${item.vehicle}`}
//               value={eval(`speed${item.vehicle}`)}
//               readOnly
//               className=" Speed-value w-full mt-2 px-2 py-1 border rounded"
//             />
//           </div>
//         </div>
//       ))}
//       <div className=' Button-Lidar flex justify-end '>
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

// export default SpeedSettings;