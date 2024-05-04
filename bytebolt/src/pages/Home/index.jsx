import React from 'react';
// import Header from '../../components/Header';
import Footer from '../../components/Footers';
import Navbar from '../../components/Navbar/index';
import Contact from '../../components/ContactUs';
import About from '../../components/AboutUs';

const Home = () => {
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            {/* <Header /> */}
            <Navbar scrollToSection={scrollToSection} />
            <main style={{ paddingTop: '20px' }}>
                <section id='home'>
                    <h2>Welcome to our Website</h2>
                    <p>This is the homepage of our website.</p>
                </section>
                <About />
                <Contact />
                {/* Include other sections or components here */}
            </main>
            <Footer />
        </div>
    );
}

//   export default Home;

export default Home;
