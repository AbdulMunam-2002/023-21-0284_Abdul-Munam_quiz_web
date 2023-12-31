import React from 'react';
import image from '../assets/images/IBA logo.png';

function Footer() {
  const containerStyle = {
    padding: '20px',
    background: '#343a40',
  };

  return (
    <>
      <div style={containerStyle} className="text-white d-flex align-items-center justify-content-center mt-5">
        <img
          src={image}
          alt="Your Image"
          width="50"
          height="50"
          className="mr-2"
        />
        All copyrights are reserved by Sukkur IBA University
      </div>
    </>
  );
}

export default Footer;