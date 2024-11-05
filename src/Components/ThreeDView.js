import React, { useState, useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useParams, Link } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';
import '@google/model-viewer';
import './ThreeDView.css';

// Model component to load the 3D model
const Model = ({ glbFilePath }) => {
  const { scene } = useGLTF(glbFilePath);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      ref.current.scale.set(1.4, 1.4, 1.4);
      ref.current.position.set(0, 0, 0);
    }
  }, [scene]);

  return <primitive object={scene} ref={ref} />;
};

const ThreeDView = () => {
  const { productId } = useParams();
  const products = [
    { id: '1', name: 'Modern Sofa', glbFile: '/images/base1.glb' },
    { id: '2', name: 'Modern Sofa', glbFile: '/images/base2.glb' },
    { id: '3', name: 'Modern Sofa', glbFile: '/images/base3.glb' },
    { id: '4', name: 'Modern Sofa', glbFile: '/images/base4.glb' },
    { id: '5', name: 'Modern Sofa', glbFile: '/images/base5.glb' },
    { id: '6', name: 'Modern Sofa', glbFile: '/images/base6.glb' },
    { id: '7', name: 'Modern Sofa', glbFile: '/images/base7.glb' },
    { id: '8', name: 'Modern Sofa', glbFile: '/images/base8.glb' },
    { id: '9', name: 'Modern Sofa', glbFile: '/images/base9.glb' },
    { id: '10', name: 'Modern Sofa', glbFile: '/images/base10.glb' },
    { id: '11', name: 'Modern Sofa', glbFile: '/images/base11.glb' },
    { id: '12', name: 'Modern Sofa', glbFile: '/images/base12.glb' },
    { id: '13', name: 'Modern Sofa', glbFile: '/images/base13.glb' },
    { id: '14', name: 'Modern Sofa', glbFile: '/images/base14.glb' },
    { id: '15', name: 'Modern Sofa', glbFile: '/images/base15.glb' },
    { id: '16', name: 'Modern Sofa', glbFile: '/images/base16.glb' },
  ];

  const product = products.find((p) => p.id === productId);
  const [cameraPosition] = useState([0, 1, 5]);
  const [showQRCode, setShowQRCode] = useState(false);
  const [qrCodeValue, setQRCodeValue] = useState('');

  if (!product) {
    return <p>Product not found.</p>;
  }

  const startAR = () => {
    const qrCodeLink = `https://bookstore-ruddy-iota.vercel.app/${productId}`; // Replace with your actual AR page URL
    setQRCodeValue(qrCodeLink);
    setShowQRCode(true);
  };

  return (
    <div className="threeD-view-page">
      <h2 className="de">3D View</h2>
      {product.glbFile ? (
        <div className="threeD-viewer-container">
          {product.glbFile && (
        <model-viewer
          src={product.glbFile}
          alt={product.name}
          ar
          ar-modes="scene-viewer webxr quick-look"
          camera-controls
          auto-rotate
          style={{ width: '100%', height: '500px', marginTop: '20px' }}
        >
          {/* <button slot="ar-button" className="view-ar-button">
            View in your space
          </button> */}
        </model-viewer>
      )}

        </div>
      ) : (
        <p>No 3D view available for this product.</p>
      )}

      {/* Button group container */}
      <div className="button-group">
        <Link to={`/product/${productId}`}>
          <button className="back">Back to Product</button>
        </Link>
        <button className="ar-button" onClick={startAR}>View in AR</button>
      </div>

      {/* AR-enabled model-viewer for compatible devices */}
      {/* {product.glbFile && (
        <model-viewer
          src={product.glbFile}
          alt={product.name}
          ar
          ar-modes="scene-viewer webxr quick-look"
          camera-controls
          auto-rotate
          style={{ width: '100%', height: '500px', marginTop: '20px' }}
        >
          <button slot="ar-button" className="view-ar-button">
            View in your space
          </button>
        </model-viewer>
      )} */}

      {/* Conditional rendering for the QR Code */}
      {showQRCode && (
        <div className="qr-code">
          <h3>Scan to View in AR</h3>
          <QRCodeSVG value={qrCodeValue} size={150} />
        </div>
      )}
    </div>
  );
};

export default ThreeDView;
