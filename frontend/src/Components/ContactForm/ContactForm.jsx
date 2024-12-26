import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', description: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = 'service_gc315z6';
    const templateIDComp = 'template_n0x1zr6';
    const publicKey = 'KC5Qork5L2fQfGYn5';
    const templateIDCust = 'template_wohon47';

    emailjs
      .send(serviceID, templateIDComp, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });

    emailjs
      .send(serviceID, templateIDCust, formData, publicKey)
      .then((response) => {
        console.log('Email sent successfully:', response.status, response.text);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4 w-full max-w-md">
        <h1 className="text-xl font-semibold text-center">Contact Us</h1>
        {['name', 'email', 'phone'].map((field) => (
          <input
            key={field}
            type={field === 'email' ? 'email' : 'text'}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            className="w-full border rounded-md p-2"
            required
          />
        ))}
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          className="w-full border rounded-md p-2"
          rows="4"
          required
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
