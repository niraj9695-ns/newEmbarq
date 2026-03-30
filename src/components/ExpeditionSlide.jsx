import "./UpcomingExpeditions/UpcomingExpeditions.css";
import download from "../assets/svg/download.svg";

export default function ExpeditionSlide({
  image,
  title,
  subtitle,
  date,
  brochure,
  status
}) {
  return (
    <div
      className="expedition-slide"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="slide-overlay">
        {/* DATE ON TOP */}
       <div className="slide-date-row">
  <p className="slide-date-top">{date}</p>
  <span className={`status-badge ${status.toLowerCase()}`}>
    {status}
  </span>
</div>

        {/* TITLE */}
        <h1 className="slide-title">{title.toUpperCase()}</h1>

        {/* SUBTITLE */}
        <p className="slide-subtitle">{subtitle}</p>

        {/* CTA BUTTON (NEW) */}
        <a href={brochure} download className="brochure-btn">
          <img src={download} alt="download" />
          Download Brochure
        </a>
      </div>
    </div>
  );
}
