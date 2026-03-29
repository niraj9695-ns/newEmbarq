import { useEffect, useRef } from "react";

const HorizontalScrollSection = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const scrollWidth = container.scrollWidth - window.innerWidth;

      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const progress = Math.max(
          0,
          -rect.top / (section.offsetHeight - window.innerHeight)
        );
        container.scrollLeft = progress * scrollWidth;
      } else if (rect.top > 0) {
        container.scrollLeft = 0;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [
    {
      bgImage:
        "https://images.pexels.com/photos/3408356/pexels-photo-3408356.jpeg",
      overlay: "overlay-blue",
      title: "Slide 1",
      subtitle: "Scroll to explore",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg",
      overlay: "overlay-green",
      title: "Slide 2",
      subtitle: "Keep scrolling",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/3408356/pexels-photo-3408356.jpeg",
      overlay: "overlay-orange",
      title: "Slide 3",
      subtitle: "Halfway there",
    },
    {
      bgImage:
        "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg",
      overlay: "overlay-pink",
      title: "Slide 4",
      subtitle: "Almost done",
    },
  ];

  return (
    <div ref={sectionRef} className="horizontal-section">
      <div className="sticky-wrapper">
        <div ref={containerRef} className="horizontal-container">
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              <div
                className="bg-image"
                style={{ backgroundImage: `url(${slide.bgImage})` }}
              />

              <div className={`overlay ${slide.overlay}`} />

              <div className="content">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollSection;