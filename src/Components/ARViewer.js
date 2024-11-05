import React from 'react';
import '@google/model-viewer';

const ARViewer = ({ modelUrl }) => {
  return (
    <model-viewer
      src={modelUrl}
      alt="A 3D model of a furniture item"
      ar
      ar-modes="webxr scene-viewer quick-look"
      environment-image="neutral"
      camera-controls
      auto-rotate
      style={{ width: '100%', height: '500px' }}
    ></model-viewer>
  );
};

export default ARViewer;
