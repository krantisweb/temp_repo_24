// import React, { useState, useEffect } from "react";
// function Recordingconfg() {
//   const [isEditing, setIsEditing] = useState();
//   const [notification, setNotification] = useState(null);
//   const [validationErrors, setValidationErrors] = useState({});

//   const [isEnabled, setIsEnabled] = useState(true);
//   const [formData, setFormData] = useState({
//     frame_rate: [],
//     water_mark: "",
//     color_mode: "",
//     resolution: [],
//   });
//   const FramerateData = ["3", "4", "5", "6", "7", "8", "9", "10"];
//   const ResolutionData = ["1920x1080", "1280x720", "640x480", "320x240"];
//   const Color_ModeData = ['RGB' , 'Grayscale'];

//   useEffect(() => {
//     // Fetch default settings from the backend when the component mounts
//     async function fetchDefaultSettings() {
//       try {
//         const response = await fetch("http://localhost:5000/api/settings");
//         if (response.ok) {
//           const data = await response.json();

//           setFormData({
//             frame_rate: data.frame_rate,
//             water_mark: data.water_mark,
//             color_mode: data.color_mode,
//             resolution: data.resolution,
//           });
//         } else {
//           console.error("Failed to fetch default settings");
//         }
//       } catch (error) {
//         console.error("Error fetching default settings:", error);
//       }
//     }

//     fetchDefaultSettings();
//   }, []); // Empty dependency array ensures this effect runs once after the initial render

//   const handleToggleEdit = () => {
//     setIsEditing((prevIsEditing) => !prevIsEditing);
//     setValidationErrors({});
//   };

//   const handleSave = async () => {
//     // Check if all fields are filled
//     const isFormValid = Object.values(formData).every((value) => typeof value === 'string' && value.trim() !== '');

//     if (!isFormValid) {
//       // Display validation errors in red notification field for 3 seconds
//       setValidationErrors({
//         message: "Please fill in all fields",
//       });
  
//       setTimeout(() => {
//         setValidationErrors({});
//       }, 3000);
  
//       return;
//     }

//     setIsEditing((prevIsEditing) => !prevIsEditing);

//     try {
//       const response = await fetch("http://localhost:5000/api/settings", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setNotification("Settings saved successfully");

//         // Clear the notification after 3 seconds
//         setTimeout(() => {
//           setNotification(null);
//         }, 3000);
//       } else {
//         console.error("Failed to save settings");
//       }
//     } catch (error) {
//       console.error("Error saving settings:", error);
//     } finally {
//       setIsEditing(false);
//     }
//   };
 
//   return (
//     <div
//       className="Camera-main-page p-4 bg-white rounded-lg  grid grid-cols-1 md:grid-cols-2 gap-4"
//       style={{ minHeight: "150px" }}
//     >
//       <div className="Camera-main mb-4">
//         <label className="Camera-lable block text-sm font-medium text-gray-700">
//           Frame rate
//         </label>
//         <select
//           className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//           value={formData.frame_rate}
//           onChange={(e) =>
//             setFormData({ ...formData, frame_rate: e.target.value })
//           }
//           name="frame_rate"
//           disabled={!isEditing}
//         >
//           {FramerateData.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//       <div className="Camera-main mb-4">
//         <label className="Camera-lable block text-sm font-medium text-gray-700">
//           Water Mark
//         </label>
//         <input
//           type="text"
//           className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//           placeholder=""
//           value={formData.water_mark}
//           name=" water_mark"
//           // onChange={handleCompanyNameChange}
//           onChange={(e) =>
//             setFormData({ ...formData, water_mark: e.target.value })
//           }
//           disabled={!isEditing} // Disable input field when not editing
//         />
//       </div>
//       <div className="Camera-main mb-4">
//         <label className="Camera-lable block text-sm font-medium text-gray-700">
//            Color Mode
//         </label>
//         <select
//           className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//           value={formData. color_mode}
//           onChange={(e) =>
//             setFormData({ ...formData,  color_mode: e.target.value })
//           }
//           name=" color_mode"
//           disabled={!isEditing}
//         >
//           { Color_ModeData.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
     
//       <div className="Camera-main mb-4">
//         <label className="Camera-lable block text-sm font-medium text-gray-700">
//           Resolution
//         </label>
//         <select
//           className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
//           value={formData.resolution}
//           onChange={(e) =>
//             setFormData({ ...formData, resolution: e.target.value })
//           }
//           name="resolution"
//           disabled={!isEditing}
//         >
//           {ResolutionData.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>

//       <div className="Camera-main mb-4">
//         <label className="Camera-lable block text-sm font-medium text-gray-700">
//           Enable/Disable Video Storage
//         </label>
//         <div className="flex items-center mt-1">
//           <input
//             type="checkbox"
//             checked={isEnabled}
//             onChange={() => setIsEnabled(!isEnabled)}
//             className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
//             disabled={!isEditing}
//           />
//           <span className="ml-2 text-sm text-gray-600">
//             {isEnabled ? "Enabled" : "Disabled"}
//           </span>
//         </div>
//       </div>

//       <div className="Button-camera flex flex-col md:flex-row gap-3 justify-start">
//         {isEditing ? (
//           <>
//             <button
//               onClick={handleSave}
//               className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4  relative rounded-md shadow-lg"
//             >
//               Save
//             </button>
//             <button
//               onClick={handleToggleEdit}
//               className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4  relative rounded-md shadow-lg"
//             >
//               Cancel
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={handleToggleEdit}
//             className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14  font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4  relative rounded-md shadow-lg"
//           >
//             Edit
//           </button>
//         )}
//       </div>
//       {validationErrors.message && (
//         <div className="Notification fixed top-0 left-0 w-full p-4 bg-red-500 text-white font-bold text-center z-50">
//           <p className="text-sm md:text-base">{validationErrors.message}</p>
//         </div>
//       )}
//       {notification && (
//         <div className="Notification fixed top-0 left-0 w-full p-4 bg-green-500 text-white font-bold text-center z-50">
//           <p className="text-sm md:text-base">{notification}</p>
//         </div>
//       )}
//             <VideoFolder videos={videoData} isEnabled={isEnabled} />
//     </div>
//   );
// }

// export default Recordingconfg;











import React, { useState, useEffect } from "react";
import VideoFolder from "./RecordingLogs";


function Recordingconfg() {
  const [isEditing, setIsEditing] = useState();
  const [notification, setNotification] = useState(null);
  const [validationErrors, setValidationErrors] = useState({});

  const [isEnabled, setIsEnabled] = useState(true);
  const [videoData, setVideoData] = useState([]);
  const [formData, setFormData] = useState({
    frame_rate: [],
    water_mark: "",
    color_mode: "",
    resolution: [],
  });
  const FramerateData = ["3", "4", "5", "6", "7", "8", "9", "10"];
  const ResolutionData = ["1920x1080", "1280x720", "640x480", "320x240"];
  const Color_ModeData = ['RGB' , 'Grayscale'];

  const handleToggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    setValidationErrors({});
  };

  const handleSave = async () => {
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => typeof value === 'string' && value.trim() !== '');

    if (!isFormValid) {
      // Display validation errors in red notification field for 3 seconds
      setValidationErrors({
        message: "Please fill in all fields",
      });
  
      setTimeout(() => {
        setValidationErrors({});
      }, 3000);
  
      return;
    }

    setIsEditing((prevIsEditing) => !prevIsEditing);

  
   // TO HANDLE POST REQUEST
const handleSaveSettings = async () => {
  if (isEnabled) {
    try {
      const response = await fetch("http://localhost:5000/api/settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          frame_rate: formData.frame_rate,
          width: formData.resolution.split("x")[0],  // Extract width from resolution
          height: formData.resolution.split("x")[1],  // Extract height from resolution
          watermark: formData.water_mark,
          color_mode: formData.color_mode,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.message); // Log the response message

        setNotification("Settings saved successfully");

        setTimeout(() => {
          setNotification(null);
        }, 3000);
      } else {
        const errorData = await response.json();
        console.error("Failed to save settings:", errorData.message);
      }
    } catch (error) {
      console.error("Error saving settings:", error);
    } finally {
      setIsEditing(false);
    }
  }
};

  };


 // TO HANDLE GET REQUEST
const handleStartRecording = async () => {
  try {
    const response = await fetch("http://localhost:5000/api/settings", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      const data = await response.json();
      console.log(data.message); // Log the response message
    } else {
      console.error("Failed to stop recording");
    }
  } catch (error) {
    console.error("Error stopping recording:", error);
  }
};

 
  return (
    <div
      className="Camera-main-page p-4 bg-white rounded-lg  grid grid-cols-1 md:grid-cols-2 gap-4"
      style={{ minHeight: "150px" }}
    >
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Frame rate
        </label>
        <select
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          value={formData.frame_rate}
          onChange={(e) =>
            setFormData({ ...formData, frame_rate: e.target.value })
          }
          name="frame_rate"
          disabled={!isEditing}
        >
          {FramerateData.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Water Mark
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.water_mark}
          name=" water_mark"
          // onChange={handleCompanyNameChange}
          onChange={(e) =>
            setFormData({ ...formData, water_mark: e.target.value })
          }
          disabled={!isEditing} // Disable input field when not editing
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
           Color Mode
        </label>
        <select
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          value={formData. color_mode}
          onChange={(e) =>
            setFormData({ ...formData,  color_mode: e.target.value })
          }
          name=" color_mode"
          disabled={!isEditing}
        >
          { Color_ModeData.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
     
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Resolution
        </label>
        <select
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          value={formData.resolution}
          onChange={(e) =>
            setFormData({ ...formData, resolution: e.target.value })
          }
          name="resolution"
          disabled={!isEditing}
        >
          {ResolutionData.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Enable/Disable Video Storage
        </label>
        <div className="flex items-center mt-1">
          <input
            type="checkbox"
            checked={isEnabled}
            onChange={() => setIsEnabled(!isEnabled)}
            className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out"
            disabled={!isEditing}
          />
          <span className="ml-2 text-sm text-gray-600">
            {isEnabled ? "Enabled" : "Disabled"}
          </span>
        </div>
      </div>

      <div className="Button-camera flex flex-col md:flex-row gap-3 justify-start">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4  relative rounded-md shadow-lg"
            >
              Save
            </button>
            <button
              onClick={handleToggleEdit}
              className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4  relative rounded-md shadow-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleToggleEdit}
            className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14  font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4  relative rounded-md shadow-lg"
          >
            Edit
          </button>
        )}
      </div>
      {validationErrors.message && (
        <div className="Notification fixed top-0 left-0 w-full p-4 bg-red-500 text-white font-bold text-center z-50">
          <p className="text-sm md:text-base">{validationErrors.message}</p>
        </div>
      )}
      {notification && (
        <div className="Notification fixed top-0 left-0 w-full p-4 bg-green-500 text-white font-bold text-center z-50">
          <p className="text-sm md:text-base">{notification}</p>
        </div>
      )}
            <VideoFolder videos={videoData} isEnabled={isEnabled} />
    </div>
  );
}

export default Recordingconfg;











