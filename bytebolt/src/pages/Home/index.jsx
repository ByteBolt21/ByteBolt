import React from "react";
import Navbar from "../../components/Navbar/Navbar";
// import FullLogoSvg from "../../components/FullLogo/FullLogoSvg";

// import Header from '../../components/Header';

import "./Home.css";
import Grid from "../../components/Grid/Grid";

// import "../Home/footerLogo.png"
import FooterLogo from "../../components/FooterLogo/FooterLogo";
const Home = () => {
    return (
        <div>
            <Navbar />

            <div style={{ height: "100px" }} id="homeSectionId" ></div>
            <section id="sectionOne">
                <h2 className="sectionOneText">IN A WORLD OF BYTES AND ALGORITHMS, WE ARE THE
                    ARCHITECTS
                    <br />
                    OF POSSIBILITY.

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

            <div id="AaboutUsSection">
            </div>
            <div id="AaboutUsSectionId">
            </div>

            <section id="sectionTwo" >
                <div id="AaboutUs" className="blackCard">
                    ABOUT US
                </div>
            </section>
            <div style={{ padding: "70px" }}></div>

            <section id="sectioThree">

                <div className="AboutCard" id="AboutCardFirst">
                    <div className="AboutCardContent">
                        <h2>Byte Bolt is not just a company ,</h2>
                        <p>At Byte Bolt, we believe that technology should be more than just a tool. It should be a catalyst for change, a force for good. That is why we Are dedicated to crafting solutions that not only meet the needs of today but also anticipate the challenges
                            of tomorrow.</p>
                    </div>
                    <div className="Empty">
                        <svg width="600" height="432" viewBox="0 0 600 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.06" d="M174.552 431.287L600 0L172.8 1.73209L173.309 123.487L290.424 122.998L0 432L174.552 431.287Z" fill="black" />
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
                        <p>our clients, our partners, and our team. We understand that behind every project, there are dreams, aspirations, and goals. That Is why we take the time to listen, to understand, and to collaborate closely with our clients every step of the way.</p>
                    </div>
                </div>

                <div className="AboutCard" id="AboutCardFirst">
                    <div className="AboutCardContent">
                        <h2>Byte Bolt is all about people ,</h2>
                        <p>our clients, our partners, and our team. We understand that behind every project, there are dreams, aspirations, and goals. That Is why we take the time to listen, to understand, and to collaborate closely with our clients every step of the way.</p>
                    </div>
                    <div className="Empty">
                        <svg width="600" height="432" viewBox="0 0 600 432" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.06" d="M174.552 431.287L600 0L172.8 1.73209L173.309 123.487L290.424 122.998L0 432L174.552 431.287Z" fill="black" />
                        </svg>
                    </div>
                </div>
            </section>


            {/* ==========Section4 SERVICES */}

            <div id="ServicesSection"></div>
            <div id="ServicesSectionId">
            </div>

            <section id="sectionFour" >
                <div id="Services" className="blackCard">
                    Services
                </div>
            </section>


            <div className="sectionFive">
                <div className="sectionFiveHeading">
                    HOVER OVER EM
                </div>
                <Grid />
            </div>


            <div style={{ padding: "100px" }}></div>

            <section id="sectionSix">
                <div className="fullLogoSvg">
                    <img src="/logo/fullLogo.png" alt="fullLogoSvg" />
                </div>
                <div className="sectionSixContent">
                    Our journey is guided by a set of core values: integrity, innovation, and inclusivity. We believe in doing the right thing, even when no one is watching. We thrive on challenging the status quo, constantly seeking new ways to innovate and improve. And we celebrate diversity, recognizing that the best ideas come from a variety of perspectives.
                </div>

            </section>




            <div id="ContactUsSection"></div>
            <div id="ContactUsSectionId">
            </div>

            <section id="sectionSeven" >
                <div id="ContactUs" className="blackCard">
                    Contact Us
                </div>
            </section>

            <section id="sectionEight">

                <div className="FormContent">
                    <h2 className="FormContentHeading">
                        connect with us
                    </h2>

                    <h2 className="FormContentPara">
                        Ensure your query is received by the right department quickly, simply by filling in the form we can review and ensure you message is handled by the correct people. We enjoy your feedback and find it invaluable in improving our systems and also our procedures.
                    </h2>


                </div>
                <form id="form" >

                    <input type="text" name="name " placeholder="Enter Your Name" />
                    <input type="email" name="email" placeholder="Enter Your email" />
                    <textarea name="formTextArea" id="formTextArea">Enter your Message</textarea>

                    <button id="formSubmitButton">
                        Submit
                    </button>
                </form>
            </section>
            <footer>
                <div className="footerLogo">

                    <FooterLogo />
                </div>
                <div className="footerContent">
                    <div className="footerContentLeft">
                        <div className="footerContentHeading">Connect with us for everything business</div>
                        <ul className="footerLinks">
                            <li><a href="/">icon</a></li>
                            <li><a href="/">icon</a></li>
                            <li><a href="/">icon</a></li>
                        </ul>
                    </div>
                    <div className="footerContentRight">
                        <ul className="footerRightLinks">
                            <li><a href="/">About</a></li>
                            <li><a href="/">Services</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <div className="siteRights">
                    @2024 All rights Reserved
                </div>
            </footer>

        </div>

    );
};

//   export default Home;

export default Home;
