import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carousel = () => {
      const [images, setImages] = useState([]);
  const [selectedVehicleImage, setSelectedVehicleImage] = useState(null);
  const [selectedPlateImage, setSelectedPlateImage] = useState(null);



  const sliderRef = useRef(null);

  const handlePlateImageClick = (image) => {
    setSelectedPlateImage(image);
  };

  const handleClosePlateZoom = () => {
    setSelectedPlateImage(null);
  };

  const handleVehicleImageClick = (image) => {
    setSelectedVehicleImage(image);
  };

  const handleCloseZoom = () => {
    setSelectedVehicleImage(null);
    setSelectedPlateImage(null);
  };

  const handleCloseVehicleZoom = () => {
    setSelectedVehicleImage(null);
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/image");
        console.log (response.data)
          return response.data;
      } catch (error) {
        console.error("Error fetching images:", error);
      }

    };

    fetchImages();
  }, []);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: true,
    variableWidth: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set the autoplay speed in milliseconds (e.g., 2000ms = 2 seconds)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePrevious = () => {
    sliderRef.current.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current.slickNext();
  };


return(

//    <Slider {...settings} ref={sliderRef}>
//               {images.map((image) => (
//                 <div key={image.id}>
//                   <div
//                     className="relative bg-white p-1 border border-gray-300"
//                     style={{ position: "relative" }}
//                   >
//                     <img
//                       src={image.vehicle_image}
//                       alt={`Vehicle ${image.id}`}
//                       className="w-60 h-auto rounded-md"
//                       onClick={() => handleVehicleImageClick(image)}
//                     />
//                     <img
//                       src={image.number_plate_image}
//                       alt={`Number Plate ${image.id}`}
//                       className="absolute bottom-0 right-0 w-40 md:w-24 h-1/2 m-1 border-3 border-blue-600"
//                       onClick={() => handlePlateImageClick(image)}
//                     />
//                   </div>
//                 </div>
//               ))}
//             </Slider> 

//             <div className="mt-2">
//               <button
//                 onClick={handlePrevious}
//                 className="mr-2 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={handleNext}
//                 className="mr-2 rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300"
//               >
//                 Next
//               </button>
//             </div> 

            //  {selectedPlateImage && (
            //   <div
            //     className="fixed inset-0 flex items-center justify-center"
            //     onClick={handleClosePlateZoom}
            //   >
            //     <div className="max-w-screen-lg max-h-screen p-1 bg-white rounded-lg overflow-hidden">
            //       <img
            //         src={selectedPlateImage.number_plate_image}
            //         alt={`Zoomed Plate Image ${selectedPlateImage.id}`}
            //         className="w-72 h-auto mx-auto"
            //       />
            //       <button
            //         onClick={handleCloseZoom}
            //         className="absolute top-0 right-0 m-2 text-xl font-bold rounded-full bg-gray-200 w-11 h-11"
            //       >
            //         X
            //       </button>
            //     </div>
            //   </div>
            // )} 

            // {selectedVehicleImage && (
            //   <div
            //     className="fixed inset-0 flex items-center justify-center"
            //     onClick={handleCloseVehicleZoom}
            //   >
            //     <div className="max-w-screen-lg max-h-screen p-1 bg-white rounded-lg overflow-hidden">
            //       <img
            //         src={selectedVehicleImage.vehicle_image}
            //         alt={`Zoomed Vehicle Image ${selectedVehicleImage.id}`}
            //         className="w-[45rem] h-auto mx-auto"
            //       />
            //       <button
            //         onClick={handleCloseZoom}
            //         className="absolute top-0 right-0 m-2 text-xl font-bold rounded-full bg-gray-200 w-11 h-11"
            //       >
            //         X
            //       </button>
            //     </div>
            //   </div>
            // )} 

 )
}
export default carousel ;