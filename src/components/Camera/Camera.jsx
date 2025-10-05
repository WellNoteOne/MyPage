import React, { useRef, useState } from "react";
import "./Camera.css";

function CameraButtonCloudinary() {
  const videoRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [stream, setStream] = useState(null);
  const [uploadedUrl, setUploadedUrl] = useState(null);

  const CLOUD_NAME = "dbaqlzrwm";
  const UPLOAD_PRESET = "joke_upload";

  const handleCamera = async () => {
    if (stream) {
      // Выключаем камеру
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setStream(null);
      return;
    }

    setPhoto(null);
    setUploadedUrl(null);

    try {
      // Включаем фронтальную камеру
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "user" },
        audio: false,
      });

      videoRef.current.srcObject = mediaStream;
      videoRef.current.play();
      setStream(mediaStream);

      // Через 2 секунды делаем фото
      setTimeout(() => {
        if (!videoRef.current) return;

        const canvas = document.createElement("canvas");
        canvas.width = videoRef.current.videoWidth;
        canvas.height = videoRef.current.videoHeight;
        canvas.getContext("2d").drawImage(videoRef.current, 0, 0);
        const dataUrl = canvas.toDataURL("image/png");
        setPhoto(dataUrl);

        //Отправка на Cloudinary
        canvas.toBlob(async (blob) => {
          if (!blob) return;
          const formData = new FormData();
          formData.append("file", blob);
          formData.append("upload_preset", UPLOAD_PRESET);

          try {
            const res = await fetch(
              `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
              {
                method: "POST",
                body: formData,
              }
            );
            if (!res.ok) throw new Error(`Cloudinary error: ${res.status}`);
            const data = await res.json();
            setUploadedUrl(data.secure_url);
            console.log("Photo downloaded :", data.secure_url);
          } catch (err) {
            console.error("Download error:", err);
          }
        }, "image/png");
      }, 500);
    } catch (err) {
      alert("Camera unavalibale at the moment");
      console.error(err);
    }
  };

  return (
    <div>
      <button className="joke-button" onClick={handleCamera}>
        {stream ? "Turn off camera" : "Open camera"}
      </button>

      <video
        ref={videoRef}
        className="camera-preview"
        autoPlay
        style={{ display: stream ? "block" : "none" }}
      ></video>
    </div>
  );
}

export default CameraButtonCloudinary;
