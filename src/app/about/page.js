// components/TeamAndMission.tsx
import "@/app/about/about.css"; // Make sure to create this CSS file

const TeamAndMission = () => {
  return (
    <section className="team-mission-section">
      <div className="container">
        <div className="team">
          <h2 className="section-title">Meet Our <span>Experts</span></h2>
          <div className="team-members">
            <div className="team-member">
              <h3>Jane Doe</h3>
              <p className="bio">Certified personal trainer with over 10 years of experience in helping people achieve their fitness goals.</p>
            </div>
            <div className="team-member">
              <h3>John Smith</h3>
              <p className="bio">Nutritionist specializing in meal planning and healthy eating habits.</p>
            </div>
          </div>
        </div>

        <div className="mission">
          <h2 className="section-title">Our <span>Mission</span></h2>
          <p className="mission-description">Our goal is to provide you with the best fitness resources, tips, and motivation to help you lead a healthier, more active lifestyle.</p>
        </div>
      </div>
    </section>
  );
};

export default TeamAndMission;
