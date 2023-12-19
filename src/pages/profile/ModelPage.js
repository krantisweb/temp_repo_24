import React, { useRef } from "react";
import html2canvas from "html2canvas";
function ModelPage({ rowData, onClose }) {
  const modalContainerRef = useRef(null);
  const handlePrint = () => {
    window.print(); // Trigger the browser's print functionality
  };

  function handleDownload() {
    const modalContainer = modalContainerRef.current;

    // Hide the download and print buttons
    const downloadButton = modalContainer.querySelector(
      ".modal-download-button"
    );
    const printButton = modalContainer.querySelector(".modal-print-button");
    if (downloadButton) downloadButton.style.display = "none";
    if (printButton) printButton.style.display = "none";
    const closeButton = modalContainer.querySelector(".modal-close-button");
    if (closeButton) closeButton.style.display = "none";

    html2canvas(modalContainer).then(function (canvas) {
      // Convert the screenshot to a data URL
      const dataURL = canvas.toDataURL("image/png");

      // Create an anchor element to trigger the download
      const anchor = document.createElement("a");
      anchor.setAttribute("href", dataURL);
      anchor.setAttribute("download", "modal-screenshot.png"); // Set the filename

      // Trigger a click event on the anchor element
      anchor.style.display = "none";
      document.body.appendChild(anchor);
      anchor.click();

      // Clean up and show the buttons again
      document.body.removeChild(anchor);
      if (downloadButton) downloadButton.style.display = "block";
      if (printButton) printButton.style.display = "block";

      // Close the modal using the onDownload callback
      onClose();
    });
  }

  return (
    <div className="fixed inset-0 flex items-center   justify-center z-50 bg-black bg-opacity-50">
      <div
        className="modal-container bg-white flex flex-col items-center gap-6 w-1/3 shadow-lg rounded-lg  sm:p-5  sm:m-2"
        ref={modalContainerRef}
      >
        <div className="flex flex-col ">
          <div className="modal-header">
            <h2 className="modal-title font-bold flex justify-center items-center h-8 bg-gray-100 rounded">
              Recorded Data
            </h2>
          </div>

          <div className="modal-details flex flex-row m-2 ">
            <p className="font-semibold w-2/4">name: </p>
            <p className="text-gray-800 w-3/4 ">{rowData.name}</p>
          </div>

          <div className="modal-details flex flex-row m-2 ">
            <p className="font-semibold w-2/4"> name:</p>
            <p className="text-gray-800 w-3/4 ">{rowData.nativeName}</p>
          </div>

          <div className="modal-details flex flex-row m-2 ">
            <p className="font-semibold w-2/4">name: </p>
            <p className="text-gray-800 w-3/4 ">{rowData.OCR}</p>
          </div>

          <div className="modal-details flex flex-row m-2 ">
            <p className="font-semibold w-2/4">name:</p>
            <p className="text-gray-800 w-3/4 ">{rowData.capital}</p>
          </div>
        </div>
        <div className="modal-footer space-x-2">
          <button
            className="modal-print-button bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={handlePrint}
          >
            Print
          </button>
          <button
            className="modal-download-button bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
            onClick={handleDownload}
          >
            Download
          </button>
          <button
            className="modal-close-button bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 mr-4"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModelPage;