import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./JobArea.css";

import blog1 from "/assets/images/home_one/blog1.png";
import blog2 from "/assets/images/home_one/blog2.png";
import blog3 from "/assets/images/home_one/blog3.png";

const defaultJobs = [
  {
    id: 1,
    image: blog1,
    title: "Assistant Executive Engineer (WAPDA)",
    company: "WAPDA",
    location: "Nationwide",
    date: "01 FEB, 2026",
    dateISO: "2026-02-01",
    description:
      "Responsible for maintenance and operations of water & power projects.",
  },
  {
    id: 2,
    image: blog2,
    title: "Soldier / Sepoy - Soldier Intake",
    company: "Pakistan Army",
    location: "Multiple Cities",
    date: "28 JAN, 2026",
    dateISO: "2026-01-28",
    description:
      "Enlistment for various trades; physical fitness and medical requirements apply.",
  },
  {
    id: 3,
    image: blog3,
    title: "Aeronautical Technician",
    company: "Pakistan Air Force",
    location: "Islamabad",
    date: "25 JAN, 2026",
    dateISO: "2026-01-25",
    description:
      "Maintain aircraft systems and support operational readiness in hangars.",
  },
  {
    id: 4,
    image: blog1,
    title: "Seaman / Sailor Recruitment",
    company: "Pakistan Navy",
    location: "Karachi",
    date: "20 JAN, 2026",
    dateISO: "2026-01-20",
    description:
      "Recruitment for seafaring roles; includes basic seamanship and training.",
  },
];

const JobArea = ({ jobs: propsJobs }) => {
  const jobs =
    Array.isArray(propsJobs) && propsJobs.length ? propsJobs : defaultJobs;

  return (
    <section className="blog_area job_section" aria-labelledby="jobs-heading">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title text-center">
              <h4>LATEST JOBS</h4>
              <h1 id="jobs-heading">
                Browse Our Latest Opportunities and
                <br />
                Job Listings
              </h1>
            </div>
          </div>
        </div>
        <div className="row" role="list">
          {jobs.map((job) => (
            <div className="col-lg-4 col-md-6" key={job.id} role="listitem">
              <article
                className="single-blog-box job_card"
                aria-labelledby={`job-title-${job.id}`}
              >
                <div className="single-blog-thumb">
                  <Link
                    to={`/job-details/${job.id}`}
                    aria-label={`View details for ${job.title}`}
                    className="thumb_link"
                  >
                    <img
                      src={job.image}
                      alt={`${job.title} image`}
                      loading="lazy"
                    />
                  </Link>
                </div>
                <div className="job_content">
                  <div className="job_meta_top">
                    <span className="job_company">
                      <i className="bi bi-building" aria-hidden="true"></i>
                      {job.company}
                    </span>
                    <span className="job_location">
                      <i className="bi bi-geo-alt" aria-hidden="true"></i>
                      {job.location}
                    </span>
                  </div>
                  <div className="job_title">
                    <h3 id={`job-title-${job.id}`}>
                      <Link
                        to={`/job-details/${job.id}`}
                        aria-label={`View details for ${job.title}`}
                      >
                        {job.title}
                      </Link>
                    </h3>
                  </div>
                  <p className="job_description">{job.description}</p>
                  <div className="job_footer">
                    <div className="job_info">
                      <span className="job_date">
                        <i className="bi bi-calendar3" aria-hidden="true"></i>
                        <span className="job_date_label">Last Date:</span>
                        <time dateTime={job.dateISO || job.date}>
                          {job.date}
                        </time>
                      </span>
                    </div>
                    <div className="job_btn printmax_btn">
                      <Link
                        to={`/job-details/${job.id}`}
                        aria-label={`Apply to ${job.title}`}
                      >
                        View Details
                        <i className="bi bi-arrow-right" aria-hidden="true"></i>
                        <span></span>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-12 text-center mt-4">
            <div className="section_all_btn">
              <div className="printmax_btn">
                <Link to="/jobs" aria-label="View all jobs">
                  Show All Jobs
                  <i
                    className="flaticon flaticon-right-arrow"
                    aria-hidden="true"
                  ></i>
                  <span></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

JobArea.propTypes = {
  jobs: PropTypes.array,
};

JobArea.defaultProps = {
  jobs: defaultJobs,
};

export default JobArea;
