import React from "react";
import illustration3 from "@/assets/img/illustration/yazeed.jpg";
import Image from "next/image";
import AboutData from "@/assets/jsonData/about/AboutData.json";
import SingleAboutSkill from "./SingleAboutSkill";

const About = () => {
  return (
    <>
      <div id="about" className="about-style-six-area default-padding-top">
        <div className="container">
          <div className="row align-center">
            <div className="about-style-six col-lg-5">
              <div className="thumb">
                <Image
                  style={{ borderRadius: "50%" }}
                  className="wow fadeInUp"
                  src={illustration3}
                  alt="Thumb"
                />
              </div>
            </div>
            <div className="about-style-six col-lg-6 offset-lg-1">
              <h4 className="sub-title">About Me</h4>
              <h2 className="title">
                Bringing Ideas <br /> to Life
              </h2>
              <p>
                Hi, my name is Yazeed Widyan, and I specialize in developing
                high-quality websites and mobile applications that help people
                connect, engage, and achieve their goals. With a deep passion
                for front-end development, I have dedicated my career to
                mastering modern technologies like React.js and React Native.
                Over the past several years, Ive honed my skills in designing
                and building responsive, dynamic websites and mobile apps that
                provide seamless user experiences across all devices.
              </p>
              <div className="skill-list">
                <ul>
                  {AboutData.map((skill) => (
                    <SingleAboutSkill skill={skill} key={skill.id} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
