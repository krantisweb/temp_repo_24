import React, { useState, useEffect } from "react";
import Modal from "react-modal";

function GridView({ imageUrls }) {
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);

  useEffect(() => {
    // Simulate a delay (you can replace this with your actual data fetching logic)
    const fetchData = async () => {
      try {
        // Your data fetching logic here

        // Simulate a delay of 2 seconds
        await new Promise((resolve) => setTimeout(resolve, 2000));

        // Set loading to false once data is fetched
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the current page items
  const currentItems = imageUrls.slice(startIndex, endIndex);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImageUrl(imageUrl);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedImageUrl(null);
    setModalIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center p-2">
      {loading ? (
        // Show loading text when data is still loading
        <p className="text-xl text-shadow-lg text-[#BE2323]">Loading.....</p>
      ) : (
        // Show grid view when data is loaded
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 ">
            {currentItems.map((imageUrl, index) => (
              <div
                key={index}
                className="border-2  p-2 m-2 rounded-md shadow-lg bg-gray-100"
                onClick={() => handleImageClick(imageUrl)}
              >
                <div style={{ position: "relative" }}>
                  <img
                    src={`http://127.0.0.1:5000${imageUrl}`}
                    alt={`Image ${index}`}
                    className="mb-4 cursor-pointer"
                  />
                  {/* Add your additional content here */}
                  {/* For example, the OCR information */}
                  <div className="absolute bottom-2 left-3 bg-opacity-50 bg-black text-white p-3 text-base sm:text-sm md:text-md lg:text-lg xl:text-xl">
                    OCR: YourOCRValue
                  </div>
                </div>
                {/* Additional information, e.g., ID and Timestamp */}
                <div className="w-60 md:flex-row md:justify-between">
                  <p>ID: YourIDValue</p>
                  <p>Time: YourTimestampValue</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-row-reverse mt-4">
            <button
              onClick={handleNextPage}
              disabled={endIndex >= imageUrls.length}
              className="bg-gray-300 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mx-2 rounded"
            >
              Next
            </button>
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="bg-gray-300 hover:bg-gray-300 text-gray-600 font-bold py-2 px-4 mx-2 rounded"
            >
              Previous
            </button>
          </div>

          {/* Modal for displaying the enlarged image */}
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Enlarged Image"
          >
            <button onClick={handleCloseModal}>Close</button>
            {selectedImageUrl && (
              <img
                src={`http://127.0.0.1:5000${selectedImageUrl}`}
                alt="Enlarged Image"
              />
            )}
          </Modal>
        </div>
      )}
    </div>
  );
}

export default GridView;
