import React from "react";
import "../css/about.css";
import Home_img_01 from "../assets/Home_img_profile_01.jpg";

const workData = [
  {
    role: "Founder & CEO",
    company: "Teckvora",
    duration: "Jul 2025 - Present",
    description: "Build creative websites, e-commerce solutions, and digital tools for clients, focusing on UI/UX and automation."
  },
  {
    role: "eBay Department Leader",
    company: "Digitweb Lanka PVT LTD",
    duration: "Aug 2025 - Present",
    description: "Managing eBay operations by developing strategy, driving sales performance, leading cross-functional teams, ensuring sustainable growth, optimizing processes, and strengthening marketplace competitiveness."
  },
  {
    role: "UK Market Lead",
    company: "Digitweb Lanka PVT LTD",
    duration: "Jan 2025",
    description: "Managing Amazon UK operations by developing strategy, driving sales performance, ensuring sustainable growth, optimizing processes."
  },
  {
    role: "Senior E-Commerce Executive",
    company: "Digitweb Lanka PVT LTD",
    duration: "Feb 2024",
    description: "Driving Amazon & eBay growth through strategy, sales, creative design, content creation, and web development."
  },
  {
    role: "E-Commerce Executive",
    company: "Digitweb Lanka PVT LTD",
    duration: "Feb 2023",
    description: "Manage product listings, optimize sales performance, and track analytics for Amazon & eBay business accounts."
  },
  {
    role: "Web Developer & Graphic Designer",
    company: "Freelancer",
    duration: "Feb 2022",
    description: "Custom websites, business websites, e-commerce website, Logo Design, Banner Design."
  }
];

function About() {
  return (
    <div className="about">
      <div className="first_container">
        {/* Image */}
        <div className="img_container_home">
          <img
            src={Home_img_01}
            alt="Thineshkaran Sureshkaran"
            className="img_01_first_con_home"
          />
        </div>

        {/* Intro */}
        <div className="pos_con_home">
          <label className="txt_home">I am</label>
          <label className="txt_pos_name_home">Thineshkaran Sureshkaran</label>
          <label className="txt_pos_home">
            Software Developer & Senior E-Commerce Executive
          </label>
          <p className="pos_des_home">
            I am a Software Engineering student at ICBT, working at Digitweb
            Lanka and founder of Teckvora. I build modern web apps, e-commerce
            dashboards, performance trackers, task management systems, and
            creative websites that combine technology, design, and business
            growth.
          </p>
        </div>

     
        <section className="about-skills">
          <div className="skill-card">
            <h2>Senior E-commerce Executive</h2>
            <p>Experience in e-commerce and analytics projects.</p>
          </div>
          <div className="skill-card">
            <h2>React, Node.js & PHP Developer</h2>
            <p>Building modern web apps and dashboards.</p>
          </div>
          <div className="skill-card">
            <h2>Graphic Designer</h2>
            <p>Logo Design, Banner Design & more.</p>
          </div>
          <div className="skill-card">
            <h2>AI & Automation</h2>
            <p>Creating tools to simplify workflows.</p>
          </div>
        </section>

     
        <section className="work-experience">
          <h1 className="work-title">Work Experience</h1>
          <div className="timeline">
            {workData.map((item, index) => (
              <div className="timeline-item" key={index}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="role">{item.role}</h3>
                  <span className="company">{item.company}</span>
                  <span className="duration">{item.duration}</span>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
 