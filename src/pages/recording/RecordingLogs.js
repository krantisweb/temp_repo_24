// import React, { useState, useEffect } from "react";

// // ... (your existing imports)

// const VideoFolder = ({ videos }) => {
//   const [folders, setFolders] = useState([]);

//   useEffect(() => {
//     // Each video in its own folder
//     const foldersData = videos.map((video) => {
//       const dateTime = Object.keys(video)[0];
//       return {
//         created_date_time: dateTime,
//         videos: [video[dateTime]],
//       };
//     });

//     setFolders(foldersData);
//   }, [videos]);

//   const [selectedFolder, setSelectedFolder] = useState(null);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const handleFolderClick = (folder) => {
//     setSelectedFolder(folder);
//   };

//   const handleVideoClick = (video) => {
//     // Decode the video URL
//     const decodedVideoUrl = decodeURIComponent(video.video_url);

//     // Log the clicked video data
//     console.log("Video clicked:", video);

//     // Set the selected video with the decoded URL
//     setSelectedVideo({ ...video, video_url: decodedVideoUrl });
//   };

//   return (
//     <div>
//       {selectedFolder ? (
//         // Display video list when a folder is selected
//         <div>
//           <h2>{selectedFolder.created_date_time}</h2>
//           <ul>
//             {selectedFolder.videos.map((video) => (
//               <li key={video.filename}>
//                 <button onClick={() => handleVideoClick(video)}>
//                   {video.filename}
//                 </button>
//               </li>
//             ))}
//           </ul>
//           {selectedVideo && (
//             <div>
//               <h3>{selectedVideo.filename}</h3>
//               <video
//                 key={selectedVideo.filename}
//                 controls
//                 width="600"
//                 height="400"
//               >
//                 <source src={selectedVideo.video_url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//               <button
//                 onClick={() => setSelectedFolder(null)}
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
//               >
//                 Back
//               </button>
//             </div>
//           )}
//         </div>
//       ) : (
//         // Display video folders when no folder is selected
//         <div>
//           <h2>Video Folders</h2>
//           <ul>
//             {folders.map((folder) => (
//               <li key={folder.created_date_time}>
//                 <button onClick={() => handleFolderClick(folder)}>
//                   {folder.created_date_time}
//                 </button>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// const App = () => {
//   const [videoData, setVideoData] = useState([]);

//   useEffect(() => {
//     // Fetch data from the backend API
//     fetch("http://127.0.0.1:5000/api/videos")
//       .then((response) => response.json())
//       .then((data) => setVideoData(data))
//       .catch((error) => console.error("Error fetching data:", error));
//   }, []); // Empty dependency array means the effect runs once on mount

//   return (
//     <div>
//       <VideoFolder videos={videoData} />
//     </div>
//   );
// };

// export default App;




import React, { useState, useEffect } from "react";
const VideoFolder = ({ videos, isEnabled }) => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    // Each video in its own folder
    const foldersData = videos.map((video) => {
      const dateTime = Object.keys(video)[0];
      return {
        created_date_time: dateTime,
        videos: [video[dateTime]],
      };
    });

    setFolders(foldersData);
  }, [videos]);

  const [selectedFolder, setSelectedFolder] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleFolderClick = (folder) => {
    setSelectedFolder(folder);
  };

  const handleVideoClick = (video) => {
    if (isEnabled) {
      // Decode the video URL
      const decodedVideoUrl = decodeURIComponent(video.video_url);

      // Log the clicked video data
      console.log("Video clicked:", video);

      // Set the selected video with the decoded URL
      setSelectedVideo({ ...video, video_url: decodedVideoUrl });
    } else {
      console.log("Video storage is disabled.");
    }
  };
  
  return (
    <div>
      {selectedFolder ? (
        // Display video list when a folder is selected
        <div>
          <h2>{selectedFolder.created_date_time}</h2>
          <ul>
            {selectedFolder.videos.map((video) => (
              <li key={video.filename}>
                <button onClick={() => handleVideoClick(video)}>
                  {video.filename}
                </button>
              </li>
            ))}
          </ul>
          {selectedVideo && (
            <div>
              <h3>{selectedVideo.filename}</h3>
              <video
                key={selectedVideo.filename}
                controls
                width="600"
                height="400"
              >
                <source src={selectedVideo.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={() => setSelectedFolder(null)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"
              >
                Back
              </button>
            </div>
          )}
        </div>
      ) : (
        // Display video folders when no folder is selected
        <div>
          <h2>Video Folders</h2>
          <ul>
            {folders.map((folder) => (
              <li key={folder.created_date_time}>
                <button onClick={() => handleFolderClick(folder)}>
                  {folder.created_date_time}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const App = () => {
  // eslint-disable-next-line no-unused-vars
const [videoData, setVideoData] = useState([]);

useEffect(() => {
  // Fetch data from the backend API
  fetch("http://127.0.0.1:5000/api/videos")
    .then((response) => response.json())
    .then((data) => setVideoData(data))
    .catch((error) => console.error("Error fetching data:", error));
}, []);

  return (
    <div>
    <VideoFolder videos={videoData} />
  </div>
  );
};

export default App;
