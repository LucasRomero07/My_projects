import React from 'react';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="bg-gray-100 p-8 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact</h2>
      <p className="text-lg text-gray-700 mb-2 flex items-center">
        <FaEnvelope className="text-red-500 mr-2" />
        <span className="font-semibold">Email:</span> 
        <a href="mailto:lucas111romero@gmail.com" className="text-blue-500 hover:underline ml-1">lucas111romero@gmail.com</a>
      </p>
      <p className="text-lg text-gray-700 flex items-center">
        <FaWhatsapp className="text-green-500 mr-2" />
        <span className="font-semibold">Phone:</span> 
        <a href="https://wa.me/595991666508" className="text-blue-500 hover:underline ml-1">+595991666508</a>
      </p>
    </section>
  );
}

export default Contact;
