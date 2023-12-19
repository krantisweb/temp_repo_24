import React from "react";
import VinayanLogo from "../../assets/images/vinayan-logo.png"
function Documents() {
  // Create an array of screenshot image filenames
  const screenshotFilenames = [
    "slide1.png",
    "slide2.png",
    "slide3.png",
    "slide4.png",
    "slide5.png",
    "slide6.png",
    "slide7.png",
    "slide8.png",
    "slide9.png",
    "slide10.png",
    "slide11.png",
    "slide13.png",
    "slide14.png",
    "slide15.png",
    "slide16.png",
    "slide17.png",
    "slide18.png",
    "slide19.png",
    "slide20.png",
    "slide21.png",
    // Add the filenames for all 19 screenshots here
  ];

  return (
    <div className=" w-full bg-blue-50">
    

      {/* Background Cover */}
      <div className=" flex flex-col items-center justify-center  mt-20">
        {/* Title */}
       

        {/* Screenshot Column */}
        <div className=" Screenshots-space flex flex-col items-center space-y-4">
          {screenshotFilenames.map((filename, index) => (
            <img
              key={index}
              src={`/${filename}`} // Use an absolute path with a forward slash
              alt={`Screenshot ${index + 1}`}
              className=" Screenshots-pages w-full rounded-lg shadow-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Documents;








//-------BY ANOOP----------//

// import React, { useState, useEffect } from 'react';

// const ImageGallery = () => {
//   const [imageUrls, setImageUrls] = useState([]);

//   useEffect(() => {
//     // Fetch image URLs from the server
//     fetch('http://127.0.0.1:5000/images')
//       .then(response => response.json())
//       .then(data => {
//         setImageUrls(data.image_urls);
//       })
//       .catch(error => console.error('Error fetching image URLs:', error));
//   }, []);

//   return (
//     <div>
//       <h1>Image Gallery</h1>
//       <div>
//         {imageUrls.map((imageUrl, index) => (
//           <img key={index} src={`http://127.0.0.1:5000${imageUrl}`} alt={`Number Plate ${index + 1}`} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageGallery;