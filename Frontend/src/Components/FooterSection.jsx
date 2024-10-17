import React from 'react';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'; // Import the icons you want to use

const FooterSection = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* 1st Column */}
        <div className="text-lg font-bold">BE STRONG</div>

        {/* 2nd Column */}
        <div className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved</div>

        {/* 3rd Column */}
        <div className="flex space-x-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-500">
            <FaInstagram size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-500">
            <FaTwitter size={20} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-500">
            <FaFacebookF size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
