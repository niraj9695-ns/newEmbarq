import "./TeamMembers.css";
import member1 from "../../assets/aboutimages/sunnanda.webp";
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
              <h3>Sunnanda Mor</h3>
              <p>
                Sunnanda is an an International Baccalaureate educator, PhD scholar, and
passionate overland traveller who has spent decades shaping young minds and
nurturing student leadership. Her PhD in reverse logistics reflects her fascination
with efficiency, sustainability, and navigating complex systems—qualities that also
define her approach to life on the road.<br/><br/>
A seasoned long-distance driver, she has travelled across continents, including a
remarkable 65-day road journey from India to London.<br/><br/>
She brings these diverse experiences together at Embarq as she leads our Dubai
branch. Her love for travel, meticulous expedition planning, and bringing like-minded
travellers together reflects her belief that the journey is never just about the
destination, but the shared experiences, spontaneous moments, and camaraderie
that make every road trip a story worth telling.
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