import "./TeamMembers.css";
import member1 from "../../assets/aboutimages/member1.png";
import member2 from "../../assets/aboutimages/memeber2.png";

function TeamMembers() {
  return (
    <section className="team">
      <div className="team-container">
        <h2 className="team-title">Team Members</h2>

        <div className="team-grid">
          {/* Card 1 */}
          <div className="team-card">
            <div className="team-image-wrapper">
              <img src={member1} alt="Kavita Jhunjhunwala" />
            </div>

            <div className="team-content">
              <h3>Kavita Jhunjhunwala</h3>
              <p>
                As a Fractional CMO, Kavita is passionate about solving digital challenges, partnering with growth-stage businesses, agencies, and public enterprises to craft long-term, data-driven growth strategies while training digital marketing teams.<br/><br/>
Her work bridges the gap between strategic consulting and tactical execution, combining deep knowledge of the digital ecosystem, creative problem-solving, and multicultural team leadership. Kavita collaborates with global clients across diverse industries, helping them optimize their digital presence and achieve sustainable growth. <br/><br/>
Beyond her professional endeavours, Kavita is an avid traveller and driving enthusiast, drawing inspiration from her adventures to fuel innovative thinking. She also shares her expertise at global events, workshops, and online courses on digital strategy and content marketing, empowering businesses to navigate and thrive in the ever-evolving digital landscape.
              </p>
              {/* <span className="read-more">Read More</span> */}
            </div>
          </div>

          {/* Card 2 */}
          <div className="team-card">
            <div className="team-image-wrapper">
              <img src={member2} alt="Riddhi Kinkar" />
            </div>

            <div className="team-content">
              <h3>Riddhi Kinkar</h3>
              <p>
                Riddhi is a calm, witty individual with a keen eye for detail and a passion for unique travel experiences. As a key member of the Embarq team, she thrives on managing customer joy and marketing activities. An avid traveller, Riddhi loves exploring new destinations with her husband and 4-year-old son, embracing the vibrant tapestry of global cultures and cuisines. <br/><br/>
When not on the move, she can be found sipping endless cups of coffee, dreaming of seafood feasts and sunlit beaches. With a diverse background in virology, teaching, and personal finance, Riddhi brings a unique perspective and meticulous planning to work. Whether she's dancing, reading, or cooking up a storm, her zest for life shines through in all she does
              </p>
              {/* <span className="read-more">Read More</span> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamMembers;