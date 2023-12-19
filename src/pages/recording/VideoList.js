//VideoList.js

import React from 'react';
const VideoList = ({ videoListHTML }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Video List</h1>
      <div>
        {/* Use optional chaining to check if videoListHTML is defined */}
        {videoListHTML?.children}
      </div>
    </div>
  );
};

export default VideoList;
