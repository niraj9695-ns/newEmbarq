import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import "./RoutePlan2.css";

function RoutePlan2({ data }) {
  return (
    <section className="rp2-section">
      <div className="rp2-container">
        <h2 className="rp2-title">Route Plan</h2>

        <div className="rp2-map-wrapper">

          <TransformWrapper
            initialScale={1}
            minScale={1}
            maxScale={4}
            centerOnInit={true}
            centerZoomedOut={true}   // ✅ keeps centered when zoom changes
            limitToBounds={false}    // ✅ prevents cropping
            doubleClick={{ mode: "zoomIn" }}
            pinch={{ step: 5 }}
            panning={{ velocityDisabled: false }}
          >
            {({ zoomIn, zoomOut, resetTransform }) => (
              <>
             <TransformComponent
  wrapperClass="rp2-viewer"
  contentClass="rp2-content"
>
  <img
    src={data.desktop}
    alt="route map"
    className="rp2-map-image"
  />
</TransformComponent>

                {/* Controls - Bottom Center */}
                <div className="rp2-controls">
                  <button onClick={() => zoomOut()}>−</button>
                  <button onClick={() => zoomIn()}>+</button>
                  <button onClick={() => resetTransform()}>⟳</button>
                </div>
              </>
            )}
          </TransformWrapper>

        </div>
      </div>
    </section>
  );
}

export default RoutePlan2;