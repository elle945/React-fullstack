import React, { useRef } from 'react';
import axios from 'axios';

const Webcam2 = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const handleCapture = async () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    const constraints = { video: true };
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
    video.play();

    const context = canvas.getContext('2d');
    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    const imageData = canvas.toDataURL('image/jpeg');

    // Send the captured image data to the server
    try {
      await axios.post('/api/upload', { image: imageData });
      console.log('Image uploaded successfully!');
    } catch (error) {
      console.error('Error uploading image:', error);
    }

    // Cleanup - stop video stream
    stream.getTracks().forEach((track) => track.stop());
  };

  return (
    <div>
      <video ref={videoRef} />
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <button onClick={handleCapture}>Capture Photo</button>
      
    </div>
  );
};

// {capturedImage && <img src={capturedImage} alt="Captured" />}
// {imageName && <p>Image Name: {imageName}</p>}

export default Webcam2;