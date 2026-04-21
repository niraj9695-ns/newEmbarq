import { useState, useRef } from "react";
import "./RoutePlan1.css";

function RoutePlan1({ data }) {
  const [rp1Open, setRp1Open] = useState(false);
  const [rp1Scale, setRp1Scale] = useState(1);
  const containerRef = useRef(null);

  const zoomIn = () => {
    setRp1Scale((prev) => Math.min(prev + 0.3, 3));
  };

  const zoomOut = () => {
    setRp1Scale((prev) => Math.max(prev - 0.3, 1));
  };

  return (
    <section className="rp1-section">
      <div className="rp1-container">
        <h2 className="rp1-title">Route Plan</h2>

        <div className="rp1-image-wrapper">

          {/* Desktop */}
          <img
            src={data.desktop}
            alt="route map"
            className="rp1-desktop-img"
          />

          {/* Mobile */}
          <div className="rp1-mobile-box">
            <img
              src={data.desktop}
              alt="route map mobile"
              className="rp1-mobile-img"
            />

            <button
              className="rp1-explore-btn"
              onClick={() => setRp1Open(true)}
            >
              Explore Route
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {rp1Open && (
        <div className="rp1-modal-bg">

          {/* Close */}
          <button
            className="rp1-close-btn"
            onClick={() => {
              setRp1Open(false);
              setRp1Scale(1);
            }}
          >
            ✕
          </button>

          {/* Image Viewer */}
          <div className="rp1-viewer" ref={containerRef}>
            <div
              className="rp1-image-track"
              style={{ transform: `scale(${rp1Scale})` }}
            >
              <img
                src={data.desktop}
                alt="zoom route"
                className="rp1-modal-img"
              />
            </div>
          </div>

          {/* Zoom Controls */}
          <div className="rp1-zoom-controls">
            <button onClick={zoomOut}>−</button>
            <button onClick={zoomIn}>+</button>
          </div>

        </div>
      )}
    </section>
  );
}

export default RoutePlan1;