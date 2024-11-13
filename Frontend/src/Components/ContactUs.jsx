import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactUs = () => {
  return (
    <div className="bg-black text-white px-4 pt-5 pb-10">
      <h2 className="text-4xl font-bold mb-10 text-white  text-center">Contact Us</h2>
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start justify-between">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-64 md:h-[400px] rounded-lg overflow-hidden bg-gray-800 mb-10 md:mb-0 md:mr-8">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093713!2d144.95373531531595!3d-37.81627974201715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f2b1b69f%3A0x506f0b1a47d23a0!2sVictoria!5e0!3m2!1sen!2sus!4v1614800422435!5m2!1sen!2sus"
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Information */}
        <div className="w-full md:w-1/2 flex flex-col space-y-8">
          <p className="text-lg mb-6 text-center md:text-left">
            Reach out to us for any inquiries, assistance, or feedback. We're here to help!
          </p>

          <div className="space-y-6">
            {/* Address */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt size={24} className="text-lime-400" />
              <div>
                <h3 className="text-xl font-bold">Our Address</h3>
                <p className="text-gray-300">123 Fitness Lane, Gym City, TX 78901</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt size={24} className="text-lime-400" />
              <div>
                <h3 className="text-xl font-bold">Phone</h3>
                <p className="text-gray-300">+1 (234) 567-8901</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope size={24} className="text-lime-400" />
              <div>
                <h3 className="text-xl font-bold">Email</h3>
                <p className="text-gray-300">contact@fitnesshub.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
