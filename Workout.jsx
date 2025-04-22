import { useRef, useState } from "react";
import { motion } from "framer-motion";

export const Workout = () => {
  const videoRef = useRef(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);

  const enableCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraEnabled(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Could not access the camera. Please check permissions.");
    }
  };

  return (
    <div className="pb-4 px-4">
      {/* Posture Detection Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="my-32 text-center text-4xl"
      >
        POSTURE DETECTION
      </motion.h2>

      {/* Posture Detection Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Our AI-powered posture detection tool ensures you're performing exercises safely and effectively.
            Enable your camera to get real-time analysis and feedback, helping you avoid injuries and maintain
            perfect form throughout your workouts.
          </p>

          <button
            onClick={enableCamera}
            className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Enable Camera
          </button>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {cameraEnabled ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="max-w-sm w-full rounded-xl shadow-xl"
            />
          ) : (
            <img
              src="/workout.png"
              alt="Posture Assist"
              className="max-w-sm w-full rounded-xl shadow-xl"
            />
          )}
        </motion.div>
      </div>

      {/* Today's Exercise Section */}
      <motion.h3
        className="text-3xl font-semibold mt-20 mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Today's Exercise
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Exercise Card 1 */}
        <motion.div
          className="bg-white rounded-lg p-4 shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/hand.png" alt="Handups Exercise" className="rounded mb-4 mx-auto" />
          <h4 className="text-xl font-medium text-gray-800">Handups</h4>
        </motion.div>

        {/* Exercise Card 2 */}
        <motion.div
          className="bg-white rounded-lg p-4 shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/KneeTouch.png" alt="Knee Touch Exercise" className="rounded mb-4 mx-auto" />
          <h4 className="text-xl font-medium text-gray-800">Knee Touch</h4>
        </motion.div>

        {/* Exercise Card 3 */}
        <motion.div
          className="bg-white rounded-lg p-4 shadow-lg text-center"
          whileHover={{ scale: 1.05 }}
        >
          <img src="/Walking.png" alt="Walking Exercise" className="rounded mb-4 mx-auto" />
          <h4 className="text-xl font-medium text-gray-800">Walking</h4>
        </motion.div>
      </div>
    </div>
  );
};
