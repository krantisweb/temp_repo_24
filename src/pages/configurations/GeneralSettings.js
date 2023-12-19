import React, { useState, useEffect } from "react";
function GeneralSettings() {
  const [isEditing, setIsEditing] = useState();
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    location: "",
    company_name: "",
    duplicate_time_span:"",
    device_unique_id: "",
    main_url: "",
    substream_url: "",
   
    image_resolution: [],
  });
  const imageResolutionData = ["1920x1080", "1280x720", "640x480", "320x240"];
  const [validationErrors, setValidationErrors] = useState({});

 
  useEffect(() => {
    // Fetch default settings from the backend when the component mounts
    async function fetchDefaultSettings() {
      try {
        const response = await fetch("http://localhost:5000/save-settings");
        if (response.ok) {
          const data = await response.json();

         
          setFormData({
            location: data.location,
            company_name: data.company_name,
            duplicate_time_span: data.duplicate_time_span,
            device_unique_id: data.device_unique_id,
            main_url: data.main_url,
            substream_url: data.substream_url,
            image_resolution: data.image_resolution,
          });
        } else {
          console.error("Failed to fetch default settings");
        }
      } catch (error) {
        console.error("Error fetching default settings:", error);
      }
    }

    fetchDefaultSettings();
  }, []); // Empty dependency array ensures this effect runs once after the initial render

  const handleToggleEdit = () => {
    setIsEditing((prevIsEditing) => !prevIsEditing);
    setValidationErrors({});
  };

  const handleSave = async () => {
    // Check if all fields are filled
    const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

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

    try {
      const response = await fetch("http://localhost:5000/save-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
       
      });
      console.log(formData);
      if (response.ok) {
        setNotification("Settings saved successfully");

        // Clear the notification after 3 seconds
        setTimeout(() => {
          setNotification(null);
        }, 3000);
      } else {
        console.error("Failed to save settings");
      }
    } catch (error) {
      console.error("Error saving settings:", error);
    } finally {
      setIsEditing(false);
    }
  };


  return (
    <div
      className="Camera-main-page p-4 bg-white rounded-lg  grid grid-cols-1 md:grid-cols-2 gap-4"
      style={{ minHeight: "150px" }}
    >
      <div className="Camera-main mb-2">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Location
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.location}
          name="location"
          onChange={(e) =>
            setFormData({ ...formData, location: e.target.value })
          }
          disabled={!isEditing} // Disable input field when not editing
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Company name
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.company_name}
          name="companyName"
          // onChange={handleCompanyNameChange}
          onChange={(e) =>
            setFormData({ ...formData, company_name: e.target.value })
          }
          disabled={!isEditing} // Disable input field when not editing
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Duplicate captured time span
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.duplicate_time_span}
          name="captureTime"
          // onChange={handleTimeSpanChange}
          onChange={(e) =>
            setFormData({ ...formData, duplicate_time_span: e.target.value })
          }
          disabled={!isEditing} // Disable input field when not editing
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Device Unique ID
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.device_unique_id}
          name="uniqueId"
          // onChange={handleDeviceUniqueIdChange}
          onChange={(e) =>
            setFormData({ ...formData, device_unique_id: e.target.value })
          }
          disabled={!isEditing} // Disable input field when not editing
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Main URL
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData. main_url}
          name="mainUrl"
          // onChange={handleMainUrlChange}
          onChange={(e) =>
            setFormData({ ...formData,  main_url: e.target.value })
          }
          disabled={!isEditing} // Disable input field when not editing
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Substream URL
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.substream_url}
          name="substreamUrl"
          // onChange={handleSubstreamUrlChange}
          onChange={(e) =>
            setFormData({ ...formData, substream_url: e.target.value })
          }
          disabled={!isEditing} // Disable input field when not editing
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Image Resolution
        </label>
        <select
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          value={formData.image_resolution}
          onChange={(e) =>
            setFormData({ ...formData, image_resolution: e.target.value })
          }
          name="imageResolution"
          disabled={!isEditing}
        >
          {imageResolutionData.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="Button-camera flex flex-col md:flex-row gap-3 justify-end">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2  md:p-4 relative rounded-md shadow-lg"
            >
              Save
            </button>
            <button
              onClick={handleToggleEdit}
              className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14  font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4 relative rounded-md shadow-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleToggleEdit}
            className="Save-button bg-sky-500  w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-4 relative rounded-md shadow-lg"
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
    </div>
  );
}

export default GeneralSettings;







