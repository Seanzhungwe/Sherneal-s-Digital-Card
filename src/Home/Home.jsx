import { useState } from "react";

// import LinkedIn from "../Icons/LinkedIn.png";
// import FaceBook from "../Icons/FaceBook.png";
// import Insta from "../Icons/Insta.png";
// import Globe from "../Icons/Globe.png";
// import Phone from "../Icons/Phone.png";

// import {
//   FaLinkedin,
//   FaFacebook,
//   FaInstagram,
//   FaGlobe,
//   FaChevronDown,
//   FaEnvelope,
//   FaPhone,
// } from "react-icons/fa";

import { MdVerified} from "react-icons/md";

import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaGlobe,
  FaChevronDown,
  FaEnvelope,
  FaPhoneAlt,

} from "react-icons/fa";



import "./Home.css";
import profilePic from "../Images/sherneal-light.jpg";
import logo2 from "/s-logo2.svg";

function Home() {
  const [liked, setLiked] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const socialData = [
    // {
    //   icon: <FaLinkedinIn size={15} />,
    //   username: "sherneal joseph",
    //   url: "https://www.linkedin.com/in/sherneal-joseph-4312ba354?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    // },
    {
      icon: <FaFacebookF size={15} />,
      username: "sherneal.joseph",
      url: "https://www.instagram.com/sherneal.joseph?igsh=MXh3ZDVvYmI5dzF0aA==",
    },
    {
      icon: <FaGlobe size={15} />,
      username: "shernealjoseph.com",
      url: "https://www.shernealjoseph.com/",
    },

    {
      icon: <FaInstagram size={17} />,
      username: "sherneal joseph",
      url: "https://www.facebook.com/share/1cC616KcsX/",
    },

    {
      icon: <FaPhoneAlt size={14} />,
      username: "+263 713 665 492",
      url: "tel:+263713665492",
    },
  ];

  return (
    // <div className="backdrop">
    <div className="backdrop" style={{ backgroundImage: `url(${profilePic})` }}>
      <div
        className="backdrop-blur-bg"
        style={{ backgroundImage: `url(${profilePic})` }}
      />
      <div className="backdrop-blur-layer" />

      <div className={`card ${expanded ? "card--expanded" : ""}`}>
        <div className="logo-container">
          <img className="logo-svg" src={logo2} alt="" />
        </div>

        <div className="card-image-wrap">
          <img
            // src="src/Images/Sherneal-dark.jpg"
            // src="src/Images/sherneal-light.jpg"
            src={profilePic}
            alt="Profile"
            className="card-image"
            draggable={false}
          />
          <div className="card-fade-overlay" />
        </div>

        <div className="content">
          <div className="header">
            <p className="sub-title">Fitness with</p>
            <div className="title-block">
              <h2 className="title">Sherneal Joseph</h2>
              <MdVerified color="ff9f89" className="veritick" />
            </div>
            <p className="description">
              Results don't come from <span>'maybe next Monday'</span> Let's
              start building your best self today!
            </p>
          </div>

          <div className="social-container">
            <div className={`icons ${expanded ? "icons--expanded" : ""}`}>
              {socialData.map((social, index) => (
                <a
                  key={index}
                  href={social.url} // This will now be "tel:+263713665492"
                  target={social.url.startsWith("http") ? "_blank" : "_self"} // Only use _blank for websites
                  rel="noopener noreferrer"
                  className="icon"
                >
                  {social.icon}
                  {expanded && (
                    <span className="username">{social.username}</span>
                  )}
                </a>
              ))}
            </div>

            <button
              className={`socials-expand-btn ${expanded ? "socials-expand-btn--active" : ""}`}
              onClick={() => setExpanded(!expanded)}
              aria-label="Expand socials"
            >
              <FaChevronDown />
            </button>
          </div>

          {/* get in touch button */}
          <a href="mailto:info@shernealjoseph.com" className="contact-btn">
            Get In Touch
            <FaEnvelope size={16} />
          </a>
        </div>

        <button
          className={`like-btn ${liked ? "like-btn--liked" : ""}`}
          onClick={() => setLiked((s) => !s)}
        >
          <svg
            viewBox="0 0 24 24"
            fill={liked ? "currentColor" : "none"}
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Home;
