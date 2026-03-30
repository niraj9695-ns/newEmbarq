import "./GlobalScrollDownNRJ.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function GlobalScrollDownNRJ({ targetId }) {

 const handleScroll = () => {
  const trigger = ScrollTrigger.getById("expeditions-scroll");

  if (trigger) {
    // ✅ jump OUT of horizontal scroll section
    window.scrollTo({
      top: trigger.end + 20,
      behavior: "smooth",
    });
    return;
  }

  // fallback (for other pages)
  if (targetId) {
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
};

  return (
    <div className="nrj-scroll-indicator-wrapper" onClick={handleScroll}>
      <span className="nrj-scroll-indicator-text">scroll down</span>

      <div className="triangle-down">
        <span></span>
        <span></span>
      </div>
    </div>
  );
}