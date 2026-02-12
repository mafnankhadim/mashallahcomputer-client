import { Link } from "react-router-dom";

// Image imports
import blog1Img from "/assets/images/home_one/blog1.png";
import blog2Img from "/assets/images/home_one/blog2.png";
import blog3Img from "/assets/images/home_one/blog3.png";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Most Popular Printing Idea for T-Shirts",
      image: blog1Img,
      date: "10 AUGUST, 2025",
    },
    {
      id: 2,
      title: "How to Colour Correction in Your 3D Design",
      image: blog2Img,
      date: "10 AUGUST, 2025",
    },
    {
      id: 3,
      title: "Best Quality Printing Tips for Your Print Agency",
      image: blog3Img,
      date: "10 AUGUST, 2025",
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
                  <h4>Our Jobs</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Our Jobs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Job Area */}
      <section className="blog_area style_three">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section_title text-center">
                <h4>LATEST JOBS</h4>
                <h1>
                  Read Our Latest Insights from the <br />
                  Latest Job Articles
                </h1>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.map((post) => (
              <div className="col-lg-4 col-md-6" key={post.id}>
                <div className="single-blog-box">
                  <div className="single-blog-thumb">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="blog-content">
                    <div className="blog-title">
                      <h3>
                        <Link to="/blog-details">{post.title}</Link>
                      </h3>
                    </div>
                    <div className="meta-blog">
                      <p>{post.date}</p>
                    </div>
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

export default Blog;
