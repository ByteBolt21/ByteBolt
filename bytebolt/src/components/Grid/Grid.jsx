import React, { useState } from 'react';
import './Grid.css'; // Import your CSS file for additional styling if needed

const Card = ({ icon, title, description, paragragh }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    document.getElementById("homePage").style.backgroundColor = "black";
    document.getElementById("Services").style.backgroundColor = "white";
    document.getElementById("Services").style.color = "black";
    
    
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    document.getElementById("homePage").style.backgroundColor = "white";
    document.getElementById("Services").style.backgroundColor = "black"; 
    document.getElementById("Services").style.color = "white";

    setIsHovered(false);
  };



  return (

    <div className="card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {isHovered ? (
        <div className="hovered-text">
          <p>{paragragh}</p>
        </div>
      ) : (
        <>
          <div className="card-icon">
            {icon}  {/*  Render the provided SVG element */}
            {/* {src} */}
          </div>
          <div className="card-body">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </>
      )}
    </div>


  );
};

const Grid = () => {

  const cards = [

    {
      icon: (

        <img
          src="/logo/mernStack.png"
          alt="MERN STACK"
          width="80px"
          height="80px"
        />
      ),
      title: 'MERN STACK',
      description: 'Efficient development, seamless integration, and scalable solutions',
      paragragh: 'Efficient development, seamless integration, and scalable solutions'
    },

    {
      icon: (
        <img
          src="/logo/uiAndUx.png"
          alt="UI And UX"
          width="80px"
          height="80px"
        />

      ),
      title: 'UI And UX',
      description: 'Intuitive design, seamless experiences, user-centric innovation',
      paragragh: 'Intuitive design, seamless experiences, user-centric innovation'
    },

    {
      icon: (
        <img
          src="/logo/Vector.png"
          alt="EDITING"
          width="80px"
          height="80px"
        />

      ),
      title: 'EDITING',
      description: 'Pixel-perfect photo Editing and video editing mastery.',
      paragragh: 'Pixel-perfect photo Editing and video editing mastery.'
    },

    {
      icon: (
        <img
          src="/logo/shopify.png"
          alt="SHOPIFY"
          width="80px"
          height="80px"
        />

      ),
      title: 'SHOPIFY',
      description: 'WE OFFER SHOPIFY STORE CREATION AND THEME CUSTOMIZATION.',
      paragragh: 'WE OFFER SHOPIFY STORE CREATION AND THEME CUSTOMIZATION.'
    },

    {
      icon: (
        <img
          src="/logo/graphicDesign.png"
          alt="GRAPIC DESIGN"
          width="80px"
          height="80px"
        />

      ),
      title: 'GRAPIC DESIGN',
      description: 'Striking visuals, creative flair, impactful design.',
      paragragh: 'Striking visuals, creative flair, impactful design.'
    },
    {
      icon: (
        <img
          src="/logo/cms.png"
          alt="CMS"
          width="80px"
          height="80px"
        />

      ),
      title: 'CMS',
      description: 'Innovative CMS with Web flow, Framer Motion, and more, enhancing digital journeys.',
      paragragh: 'Innovative CMS with Web flow, Framer Motion, and more, enhancing digital journeys.'
    },



    // Add more cards as needed
  ];

  return (
    <div className="card-grid" >
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
          paragragh={card.paragragh}
        />
      ))}
    </div>
  );
};

export default Grid;
