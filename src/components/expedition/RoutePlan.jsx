import { useState } from "react";
import "./RoutePlan.css";

function RoutePlan({ data }) {
  const [rpIsOpen, setRpIsOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);

  return (
    <section className="route-plan rp-root">
      <div className="route-container">
        <h2 className="route-title">Route Plan</h2>

        <div className="route-image-wrapper">

          {/* Desktop */}
          <img
            src={data.desktop}
            alt="route map"
            className="route-image rp-desktop-img"
          />

          {/* Mobile */}
          <div className="rp-mobile-box">
            <div
              className="rp-mobile-preview"
              onClick={() => setRpIsOpen(true)}
            >
              <img
                src={data.desktop}
                alt="route map mobile"
                className="route-image rp-mobile-img"
              />

              <div className="rp-tap-overlay">
                <span>Tap to Zoom</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {rpIsOpen && (
        <div className="rp-modal-bg">

          {/* Close Button */}
          <button
            className="rp-close-btn"
            onClick={() => {
              setRpIsOpen(false);
              setZoomed(false);
            }}
          >
            ✕
          </button>

          {/* Zoom Toggle */}
          <button
            className="rp-zoom-btn"
            onClick={() => setZoomed(!zoomed)}
          >
            {zoomed ? "−" : "+"}
          </button>

          {/* Image Container */}
          <div className="rp-modal-content">
            <img
              src={data.desktop}
              alt="zoomed route"
              className={`rp-modal-image ${
                zoomed ? "rp-modal-image-zoomed" : ""
              }`}
            />
          </div>

          {/* Scroll Indicator */}
          <div className="rp-scroll-indicator">
            <span>{zoomed ? "Drag to Explore" : "Tap + to Zoom"}</span>
          </div>

        </div>
      )}
    </section>
  );
}

export default RoutePlan;