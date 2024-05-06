import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import "./Home.css";
import Grid from "../../components/Grid/Grid";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

// import "../Home/footerLogo.png"
import ByteBoltHorizontal from "../../components/ByteBoltHorizontal/ByteBoltHorizontal";
const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };



  const handleSubmit = async (e) => {

    e.preventDefault();

    const formDataToSend = new FormData(e.target);
    try {
      const response = await fetch(e.target.action, {
        method: "POST",
        body: formDataToSend,
      });
      const data = await response.json();
      if (data.result === "success") {
        toast.success("Form submitted successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        toast.error("An error occurred while submitting the form");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred while submitting the form");
    }
  };


  return (
    <div id="homePage">
      <Navbar />



      {/* ====================  Section One ==================== */}
      <div className="wrapperForSectionOne">
        <section id="sectionOne">
          <h2 className="sectionOneText">
            IN A WORLD OF BYTES AND ALGORITHMS, WE
            <br />
            ARE THE ARCHITECTS OF POSSIBILITY.
          </h2>
          <div className="sectionOneSvg">
            <svg
              width="600"
              height="500"
              viewBox="0 0 600 432"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.06"
                d="M425.448 0.713208L0 432L427.2 430.268L426.691 308.513L309.576 309.002L600 0L425.448 0.713208Z"
                fill="black"
              />
            </svg>
          </div>
        </section>
      </div>

      {/*==================== Section Two==================== */}

      <div className="wrapperForSectionTwo">
        <div id="AaboutUsSection"></div>
        <div id="AaboutUsSectionId"></div>

        <div className="container">
          <section id="sectionTwo">
            <div id="AaboutUs" className="blackCard">
              ABOUT US
            </div>
          </section>
        </div>
        <div style={{ padding: "70px" }}></div>
        {/*==================== Section Three ABOUT CARDS==================== */}
        <section id="sectioThree">
          <div className="AboutCard" id="AboutCardFirst">
            <div className="AboutCardContent">
              <h2>Byte Bolt is not just a company ,</h2>
              <p>
                At Byte Bolt, we believe that technology should be more than
                just a tool. It should be a catalyst for change, a force for
                good. That is why we Are dedicated to crafting solutions that
                not only meet the needs of today but also anticipate the
                challenges of tomorrow.
              </p>
            </div>
            <div className="Empty">
              <svg
                width="600"
                height="432"
                viewBox="0 0 600 432"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.06"
                  d="M174.552 431.287L600 0L172.8 1.73209L173.309 123.487L290.424 122.998L0 432L174.552 431.287Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>

          <div className="AboutCard" id="AboutCardFirst">
            <div className="Empty">
              <svg
                width="600"
                height="500"
                viewBox="0 0 600 432"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.06"
                  d="M425.448 0.713208L0 432L427.2 430.268L426.691 308.513L309.576 309.002L600 0L425.448 0.713208Z"
                  fill="black"
                />
              </svg>
            </div>

            <div className="AboutCardContent">
              <h2>Byte Bolt is all about people ,</h2>
              <p>
                our clients, our partners, and our team. We understand that
                behind every project, there are dreams, aspirations, and goals.
                That Is why we take the time to listen, to understand, and to
                collaborate closely with our clients every step of the way.
              </p>
            </div>
          </div>

          <div className="AboutCard" id="AboutCardFirst">
            <div className="AboutCardContent">
              <h2>Byte Bolt is all about people ,</h2>
              <p>
                our clients, our partners, and our team. We understand that
                behind every project, there are dreams, aspirations, and goals.
                That Is why we take the time to listen, to understand, and to
                collaborate closely with our clients every step of the way.
              </p>
            </div>
            <div className="Empty">
              <svg
                width="600"
                height="432"
                viewBox="0 0 600 432"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.06"
                  d="M174.552 431.287L600 0L172.8 1.73209L173.309 123.487L290.424 122.998L0 432L174.552 431.287Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </section>
      </div>

      {/*==================== Section Four==================== */}

      <div id="ServicesSection"></div>
      <div id="ServicesSectionId"></div>

      <div className="container">

        <section id="sectionFour">
          <div id="Services" className="blackCard">
            Services
          </div>
        </section>
      </div>

      {/*==================== Section Five==================== */}

      <div className="sectionFiveWrapper">
        <div className="sectionFive">
          <div className="sectionFiveHeading">HOVER OVER EM</div>
          <Grid />
        </div>
      </div>

      {/*==================== Section SIX==================== */}

      <div style={{ padding: "100px" }}></div>
      <div className="wrapperForSectionSix">
        <section id="sectionSix">
          <div className="fullLogoSvg">
            <img src="/logo/fullLogo.png" alt="fullLogoSvg" />
            {/* <FullLogoSvg/> */}
          </div>
          <div className="sectionSixContent">
            Our journey is guided by a set of core values: integrity,
            innovation, and inclusivity. We believe in doing the right thing,
            even when no one is watching. We thrive on challenging the status
            quo, constantly seeking new ways to innovate and improve. And we
            celebrate diversity, recognizing that the best ideas come from a
            variety of perspectives.
          </div>
        </section>
      </div>

      {/*==================== Section SEVEN==================== */}
      <div id="ContactUsSection"></div>
      <div id="ContactUsSectionId"></div>
      <div className="container">

        <section id="sectionFour">
          <div id="Services" className="blackCard" style={{ marginTop: "50px" }}>
            Contact US
          </div>
        </section>
      </div>

      {/*==================== Section EIGHT==================== */}

      <div className="wrapperForSectionEight">
        <section id="sectionEight">
          <div className="FormContent">
            <h2 className="FormContentHeading">connect with us</h2>

            <h2 className="FormContentPara">
              Ensure your query is received by the right department quickly,
              simply by filling in the form we can review and ensure you message
              is handled by the correct people. We enjoy your feedback and find
              it invaluable in improving our systems and also our procedures.
            </h2>
          </div>
          <form
            id="form"
            action="https://script.google.com/macros/s/AKfycbyFiLSjKOvecOswTp8QiPbwAiu5MVHi3PK_9wpMP67xVageD6vLacm77FnGv-iCJ3A8/exec"
            method="post"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleInputChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <textarea
              id="formTextArea"
              name="message"
              placeholder="Enter your Message"
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
            <button id="formSubmitButton" type="submit">Submit</button>
          </form>
        </section>
      </div>

      {/* //Footer */}

      <div className="footerWrapper">
        <div className="footer">
          <div className="footerLogo">
            <ByteBoltHorizontal />
          </div>
          <div className="footerContent">
            <div className="footerContentLeft">
              <div className="footerContentHeading">
                Connect with us for everything business
              </div>
              <ul className="footerLinks">
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M 16 3 C 8.8545455 3 3 8.8545455 3 16 L 3 34 C 3 41.145455 8.8545455 47 16 47 L 34 47 C 41.145455 47 47 41.145455 47 34 L 47 16 C 47 8.8545455 41.145455 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.054545 5 45 9.9454545 45 16 L 45 34 C 45 40.054545 40.054545 45 34 45 L 16 45 C 9.9454545 45 5 40.054545 5 34 L 5 16 C 5 9.9454545 9.9454545 5 16 5 z M 37 11 C 35.9 11 35 11.9 35 13 C 35 14.1 35.9 15 37 15 C 38.1 15 39 14.1 39 13 C 39 11.9 38.1 11 37 11 z M 25 14 C 18.954545 14 14 18.954545 14 25 C 14 31.045455 18.954545 36 25 36 C 31.045455 36 36 31.045455 36 25 C 36 18.954545 31.045455 14 25 14 z M 25 16 C 29.954545 16 34 20.045455 34 25 C 34 29.954545 29.954545 34 25 34 C 20.045455 34 16 29.954545 16 25 C 16 20.045455 20.045455 16 25 16 z"></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                    >
                      <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="footerContentRight">
              <ul className="footerRightLinks">
                <li>
                  <a href="#AaboutUsSectionId">About</a>
                </li>
                <li>
                  <a href="#ServicesSectionId">Services</a>
                </li>
                <li>
                  <a href="#ContactUsSectionId">Contact</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="siteRights">@2024 All rights Reserved</div>
        </div>
      </div>
    </div>
  );
};

//   export default Home;

export default Home;
