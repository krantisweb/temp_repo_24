import React, { useState, useEffect } from 'react';

function NetworkSettings() {
  const [isEditing, setIsEditing] = useState(false);
  const [notification, setNotification] = useState(null);
  const [formData, setFormData] = useState({
    ethernet_ip: "",
    router_ip: "",
    domain_address: "",
  });
  const [validationErrors, setValidationErrors] = useState({});

  useEffect(() => {
    // Fetch default settings from the backend when the component mounts
    async function fetchDefaultSettings() {
      try {
        const response = await fetch("http://localhost:5000/network-settings");
        if (response.ok) {
          const data = await response.json();

          setFormData({
            ethernet_ip: data.ethernet_ip,
            router_ip: data.router_ip,
            domain_address: data.domain_address,
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
      const response = await fetch("http://localhost:5000/network-settings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
    <div className="Camera-main-page p-4 bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 gap-4 " style={{ minHeight: '150px' }}>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Ethernet IP
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.ethernet_ip}
          name="EthernetIp"
          onChange={(e) =>
            setFormData({ ...formData, ethernet_ip: e.target.value })
          }
          disabled={!isEditing}
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Router IP
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.router_ip}
          name="RouterIp"
          onChange={(e) =>
            setFormData({ ...formData, router_ip: e.target.value })
          }
          disabled={!isEditing}
        />
      </div>
      <div className="Camera-main mb-4">
        <label className="Camera-lable block text-sm font-medium text-gray-700">
          Domain Address
        </label>
        <input
          type="text"
          className="Camera-url mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring focus:ring-indigo-200"
          placeholder=""
          value={formData.domain_address}
          name="DomainAddress"
          onChange={(e) =>
            setFormData({ ...formData, domain_address: e.target.value })
          }
          disabled={!isEditing}
        />
      </div>
      <div className="Button-camera flex flex-col md:flex-row gap-3 justify-end">
        {isEditing ? (
          <>
            <button
              onClick={handleSave}
              className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-2 relative rounded-md shadow-lg"
            >
              Save
            </button>
            <button
              onClick={handleToggleEdit}
              className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center text-white w-3/2 p-2 md:p-2 relative rounded-md shadow-lg"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={handleToggleEdit}
            className="Save-button bg-sky-500 w-full md:w-20 h-8 mt-4 md:mt-14 font-bold flex justify-center items-center md:p-2 text-white w-3/2 p-2 relative rounded-md shadow-lg"
          >
            Edit
          </button>
        )}
      </div>
      {validationErrors.message && (
        <div className="Notification fixed top-0 left-0 w-full p-4 bg-red-500 text-white font-bold text-center z-50">
          <p>{validationErrors.message}</p>
        </div>
      )}
      {notification && (
        <div className="Notification fixed top-0 left-0 w-full p-4 bg-green-500 text-white font-bold text-center z-50">
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
}

export default NetworkSettings;