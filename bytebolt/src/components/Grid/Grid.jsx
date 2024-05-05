import React from 'react';
import './Grid.css'; // Import your CSS file for additional styling if needed

const Card = ({ icon, title, description }) => {
  return (
    <div className="card">
      <div className="card-icon">
        {icon} {/* Render the provided SVG element */}
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Grid = () => {
  const cards = [
   
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="80px"
          height="80px"
        >
          <path d="M10 2h4v3h-4V2zm0 4h4v6h-4V6zm10 9h-1.5V10H16v5H8v-5H5.5v5H4v-5H2v7h20v-7h-2v5zm-5-5v5h1.5v-5H15zm-6 0v5h1.5v-5H9z" />
        </svg>
      ),
      title: 'Card 1 Title',
      description: 'Efficient development, seamless integration, and scalable solutions.',
    },
   
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="80px"
          height="80px"
        >
          <path d="M10 2h4v3h-4V2zm0 4h4v6h-4V6zm10 9h-1.5V10H16v5H8v-5H5.5v5H4v-5H2v7h20v-7h-2v5zm-5-5v5h1.5v-5H15zm-6 0v5h1.5v-5H9z" />
        </svg>
      ),
      title: 'Card 1 Title',
      description: 'Efficient development, seamless integration, and scalable solutions.',
    },
   
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="80px"
          height="80px"
        >
          <path d="M10 2h4v3h-4V2zm0 4h4v6h-4V6zm10 9h-1.5V10H16v5H8v-5H5.5v5H4v-5H2v7h20v-7h-2v5zm-5-5v5h1.5v-5H15zm-6 0v5h1.5v-5H9z" />
        </svg>
      ),
      title: 'Card 1 Title',
      description: 'Efficient development, seamless integration, and scalable solutions.',
    },
   
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="80px"
          height="80px"
        >
          <path d="M10 2h4v3h-4V2zm0 4h4v6h-4V6zm10 9h-1.5V10H16v5H8v-5H5.5v5H4v-5H2v7h20v-7h-2v5zm-5-5v5h1.5v-5H15zm-6 0v5h1.5v-5H9z" />
        </svg>
      ),
      title: 'Card 1 Title',
      description: 'Efficient development, seamless integration, and scalable solutions.',
    },
   
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="80px"
          height="80px"
        >
          <path d="M10 2h4v3h-4V2zm0 4h4v6h-4V6zm10 9h-1.5V10H16v5H8v-5H5.5v5H4v-5H2v7h20v-7h-2v5zm-5-5v5h1.5v-5H15zm-6 0v5h1.5v-5H9z" />
        </svg>
      ),
      title: 'Card 1 Title',
      description: 'Efficient development, seamless integration, and scalable solutions.',
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="80px"
          height="80px"
        >
          <path d="M10 2h4v3h-4V2zm0 4h4v6h-4V6zm10 9h-1.5V10H16v5H8v-5H5.5v5H4v-5H2v7h20v-7h-2v5zm-5-5v5h1.5v-5H15zm-6 0v5h1.5v-5H9z" />
        </svg>
      ),
      title: 'Card 1 Title',
      description: 'Efficient development, seamless integration, and scalable solutions.',
    },
 

   
    // Add more cards as needed
  ];

  return (
    <div className="card-grid">
      {cards.map((card, index) => (
        <Card
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default Grid;
