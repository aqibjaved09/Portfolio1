import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from '../header/Header'
import './home.css'
const Home = () => {
  return (
    <>
      <div className="bg-dark text-light min-vh-100">
        <Header/>
        {/* Hero Section */}
        <section id="home" className="d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row align-items-center">
              
              {/* Left Content */}
              <div className="col-lg-8 col-md-12 text-center text-lg-start">
                <h1 className="display-3 fw-bold mb-3 hero-title">
                  Muhammad Aqib Javeed
                </h1>
                
                <h4 className="mb-4 hero-subtitle" style={{ color: "#e5e7eb" }}>
                  Software Engineer | Python Developer | Tech Innovator

                </h4>
                
                <p className="lead mb-5" style={{ color: "#9ca3af", lineHeight: "1.7" }}>
                  In today's digital world, the right software can be your competitive advantage.
                   I build custom business applications that streamline your operations, improve 
                   customer experience, and create new opportunities for growth all while keeping
                    your costs predictable.
                </p>

                {/* Action Buttons */}
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start mb-5">
                  <a 
                    href="#projects" 
                    className="btn btn-primary-custom btn-lg px-4 "
                  >
                    View My Work
                  </a>
                  <a 
                    href="#contact" 
                    className="btn btn-outline-custom btn-lg px-4 "
                  >
                    Get In Touch
                  </a>
                </div>

                {/* Social Links */}
                <div className="d-flex gap-4 justify-content-center justify-content-lg-start">
                  <a 
                    href="https://github.com/aqibjaved09" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-light fs-2 social-icon"
                  >
                    <FaGithub />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/muhammad-aqib-javeed-538b9823a/" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-light fs-2 social-icon"
                  >
                    <FaLinkedin />
                  </a>
                  <a 
                    href="mailto:maqibjaveed04@gmail.com" 
                    className="text-light fs-2 social-icon"
                  >
                    <FaEnvelope />
                  </a>
                </div>
              </div>

              {/* Right Content - Professional Card */}
              <div className="col-lg-4 col-md-12 mt-5 mt-lg-0">
                <div className="text-center">
                  <div 
                    className="card bg-transparent border-0 p-4"
                    style={{
                      background: "linear-gradient(145deg, rgba(168, 85, 247, 0.1), rgba(139, 92, 246, 0.05))",
                      border: "1px solid rgba(168, 85, 247, 0.3)",
                      borderRadius: "20px",
                      backdropFilter: "blur(10px)"
                    }}
                  >
                    <div className="card-body">
                      <div className="rounded-circle mx-auto mb-4" style={{
                        width: "120px",
                         height: "120px",
                          overflow: "hidden",
                           border: "3px solid #a855f7"
                            }}>
                    <img 
                       src="1st.png" 
                        alt="Muhammad Aqib Javeed"
                        className="w-100 h-100"
                         style={{ objectFit: "cover" }}
                          />
                            </div>
                      <h5 className="card-title text-white mb-3">Python Developer</h5>
                      
                      <div className="row text-center">
                        <div className="col-4">
                          <div className="mb-2">
                            <h6 style={{ color: "#a855f7" }}>10+</h6>
                            <small className="text-white">Business Idea </small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-2">
                            <h6 style={{ color: "#a855f7" }}>25+</h6>
                            <small className="text-white">Happy Clients</small>
                          </div>
                        </div>
                        <div className="col-4">
                          <div className="mb-2">
                            <h6 style={{ color: "#a855f7" }}>24/7</h6>
                            <small className="text-white">Support</small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;