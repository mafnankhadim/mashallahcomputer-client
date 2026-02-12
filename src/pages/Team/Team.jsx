import { Link } from "react-router-dom";

// Image imports
import team1Img from "/assets/images/inner-img/team1.png";
import team2Img from "/assets/images/inner-img/team2.png";
import team3Img from "/assets/images/inner-img/team3.png";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Abu Taleb Shorkar",
      role: "UI Designer",
      image: team1Img,
    },
    {
      id: 2,
      name: "Miss Joonaki Akter",
      role: "Marketing",
      image: team2Img,
    },
    {
      id: 3,
      name: "Sharjid Alom",
      role: "Developer",
      image: team3Img,
    },
    {
      id: 4,
      name: "Abu Taleb Shorkar",
      role: "UI Designer",
      image: team1Img,
    },
    {
      id: 5,
      name: "Miss Joonaki Akter",
      role: "Marketing",
      image: team2Img,
    },
    {
      id: 6,
      name: "Nahid Hasan Biblop",
      role: "Manager",
      image: team3Img,
    },
  ];

  return (
    <>
      {/* Breadcrumb Area */}
      <div className="breadcumb-area d-flex style_two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="breadcumb-content">
                <div className="breadcumb-title">
                  <h4>Our Team</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Our Team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Team Area */}
      <section className="team_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>Meet Our Team</h4>
                <h1>
                  Meet Our High Qualified
                  <br />
                  Team Members
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {teamMembers.map((member) => (
              <div className="col-lg-4 col-md-6" key={member.id}>
                <div className="team_single_box">
                  <div className="team_thub">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team_conent">
                    <h3>{member.name}</h3>
                    <p>{member.role}</p>
                  </div>
                  <div className="team_social">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fa-brands fa-x-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
