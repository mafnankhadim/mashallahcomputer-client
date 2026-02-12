import { Link } from "react-router-dom";

// Image imports
import collection1Img from "/assets/images/home_one/collection1.jpg";
import collection2Img from "/assets/images/home_one/collection2.jpg";
import collection3Img from "/assets/images/home_one/collection3.jpg";
import blogDtlsImg from "/assets/images/inner-img/blog-dtls.jpg";
import galaryImg from "/assets/images/inner-img/galary.jpg";
import galary1Img from "/assets/images/inner-img/galary1.jpg";
import authorImg from "/assets/images/inner-img/aouthor.png";
import comment2Img from "/assets/images/inner-img/comment2.png";
import comntPlImg from "/assets/images/inner-img/comnt-pl.png";

const BlogDetails = () => {
  const categories = [
    { name: "Yard Cleaning", link: "/service-details" },
    { name: "Garden Makeup", link: "/service-details" },
    { name: "Landscaping", link: "/service-details" },
    { name: "Lawn Mowing", link: "/service-details" },
    { name: "Decorative Plants", link: "/service-details" },
  ];

  const recentPosts = [
    {
      id: 1,
      title: "Build Progre Enhany Acces Filterable",
      date: "Jan, 26 2025",
      image: collection1Img,
    },
    {
      id: 2,
      title: "JavaScript Requirem For Acces ponen",
      date: "Jan, 18 2025",
      image: collection2Img,
    },
    {
      id: 3,
      title: "Build Progre Enhany Acces Filterable",
      date: "Jan, 15 2025",
      image: collection3Img,
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
                  <h4>Blog Details</h4>
                </div>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>Blog Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Details Area */}
      <div className="blog-detials-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details-main">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-details-meta">
                      <span>
                        <i className="far fa-user"></i> By Admin
                      </span>
                      <span>
                        <i className="far fa-calendar-alt"></i> Aug 15 2025
                      </span>
                      <span>
                        <i className="far fa-comments"></i> 3 Comments
                      </span>
                    </div>
                    <div className="blog-details-content">
                      <h2>
                        Briefly introduce the topic of T-shirts and why <br />
                        they are relevant or interesting.
                      </h2>
                      <p>
                        Integer pretium dolor id ligula elementum, at vulputate
                        dolor accumsan. Nam eget massa et erat iaculis posuere
                        id a neque. Morbi bibendum nisi vel eros ultrices,
                        fringilla tincidunt nibh vehicula. Integer id nisl
                        turpis. Aliquam sed ipsum quis nulla finibus rhoncus sit
                        amet id nunc. Nunc justo quam, egestas a dictum ac,
                        imperdiet eu diam.
                      </p>
                    </div>
                    <div className="blog-details-thumb">
                      <img src={blogDtlsImg} alt="Blog Details" />
                    </div>
                    <div className="blog-details-des">
                      <p>
                        Vestibulum felis sapien, aliquam vitae dolor ac, ornare
                        eleifend elit. Nam pharetra nibh eu erat gravida, eu
                        aliquam arcu euismod. Mauris varius elit quis ex
                        malesuada, non tristique arcu iaculis. Suspendisse risus
                        purus, ullamcorper pellentesque faucibus vel, aliquet
                        non purus.
                      </p>
                      <p>
                        Nulla vitae orci luctus risus tristique sollicitudin sed
                        at quam. Nulla sem dui, faucibus sit amet justo sed,
                        laoreet ornare leo. In eleifend turpis tellus, a luctus
                        eros imperdiet vitae. Ut vitae maximus enim.
                      </p>
                    </div>
                    <div className="blog-details-blockquote">
                      <blockquote>
                        Nulla vitae orci luctus risus tristique sollicitudin sed
                        at quam. Nulla sem dui, faucibus sit amet justo sed,
                        laoreet ornare leo. In eleifend turpis tellus, a luctus
                        eros imperdiet
                      </blockquote>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-details-video-thumb">
                      <img src={galaryImg} alt="Gallery" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-details-video-thumb">
                      <div className="blog-details-video-thumb-inner">
                        <img src={galary1Img} alt="Gallery" />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="blog-details-content">
                      <h3>Get a diagnostic test for your car</h3>
                      <p>
                        Nulla vitae orci luctus risus tristique sollicitudin sed
                        at quam. Nulla sem dui, faucibus sit amet justo sed,
                        laoreet ornare leo. In eleifend turpis tellus, a luctus
                        eros imperdiet vitae.
                      </p>
                    </div>
                    <div className="blog-details-content-list">
                      <p>
                        <i className="fas fa-check"></i> The right logistics
                        decision for your firm
                      </p>
                      <p>
                        <i className="fas fa-check"></i> Logistics company with
                        logistics solutions.
                      </p>
                      <p>
                        <i className="fas fa-check"></i> Planning for the
                        region's economic future.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="blog-details-content">
                      <h3>Related Post</h3>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-details-button">
                      <a href="#">Logistics</a>
                      <a className="active" href="#">
                        Logistics
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="blog-details-social">
                      <a href="#">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                      <a href="#">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="blog-details-author">
                      <div className="blog-details-author-inner">
                        <div className="blog-details-author-thumb">
                          <img src={authorImg} alt="Author" />
                        </div>
                        <div className="blog-details-author-content">
                          <h2>David beckham</h2>
                          <p>
                            Proin dignissim consectetur est eu aliquam. In ut
                            ligula eget ex sodales placerat et nec nibh.
                            Pellentesque finibus erat tempor ultricies
                            vestibulum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="blog-details-content">
                      <h3>2 Comments</h3>
                    </div>
                    <div className="blog-details-comment">
                      <div className="blog-details-comment-reply">
                        <a href="#">Reply</a>
                      </div>
                      <div className="blog-details-comment-thumb">
                        <img src={comment2Img} alt="Comment" />
                      </div>
                      <div className="blog-details-comment-content">
                        <h2>Michael jordan</h2>
                        <span>22 January, 2025</span>
                        <p>
                          Nulla vitae orci luctus risus tristique sollicitudin
                          sed at quam. Nulla sem dui, faucibus sit amet justo
                          sed, laoreet ornare leo.
                        </p>
                      </div>
                    </div>
                    <div className="blog-details-comment reply">
                      <div className="blog-details-comment-reply">
                        <a href="#">Reply</a>
                      </div>
                      <div className="blog-details-comment-thumb">
                        <img src={comntPlImg} alt="Comment" />
                      </div>
                      <div className="blog-details-comment-content">
                        <h2>Alfat Hossen</h2>
                        <span>28 January, 2025</span>
                        <p>
                          Hello vitae orci luctus risus tristique sollicitudin
                          sed at quam. Karet sem dui, faucibus sit amet justo
                          sed, ornare deo
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="blog-details-contact">
                    <div className="blog-details-content">
                      <h3>Post Comment</h3>
                    </div>
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="POST"
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="input-box">
                            <input
                              type="text"
                              name="Name"
                              placeholder="Full Name"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="input-box">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-12 col-md-12">
                          <div className="input-box">
                            <textarea
                              name="message"
                              id="message"
                              cols="30"
                              rows="10"
                              placeholder="Your Message..."
                            ></textarea>
                          </div>
                          <div className="input-button">
                            <button type="submit">
                              Submit Now <i className="fas fa-arrow-right"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              {/* Search Widget */}
              <div className="widget_search">
                <form action="#" method="get">
                  <input
                    type="text"
                    name="s"
                    placeholder="Search Here"
                    title="Search for:"
                  />
                  <button type="submit" className="icons">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>

              {/* Categories Widget */}
              <div className="widget-categories-box">
                <div className="categories-title">
                  <h4>Category</h4>
                </div>
                <div className="widget-categories-menu">
                  <ul>
                    {categories.map((cat, index) => (
                      <li key={index}>
                        <Link to={cat.link}>
                          {cat.name}
                          <span>
                            <i className="fas fa-arrow-right"></i>
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recent Posts Widget */}
              <div className="widget-categories-box">
                <div className="categories-title">
                  <h4>Recent Post</h4>
                </div>
                {recentPosts.map((post) => (
                  <div className="sidber-widget-recent-post" key={post.id}>
                    <div className="recent-widget-thumb">
                      <img src={post.image} alt={post.title} />
                    </div>
                    <div className="recent-widget-content">
                      <span>{post.date}</span>
                      <a href="#">{post.title}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
