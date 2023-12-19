import axios from "axios";
import React, { useState, useEffect } from "react";
import ProductModal from "./ProductModal";

const StreamingPage = () => {
  const [isProductModalOpen, setProductModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const imageStyle = {
    transform: `scale(${zoomLevel})`,
    transition: "transform 0.3s ease-in-out",
  };

  const toggleProductModal = () => {
    setProductModalOpen(!isProductModalOpen);
    console.log("isProductModalOpen:", isProductModalOpen);
  };
  const getDashboardApi = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://127.0.0.1:5000/");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getDashboardApi();
  }, []);

  const handleZoomIn = async () => {
    try {
      // Call your API for Zoom In here
      // For example:
      const response = await axios.post("http://localhost:5000/zoom-in");
      console.log("Zoom In API Response:", response.data);
      setZoomLevel(zoomLevel + 0.1);
    } catch (error) {
      console.error("Error calling Zoom In API:", error);
    }
  };

  const handleZoomOut = async () => {
    try {
      // Call your API for Zoom Out here
      // For example:
      const response = await axios.post("http://localhost:5000/zoom-out");
      console.log("Zoom Out API Response:", response.data);
      setZoomLevel(zoomLevel - 0.1);
    } catch (error) {
      console.error("Error calling Zoom Out API:", error);
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>Loading......</h1>
      ) : (
        <div className="live-dashboard-container h-screen  w-full overflow-y-hidden my-4 ">
          <div className="card-container overflow-hidden shadow-lg bg-white w-full p-3 flex flex-col justify-center items-center relative">
            <button
              type="button add-camera-button"
              onClick={toggleProductModal}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center absolute top-2 left-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Add Camera
            </button>
            <ProductModal
              isOpen={isProductModalOpen}
              onClose={toggleProductModal}
            />
            {/* zoom button  */}

            <div className="zoom-buttons flex  gap-2">
              <button
                className="text-dark bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setZoomLevel(zoomLevel + 0.1)}
              >
                Zoom In
              </button>
              <button
                className="text-dark bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={() => setZoomLevel(zoomLevel - 0.1)}
              >
                Zoom Out
              </button>
            </div>

            <div className=" camera-feed grid grid-cols-2 gap-2 p-4">
              <div>
                <h2 class="text-xl  text-gray-700">Camera 1</h2>
                <img
                  src={"http://127.0.0.1:5000/video_feed"}
                  alt="Image 1"
                  className="object-cover w-full "
                />
              </div>
              <div>
                <h2 class="text-xl  text-gray-700">Camera 2</h2>
                <img
                  src={"http://127.0.0.1:5000/video_feed"}
                  alt="Image 2"
                  className="object-cover w-full "
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StreamingPage;
