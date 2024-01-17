// YourReactComponent.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white px-5 mt-10">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Footer content (replace with your content) */}
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 w-40 text-primary"><img src="../public/assets/logo/logo.png" alt="" /></h2>
            <ul>
              <li>About Us</li>
              <li>Contact Us</li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-primary">Services</h2>
            <ul>
              <li>Service 1</li>
              <li>Service 2</li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-primary">Follow Us</h2>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              {/* Add more links as needed */}
            </ul>
          </div>
          <div className="mb-8">
            <h2 className="text-lg font-bold mb-4 text-primary">Subscribe</h2>
            <p className="mb-4">Subscribe to our newsletter for updates.</p>
            {/* Add a subscription form or additional content */}
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-gray-400">This project is under construction and not completed.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
