import { useState } from "react";
import "./RoutePlan.css";

function RoutePlan({ data }) {
  const [rpIsOpen, setRpIsOpen] = useState(false);

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
            <img
              src={data.desktop}
              alt="route map mobile"
              className="route-image mobile rp-mobile-img"
            />

            <button
              className="rp-explore-btn"
              onClick={() => setRpIsOpen(true)}
            >
              Explore Route
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {rpIsOpen && (
        <div className="rp-modal-bg">

          {/* Close Button */}
          <button
            className="rp-close-btn"
            onClick={() => setRpIsOpen(false)}
          >
            ✕
          </button>

          {/* Image Container */}
          <div className="rp-modal-content">
            <img
              src={data.desktop}
              alt="zoomed route"
              className="rp-modal-image"
            />
          </div>

          {/* Scroll Indicator */}
          <div className="rp-scroll-indicator">
            <span>Swipe →</span>
          </div>

        </div>
      )}
    </section>
  );
}

export default RoutePlan;