// import React, { useState } from 'react';

// const ProductModal = ({ isOpen, onClose }) => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     price: '',
//     category: 'Select category',
//     description: '',
//   });

//   const toggleModal = () => {
//     setModalOpen(!isModalOpen);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your logic to handle form submission
//     // You can access the form data from the formData state
//     console.log('Form Submitted:', formData);
//     // Close the modal after submission
//     toggleModal();
//   };

//   return (
//     <div>

//       {isOpen && (
//         <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-50">
//           <div className="relative p-4 w-full max-w-md">
//             {/* Modal content */}
//             <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
//               {/* Modal header */}
//               <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
//                 <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
//                   Create New Product
//                 </h3>
//                 <button
//                   onClick={onClose}
//                   className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
//                 >
//                   <svg
//                     className="w-3 h-3"
//                     aria-hidden="true"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 14 14"
//                   >
//                     <path
//                       stroke="currentColor"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
//                     ></path>
//                   </svg>
//                   <span className="sr-only">Close modal</span>
//                 </button>
//               </div>

//               {/* Modal body */}
//               <form onSubmit={handleSubmit} className="p-4 md:p-5">
//                 {/* Form fields */}
//                 {/* ... */}
//                 <button
//                   type="submit"
//                   className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                 >
//                   <svg
//                     className="me-1 -ms-1 w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 20 20"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
//                       clipRule="evenodd"
//                     ></path>
//                   </svg>
//                   Add new product
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProductModal;

import React, { useState } from "react";

const ProductModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    location: "",
    company_name: "",
    duplicate_time_span:"",
    device_unique_id: "",
    main_url: "",
    substream_url: "",
   
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


    const handleSubmit = async (e) => {
      e.preventDefault();
    
      try {
        const response = await fetch("http://127.0.0.1:5000/save-settings", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
    
        if (response.ok) {
          const data = await response.json();

         
          setFormData({
            location: data.location,
            company_name: data.company_name,
            duplicate_time_span: data.duplicate_time_span,
            device_unique_id: data.device_unique_id,
            main_url: data.main_url,
            substream_url: data.substream_url,
          
          });
          // Close the modal after submission
          onClose();
        } else {
          console.error("Error adding camera");
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };
    

  return (
    <div>
      {isOpen && (
        <div className="fixed top-0 right-0 left-0 z-50 flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="relative p-4 w-full max-w-md">
            {/* Modal content */}
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Configure camera
                </h3>
                <button
                  onClick={onClose}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>

              {/* Modal body */}
              <form onSubmit={handleSubmit} className="p-4 md:p-5">
                {/* Form fields */}
                <div className="">
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Location
                  </label>
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="companyName"
                    className="block text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData. company_name}
                    onChange={(e) =>
                      setFormData({ ...formData, company_name: e.target.value })
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="duplicateTime"
                    className="block text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Duplicate Time
                  </label>
                  <input
                    type="text"
                    id="duplicateTime"
                    name="duplicateTime"
                    value={formData. duplicate_time_span}
                    onChange={(e) =>
                      setFormData({ ...formData,  duplicate_time_span: e.target.value })
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor=" deviceUniqueId"
                    className="block text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Device Unique ID
                  </label>
                  <input
                    type="text"
                    id=" deviceUniqueId"
                    name=" deviceUniqueId"
                    value={formData.  device_unique_id}
                    onChange={(e) =>
                      setFormData({ ...formData,  device_unique_id: e.target.value })
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="">
                  <label
                    htmlFor="mainUrl"
                    className="block text-sm font-medium text-gray-600 dark:text-white"
                  >
                    Main URL
                  </label>
                  <input
                    type="text"
                    id="mainUrl"
                    name="mainUrl"
                    value={formData.main_url}
                    onChange={(e) =>
                      setFormData({ ...formData, main_url: e.target.value })
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="substreamUrl"
                    className="block text-sm font-medium text-gray-600 dark:text-white"
                  >
                  Substream URL
                  </label>
                  <input
                    type="text"
                    id="substreamUrl"
                    name="substreamUrl"
                    value={formData.substream_url}
                    onChange={(e) =>
                      setFormData({ ...formData, substream_url: e.target.value })
                    }
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>
                {/* Add other form fields similarly */}
                <button
                  type="submit"
                  className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductModal;
