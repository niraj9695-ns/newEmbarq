import { useLayoutEffect, useRef, useState } from "react";
import "./UpcomingExpeditions.css";
import ExpeditionSlide from "../ExpeditionSlide";
import GlobalScrollDownNRJ from "../scroll label/GlobalScrollDownNRJ";
import nextArrowImg from "../../assets/expedition/arrow-circle-right.png";
import prevArrowImg from "../../assets/expedition/arrow-circle-left.png";

import k2k from "../../assets/images/k2k.webp";
import slide2 from "../../assets/images/scotland.webp";
import slide3 from "../../assets/images/romania.webp";
import slide4 from "../../assets/images/georgia.webp";
import slide6 from "../../assets/images/skorea.webp";
import slide7 from "../../assets/images/finland.webp";
import kashmir from "../../assets/expedition/kashmirtok.webp";
import punjab from "../../assets/expedition/punjabhimachal.webp";
import Kyrgyz from "../../assets/expedition/Kyrgyz.webp";
import mizoram from "../../assets/expedition/mizoram.webp";
import nz from "../../assets/expedition/newzealand.webp";
// pdf
// import k2kPdf from "../../assets/pdf/k2k.pdf";
// import scotlandPdf from "../../assets/pdf/scotland.pdf";
import romaniaPdf from "../../assets/pdf/romania.pdf";
// import georgiaPdf from "../../assets/pdf/georgia.pdf";
import koreaPdf from "../../assets/pdf/skorea.pdf";
import finlandPdf from "../../assets/pdf/finland.pdf";

import punjabPDF from "../../assets/pdf/Punjab.pdf";
import kyrgyzstanPDF from "../../assets/pdf/Kyrgyzstan.pdf";
import mizoramPDF from "../../assets/pdf/Mizoram.pdf";
import newzealandPDF from "../../assets/pdf/NewZealand.pdf";
import kashmirPDF from "../../assets/pdf/k2k2027.pdf";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const expeditions = [
  // {
  //   title: "KUTCH TO KIBITHOO",
  //   subtitle: "Salt flats to North eastern mountains. India at its widest.",
  //   date: "8th to 28th March 2026",
  //   image: k2k,
  //   brochure: k2kPdf,
  //   status: "Completed",
  //   slug: "k2k2026", // ✅ ADD THIS
  // },
  // {
  //   title: "Scotland",
  //   subtitle: "NC500. Coastlines. Castle country",
  //   date: "8th to 17th May, 2026",
  //   image: slide2,
  //   brochure: scotlandPdf,
  //   status: "Upcoming",
  //   slug: "scotland", // ✅
  // },
  {
    title: "Romania",
    subtitle: "Carpathian passes. Quiet European charm.",
    date: "20th to 28th June, 2026",
    image: slide3,
    brochure: romaniaPdf,
    status: "Upcoming",
    slug: "romania",
  },

      {
    title: "Punjab & Himachal",
    subtitle: "Himalayan roads. Soulful escapes.",
    date: "4th to 9th September 2026",
    image: punjab,
    brochure: punjabPDF,
    status: "Upcoming",
    slug: "punjabandhimachal",
  },

      {
    title: "Kyrgyzstan",
    subtitle: "Mountain landscapes, alpine lakes.",
    date: "12th to 19th September, 2026",
    image: Kyrgyz,
    brochure: kyrgyzstanPDF,
    status: "Upcoming",
    slug: "kyrgyzstan",
  },

      {
    title: "Mizoram",
    subtitle: "Misty mountains. Hidden horizons.",
    date: "10th to 18th October 2026",
    image: mizoram,
    brochure: mizoramPDF,
    status: "Upcoming",
    slug: "mizoram",
  },

      {
    title: "New Zealand",
    subtitle: "Glacial roads. Untamed beauty.",
    date: "27th September to 8th October 2026",
    image: nz,
    brochure: newzealandPDF,
    status: "Upcoming",
    slug: "newzealand",
  },
  // {
  //   title: "Georgia",
  //   subtitle: "Mountain passes. Offbeat routes. Oldest wine making.",
  //   date: "8th to 16th August, 2026",
  //   image: slide4,
  //   brochure: georgiaPdf,
  //   status: "Upcoming",
  //   slug: "georgia",
  // },
  {
    title: "South Korea",
    subtitle: "Perfect roads. Mountain curves. Coastal light.",
    date: "21st to 29th November, 2026",
    image: slide6,
    brochure: koreaPdf,
    status: "Upcoming",
    slug: "southkorea",
  },
  {
    title: "Finland",
    subtitle: "Winter wonderland. Dark skies. Northern lights.",
    date: "5th to 13th December, 2026",
    image: slide7,
    brochure: finlandPdf,
    status: "Upcoming",
    slug: "finland",
  },

    {
    title: "Kashmir to Kanyakumari 2027",
    subtitle: "One nation. Endless landscapes.",
    date: "7th to 19th March, 2027",
    image: kashmir,
    brochure: kashmirPDF,
    status: "Upcoming",
    slug: "kashmirtokanyakumari",
  },



];

export default function UpcomingExpeditions() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const labelRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
const goToSlide = (index) => {
  const track = trackRef.current;
  const slideWidth = track.offsetWidth;

  track.scrollTo({
    left: index * slideWidth,
    behavior: "smooth",
  });
};
 const goToNextSlide = () => {
  const track = trackRef.current;
  const slideWidth = track.offsetWidth;

  track.scrollBy({
    left: slideWidth,
    behavior: "smooth",
  });
};

const goToPrevSlide = () => {
  const track = trackRef.current;
  const slideWidth = track.offsetWidth;

  track.scrollBy({
    left: -slideWidth,
    behavior: "smooth",
  });
};
useLayoutEffect(() => {
  const track = trackRef.current;

  const handleScroll = () => {
    const scrollLeft = track.scrollLeft;
    const slideWidth = track.offsetWidth;

    const index = Math.round(scrollLeft / slideWidth);
    setActiveIndex(index);
  };

  track.addEventListener("scroll", handleScroll);

  return () => {
    track.removeEventListener("scroll", handleScroll);
  };
}, []);
  // useLayoutEffect(() => {
  //   if (window.innerWidth <= 768) return;
  //   let ctx;

  //   const frame = requestAnimationFrame(() => {
  //     ctx = gsap.context(() => {
  //       const track = trackRef.current;

  //       const getScrollDistance = () => {
  //         const distance = track.scrollWidth - window.innerWidth;
  //         return distance > 0 ? distance : 0;
  //       };

  //       gsap.to(track, {
  //         x: () => -getScrollDistance(),
  //         ease: "none",
  //         scrollTrigger: {
  //           id: "expeditions-scroll", // ✅ IMPORTANT
  //           trigger: sectionRef.current,
  //           start: "top top",
  //           end: () => `+=${getScrollDistance()}`,
  //           scrub: 1,
  //           pin: true,
  //           anticipatePin: 1,
  //           invalidateOnRefresh: true,

  //           onUpdate: (self) => {
  //             const progress = self.progress;
  //             const total = expeditions.length;
  //             const index = Math.round(progress * (total - 1));
  //             setActiveIndex(index);
  //           },
  //         },
  //       });

  //       gsap.fromTo(
  //         labelRef.current,
  //         { x: -80, opacity: 0 },
  //         {
  //           x: 0,
  //           opacity: 1,
  //           duration: 1,
  //           ease: "power3.out",
  //           scrollTrigger: {
  //             trigger: sectionRef.current,
  //             start: "top 80%",
  //           },
  //         },
  //       );
  //     }, sectionRef);
  //   });

  //   return () => {
  //     cancelAnimationFrame(frame);
  //     if (ctx) ctx.revert();
  //   };
  // }, []);

  return (
    <>
      <section className="upcoming-wrapper" ref={sectionRef}>
        {/* <div className="side-label" ref={labelRef}>
          <span>Upcoming Road Expeditions</span>
        </div> */}

        <div className="horizontal-track" ref={trackRef}>
          {expeditions.map((exp, index) => (
            <ExpeditionSlide key={index} {...exp} />
          ))}
        </div>

      {/* DOTS */}
<div className="dots">
  {expeditions.map((_, i) => (
    <span
      key={i}
      className={`dot ${i === activeIndex ? "active" : ""}`}
       onClick={() => goToSlide(i)} 
    />
  ))}
</div>

{/* SCROLL DOWN */}
<div className="scroll-down-wrapper">
  <GlobalScrollDownNRJ targetId="why-roads" />
</div>
        

        {/* ✅ PREV ARROW */}
        {activeIndex > 0 && (
          <div className="prev-arrow" onClick={goToPrevSlide}>
            <img src={prevArrowImg} alt="Previous" />
          </div>
        )}

        {/* ✅ NEXT ARROW */}
        {activeIndex < expeditions.length - 1 && (
          <div className="next-arrow" onClick={goToNextSlide}>
            <img src={nextArrowImg} alt="Next" />
          </div>
        )}

        
      </section>
    </>
  );
}
