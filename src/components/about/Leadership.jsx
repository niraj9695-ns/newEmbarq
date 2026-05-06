import { motion } from "framer-motion";
import "./Leadership.css";
import founder1 from "../../assets/aboutimages/Medhajoseph.jpg";
import founder2 from "../../assets/aboutimages/sujal.jpg";

/* ===== ANIMATION VARIANTS ===== */

const sectionFade = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

const container = {
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const textFade = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageRevealLeft = {
  hidden: { opacity: 0, x: -80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageRevealRight = {
  hidden: { opacity: 0, x: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineGrow = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "120px",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
  },
};

function Leadership() {
  return (
    <section className="leadership">
      
      {/* ===== TITLE ===== */}
      <motion.h2
        className="section-title"
        variants={sectionFade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Founders & Leadership
      </motion.h2>

      {/* ===== FIRST FOUNDER ===== */}
      <div className="leader-block">
        
        {/* IMAGE */}
        <motion.div
          className="leader-image"
          variants={imageRevealLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={founder1} alt="Medha Joseph" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="leader-text"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3 variants={textFade}>Medha Joseph</motion.h3>

          <div className="designation">
            <motion.span variants={textFade}>
              FOUNDER & DIRECTOR
            </motion.span>

            <motion.div
              className="line"
              variants={lineGrow}
            />
          </div>

          <motion.p variants={textFade}>
           <span
  style={{
    display: "block",
    fontSize: "18px",
    fontWeight: "600",
    color: "#F6A61D",
    marginBottom: "8px",
  }}
>
  The Strategist Behind the Wheel
</span>
            With a sharp financial acumen and exceptional route-planning expertise, Medha is the backbone of Embarq’s expedition design. She brings structure, foresight, and meticulous execution to every journey. <br /><br />
Travel is her true calling, she played a pivotal role in conceptualizing and executing the ambitious <strong>India to Morocco expedition (15 countries in 57 days),</strong> laying the foundation for Embarq’s global vision. <br /><br />
Before transitioning into full-time entrepreneurship, Medha built a strong corporate career spanning <strong>11 years</strong> with globally renowned organizations including <strong>Mercedes-Benz, General Electric, and Infosys,</strong> experience that now reflects in Embarq’s professionalism and operational excellence.
          </motion.p>
        </motion.div>
      </div>

      {/* ===== SECOND FOUNDER ===== */}
      <div className="leader-block reverse">
        
        {/* IMAGE */}
        <motion.div
          className="leader-image"
          variants={imageRevealRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <img src={founder2} alt="Sujal Patwardhan" />
        </motion.div>

        {/* TEXT */}
        <motion.div
          className="leader-text"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.h3 variants={textFade}>Sujal Patwardhan</motion.h3>

          <div className="designation">
            <motion.span variants={textFade}>
              FOUNDER & DIRECTOR
            </motion.span>

            <motion.div
              className="line"
              variants={lineGrow}
            />
          </div>

          <motion.p variants={textFade}>
             <span
  style={{
    display: "block",
    fontSize: "18px",
    fontWeight: "600",
    color: "#F6A61D",
    marginBottom: "8px",
  }}
>
  The Force That Brings It All Together
</span>
            A natural leader, problem-solver, and people person, Sujal is the driving force behind Embarq’s execution and community building. Her strength lies in orchestrating complex journeys while creating a seamless and engaging experience for every participant.<br /><br />
Her passion for exploration led her to undertake a <strong>23,000 km intercontinental road journey,</strong> reinforcing her belief in the transformative power of travel. <br /><br />
Prior to co-founding Embarq, Sujal held leadership roles in Human Resources for over <strong>14 years,</strong> including serving as <strong>Vice President & Head of HR at Ambit Holdings,</strong> and working with global institutions such as <strong>Lehman Brothers and Infosys.</strong>
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export default Leadership;