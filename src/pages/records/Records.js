//

// import React, { useState, useEffect } from "react";
// import GridView from "./GridView";
// import ModelPage from "./ModelPage";
// import axios from 'axios';

// function Recordspage() {
//   const [imageUrls, setImageUrls] = useState([]);
//   const [recordsData, setRecordsData] = useState([]);
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [columnVisibility, setColumnVisibility] = useState({
//     id: true,
//     "Vehicle Image": true,
//     "Number Plate Image": true,
//     "Created Datetime": true,
//   });
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isGridView, setIsGridView] = useState(true);
//   const [modalData, setModalData] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/image");
//         const data = response.data.data; // Assuming the API response has a 'data' property

//         setImageUrls(data.map(entry => ({
//           id: entry.id,
//           "Vehicle Image": entry.vehicle_image,
//           "Number Plate Image": entry.number_plate_image,
//           "Created Datetime": entry.created_datetime,
//         })));
//         setRecordsData(data);
//         console.log("recordsData:", data);
//       } catch (error) {
//         console.error("Error fetching image URLs:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const itemsPerPage = 10;
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const toggleDropdown = () => {
//     setIsOpen(!isOpen);
//   };

//   const toggleColumn = (columnName) => {
//     setColumnVisibility((prevVisibility) => ({
//       ...prevVisibility,
//       [columnName]: !prevVisibility[columnName],
//     }));
//   };

//   const yourData = [
//     // Sample data objects
//     {
//       id: "",
//       "Vehicle Image": "",
//       "Number Plate Image": "",
//       "Created Datetime": "",
//     },
//     // Add more data objects here...
//   ];

//   const filteredData = yourData.filter((item) =>
//     item["Vehicle Image"].toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const toggleView = () => {
//     setIsGridView(!isGridView);
//   };

//   const openModal = (rowData) => {
//     setModalData(rowData);
//   };

//   const closeModal = () => {
//     setModalData(null);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   return (
//     <div className="w-full h-screen bg-blue-50 mt-20">
//       {/* Dashboard */}

//       <div className="flex flex-col items-center md:flex-row md:justify-start p-2 mt-20 md:space-x-4 font-semibold text-sm md:text-base">
//         {/* Dropdown for column visibility */}
//         <div className="relative group">
//           <button
//             className={`focus:outline-none text-[#BE2323] ${
//               isGridView ? "text-gray-200 p-4" : ""
//             }`}
//             onClick={toggleDropdown}
//             disabled={isGridView}
//           >
//             COLUMNS
//           </button>
//           {isOpen && (
//             <ul className="absolute p-4 border border-gray-400 text-sm bg-gray-300 shadow-md">
//               {Object.keys(columnVisibility).map((column) => (
//                 <li key={column} className="flex items-center space-x-2">
//                   <input
//                     type="checkbox"
//                     checked={columnVisibility[column]}
//                     onChange={() => toggleColumn(column)}
//                   />
//                   <label>{column}</label>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//         {/* Export link */}
//         <div className="text-[#BE2323]">
//           <a
//             href="https://in.docworkspace.com/d/sAG2sc8TP9v6qAdHYidKypxQ"
//             target="_blank"
//             rel="noopener noreferrer"
//             title=" Download the link"
//           >
//             EXPORT
//           </a>
//         </div>

//         {/* Search input */}
//         <div className="text-black">
//           <input
//             type="text"
//             placeholder="Search Vehicle Image"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             className="border rounded p-2"
//           />
//         </div>
//       </div>

//       {/* Toggle between Grid View and Table View */}
//       <span
//         className="m-2 text-white text-md font-semibold bg-sky-500 p-2 rounded-md shadow-lg"
//         target="_blank"
//         rel="noopener noreferrer"
//         title=" Change the table view"
//       >
//         <button onClick={toggleView}>
//           {isGridView ? "TABLE VIEW" : "GRID VIEW"}
//         </button>
//       </span>

//       {/* Display either grid or table view based on the state */}
//       {isGridView ? (
//         <GridView
//           data={filteredData}
//           imageUrls={imageUrls}
//           openModal={openModal}
//         />
//       ) : (
//         <>
//           <table className="w-full border-collapse border shadow-lg bg-gray mt-4">
//             <thead>
//               <tr>
//                 {Object.keys(columnVisibility).map(
//                   (column) =>
//                     columnVisibility[column] && (
//                       <th
//                         key={column}
//                         className="bg-blue-100 p-2 border border-gray-200 text-center"
//                       >
//                         {column}
//                       </th>
//                     )
//                 )}
//               </tr>
//             </thead>
//             <tbody>
//               {imageUrls.slice(startIndex, endIndex).map((imageUrl, index) => (
//                 <tr key={index} onClick={() => openModal(imageUrl)} className="hover:bg-gray-100">
//                   {Object.keys(columnVisibility).map(
//                     (column) =>
//                       columnVisibility[column] && (
//                         <td
//                           key={column}
//                           className="border border-gray-200 text-center object-cover"
//                         >
//                           {column === "Vehicle Image" ? (
//                             <img
//                               src={`http://localhost:5000${imageUrl["Vehicle Image"]}`}
//                               alt={`Image ${index}`}
//                               style={{ maxWidth: "100px", margin: "auto" }}
//                             />
//                           ) : column === "id" ? (
//                             "API coming soon"
//                           ) : (
//                             imageUrl[column]
//                           )}
//                         </td>
//                       )
//                   )}
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {/* Pagination buttons (render only for table view) */}
//           <div className="flex flex-row-reverse mt-4">
//             <button
//               onClick={handleNextPage}
//               disabled={endIndex >= imageUrls.length}
//               className="bg-gray-300 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mx-2 rounded"
//             >
//               Next
//             </button>
//             <button
//               onClick={handlePrevPage}
//               disabled={currentPage === 1}
//               className="bg-gray-300 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mx-2 rounded"
//             >
//               Previous
//             </button>
//           </div>
//         </>
//       )}

//       {modalData && <ModelPage rowData={modalData} onClose={closeModal} />}
//     </div>
//   );
// }

// export default Recordspage;

// import React, { useEffect, useState } from 'react';

// const ImageDisplay = () => {
//   const [imageData, setImageData] = useState([]);

//   useEffect(() => {
//     // Fetch image data from Flask backend
//     fetch('http://localhost:5000/image', {
//       method: 'GET',
//       headers: {
//         'Accept': 'application/json',
//       },
//     })
//       .then(response => response.json())
//       .then(data => setImageData(data.data))
//       .catch(error => console.error('Error fetching image data:', error));
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div>
//       <h1>Image Display</h1>
//       {imageData.map(entry => (
//         <div key={entry.id}>
//           <img src={entry.vehicle_image} alt="Vehicle Image" />
//           <img src={entry.number_plate_image} alt="Number Plate Image" />
//           <p>Created Datetime: {entry.created_datetime}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ImageDisplay;

// Recordspage.js

// import React, { useState, useEffect } from 'react';

// const App = () => {
//   const [images, setImages] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isGridView, setIsGridView] = useState(false);

//   useEffect(() => {
//     const fetchImages = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/image', {
//           method: 'GET',
//           headers: {
//             'Accept': 'application/json',
//           },
//         });

//         const data = await response.json();
//         setImages(data.data);
//       } catch (error) {
//         console.error('Error fetching images:', error);
//       }
//     };

//     fetchImages();
//   }, []);

//   const handleSearch = () => {
//     // Implement your search logic here
//     // Filter the images based on the searchTerm
//     const filteredImages = images.filter(image =>
//       image.ocr_no.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setImages(filteredImages);
//   };

//   const toggleView = () => {
//     setIsGridView(prevState => !prevState);
//   };

//   return (
//     <div className="App bg-blue-50  h-screen overflow-hidden">

//       <div className="flex justify-between items-center mb-4 mt-20 ">
//         <div>
//           <button onClick={toggleView} className="text-white text-md font-semibold bg-slate-400 p-2 rounded-md shadow-lg">
//             {isGridView ? 'Table View' : ' Grid View'}
//           </button>
//         </div>
//         <div className="flex">
//           <input
//             type="text"
//             placeholder="Search by OCR No"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             className="border border-gray-300 px-2 py-1 rounded-md mr-2 shadow md:shadow-lg"
//           />
//           <button onClick={handleSearch} className="text-white text-md font-semibold bg-slate-400 p-2 rounded-md shadow-lg mr-3">
//             Search
//           </button>
//         </div>
//       </div>
//       {isGridView ? (
//         <div className="grid grid-cols-3 gap-4">
//           {images.map((image) => (
//             <div key={image.id} className="bg-white p-4 border border-gray-300 rounded-md">
//               <img src={image.vehicle_image} alt={`Vehicle ${image.id}`} className="w-full h-auto rounded-md" />
//               <img src={image.number_plate_image} alt={`Number Plate ${image.id}`} className="w-24 h-16 p-4" />
//               <p>ID: {image.id}</p>
//               <p>Created Date Time: {image.created_datetime}</p>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <div className="table-container h-full overflow-y-auto">
//           <table className="min-w-full border border-gray-300">
//             <thead className="bg-slate-400 text-white sticky top-0 z-50 ">
//               <tr className="">
//                 <th className="border border-gray-300 p-2 ">ID</th>
//                 <th className="border border-gray-300 p-2">Vehicle Image</th>
//                 <th className="border border-gray-300 p-2">No. Plate Image</th>
//                 <th className="border border-gray-300 p-2">Created Date Time</th>
//                 <th className="border border-gray-300 p-2">Created Date Time</th>
//                 <th className="border border-gray-300 p-2">Created Date Time</th>
//               </tr>
//             </thead>
//             <tbody className="">
//               {images.map((image) => (
//                 <tr key={image.id} className="bg-white  ">
//                   <td className="border border-gray-300 p-2 text-center mx-auto w-8 h-12">{image.id}</td>
//                   <td className="border border-gray-300 p-2 text-center">
//                     <img src={image.vehicle_image} alt={`Vehicle ${image.id}`} className="w-24 h-12 mx-auto" />
//                   </td>
//                   <td className="border border-gray-300 p-2 text-center">
//                     <img src={image.number_plate_image} alt={`Number Plate ${image.id}`} className="w-24 h-12 mx-auto" />
//                   </td>
//                   <td className="border border-gray-300 p-2 mx-auto text-center">{image.created_datetime}</td>
//                   <td className="border border-gray-300 p-2 mx-auto text-center">{image.created_datetime}</td>
//                   <td className="border border-gray-300 p-2 mx-auto text-center">{image.created_datetime}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//         </div>
//       )}
//     </div>
//   );

// };

// export default App;

import React, { useState, useEffect } from "react";
// import { Pagination } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import arrow icons from FontAwesome

const App = () => {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isGridView, setIsGridView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedVehicleImage, setSelectedVehicleImage] = useState(null);
  const [selectedPlateImage, setSelectedPlateImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("http://localhost:5000/image", {
          method: "GET",
          headers: {
            Accept: "application/json",
          },
        });

        const data = await response.json();
        setImages(data.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  const handleSearch = () => {
    const filteredImages = images.filter((image) =>
      image.ocr_no.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setImages(filteredImages);
  };

  const toggleView = () => {
    setIsGridView((prevState) => !prevState);
  };

  const indexOfLastImage = currentPage * itemsPerPage;
  const indexOfFirstImage = indexOfLastImage - itemsPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(images.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (e) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1); // Reset to the first page when changing items per page
  };


  const handleVehicleImageClick = (image) => {
    setSelectedVehicleImage(image);
  };

  const handlePlateImageClick = (image) => {
    setSelectedPlateImage(image);
  };

  const handleCloseZoom = () => {
    setSelectedVehicleImage(null);
    setSelectedPlateImage(null);
  };

  return (
    <div className="App bg-blue-50  h-screen overflow-hidden mx-auto p-4">
      <div className="flex justify-between items-center mb-4 mt-12 ">
        <div>
          <button
            onClick={toggleView}
            className="text-white text-md font-semibold bg-slate-400 p-2 rounded-md shadow-lg"
          >
            {isGridView ? "Table View" : " Grid View"}
          </button>
        </div>
        <div className="flex ">
          <input
            type="text"
            placeholder="Search by OCR No"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 px-2 py-1 rounded-md mr-2 shadow md:shadow-lg  "
          />
          <button
            onClick={handleSearch}
            className="text-white text-md font-semibold bg-slate-400 p-2 rounded-md shadow-lg mr-3"
          >
            Search
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 mb-4 ml-36">
        <div className="flex justify-between  ">
          <label className="mr-2 text-gray-600 text-lg  font-medium	">
            Rows per page:
          </label>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 px-2 py-1 shadow-md bg-slate-400 p-2 rounded-md "
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
      </div>

      {isGridView ? (
        <div className="grid grid-cols-1  md:grid-cols-3 sm:grid-cols-2       gap-4  h-full overflow-y-auto">
          {currentImages.map((image) => (
            <div
              key={image.id}
              className="relative bg-white p-2 border border-gray-300 rounded-md"
            >
             <img
          src={image.vehicle_image}
          alt={`Vehicle ${image.id}`}
          className="w-full h-auto rounded-sm cursor-pointer"
          onClick={() => handleVehicleImageClick(image)}
        />
        <img
          src={image.number_plate_image}
          alt={`Number Plate ${image.id}`}
          className="absolute bottom-16 right-4 w-40 md:w-25 h-25 m-2 border-3 border-blue-600 rounded-sm cursor-pointer"
          onClick={() => handlePlateImageClick(image)}
        />
              <p>ID: {image.id}</p>
              <p>Created Date Time: {image.created_datetime}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="table-container overflow-y-auto"  style={{ height: 430, width: '100%' }}>
          <table className="min-w-full border border-gray-300">
            <thead className="bg-slate-400 text-white top-0 z-50 ">
              <tr className="">
                <th className="border border-gray-300 p-2 ">ID</th>
                <th className="border border-gray-300 p-2">Vehicle Image</th>
                <th className="border border-gray-300 p-2">No. Plate Image</th>
                <th className="border border-gray-300 p-2">
                  Created Date Time
                </th>
                <th className="border border-gray-300 p-2">
                  Created Date Time
                </th>
                <th className="border border-gray-300 p-2">
                  Created Date Time
                </th>
              </tr>
            </thead>
            <tbody className="">
              {currentImages.map((image) => (
                <tr key={image.id} className="bg-white  ">
                  <td className="border border-gray-300 p-2 text-center mx-auto w-8 h-12">
                    {image.id}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                  <img
                      src={image.vehicle_image}
                      alt={`Vehicle ${image.id}`}
                      className="w-24 h-12 mx-auto cursor-pointer"
                      onClick={() => handleVehicleImageClick(image)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                  <img
                      src={image.number_plate_image}
                      alt={`Number Plate ${image.id}`}
                      className="w-24 h-12 mx-auto cursor-pointer"
                      onClick={() => handlePlateImageClick(image)}
                    />
                  </td>
                  <td className="border border-gray-300 p-2 mx-auto text-center">
                    {image.created_datetime}
                  </td>
                  <td className="border border-gray-300 p-2 mx-auto text-center">
                    {image.created_datetime}
                  </td>
                  <td className="border border-gray-300 p-2 mx-auto text-center">
                    {image.created_datetime}
                  </td>
                  
                </tr>
                
              ))}
              <div></div>
            </tbody>
          </table>
        </div>
      )}
 {/* Zoomed number plate image */}
 {selectedPlateImage && (
        <div className="fixed inset-0 flex items-center justify-center" onClick={handleCloseZoom}>
          <div className="max-w-screen-lg max-h-screen p-1 bg-white rounded-lg overflow-hidden">
            <img
              src={selectedPlateImage.number_plate_image}
              alt={`Zoomed Plate Image ${selectedPlateImage.id}`}
              className="w-72 h-auto mx-auto"
            />
            <button
              onClick={handleCloseZoom}
              className="absolute top-0 right-0 m-2 text-xl font-bold rounded-full bg-gray-200 w-11 h-11"
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Zoomed vehicle image */}
      {selectedVehicleImage && (
        <div className="fixed inset-0 flex items-center justify-center" onClick={handleCloseZoom}>
          <div className="max-w-screen-lg max-h-screen p-1 bg-white rounded-lg overflow-hidden">
            <img
              src={selectedVehicleImage.vehicle_image}
              alt={`Zoomed Vehicle Image ${selectedVehicleImage.id}`}
              className="w-[45rem]  h-auto mx-auto"
            />
            <button
              onClick={handleCloseZoom}
              className="absolute top-0 right-0 m-2 text-xl font-bold rounded-full bg-gray-200 w-11 h-11"
            >
              X
            </button>
          </div>
        </div>
      )}
      <div className="flex justify-between mt-4 absolute bottom-0 right-0 mb-4 mr-8 ">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="text-white text-md font-semibold bg-slate-400 p-2 rounded-md shadow-lg mr-2"
        >
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNextPage}
          disabled={currentPage === Math.ceil(images.length / itemsPerPage)}
          className="text-white text-md font-semibold bg-slate-400 p-2 rounded-md shadow-lg"
        >
          <FaChevronRight />
        </button>
      </div>


      
    </div>
  );
};

export default App;
