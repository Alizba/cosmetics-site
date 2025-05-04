import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would handle form submission here
    alert('Form submitted!');
    console.log(formData);
  };

  return (
    <div className="font-sans" style={{ background: 'linear-gradient(to bottom right, #FED0BB, #FCB9B2)' }}>
      {/* Header */}
      <header className="text-white p-6">
      <h2 className="text-center text-4xl font-serif font-bold" style={{ color: '#461220' }}>Contact Us</h2>
      </header>

      <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12">
        {/* Contact Form Section */}
        <div className="flex-1">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#461220] mb-6">Send Us a Message</h2>
            
            <div onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-[#461220] font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FED0BB]"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#461220] font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FED0BB]"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-[#461220] font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FED0BB]"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-[#461220] font-medium mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FED0BB]"
                ></textarea>
              </div>
              
              <button 
                onClick={handleSubmit} 
                className="w-full bg-[#B23A48] hover:bg-[#8C2F39] text-white py-3 px-6 rounded-md transition duration-300 flex items-center justify-center font-medium"
              >
                <Send size={18} className="mr-2" /> Send Message
              </button>
            </div>
          </div>
        </div>
        
        {/* Contact Information Section */}
        <div className="lg:w-1/3">
          <div className="bg-[#FED0BB] rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-[#461220] mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#FCB9B2] p-3 rounded-full mr-4">
                  <Phone size={20} className="text-[#461220]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#461220]">Phone</h3>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FCB9B2] p-3 rounded-full mr-4">
                  <Mail size={20} className="text-[#461220]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#461220]">Email</h3>
                  <p className="text-gray-700">info@yourcompany.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FCB9B2] p-3 rounded-full mr-4">
                  <MapPin size={20} className="text-[#461220]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#461220]">Location</h3>
                  <p className="text-gray-700">123 Business Street,<br />City Name, ST 12345</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#FCB9B2] p-3 rounded-full mr-4">
                  <Clock size={20} className="text-[#461220]" />
                </div>
                <div>
                  <h3 className="font-medium text-[#461220]">Business Hours</h3>
                  <p className="text-gray-700">Monday - Friday: 9AM - 5PM<br />Saturday: 10AM - 2PM</p>
                </div>
              </div>
            </div>
            
            {/* <div className="mt-8">
              <button className="w-full bg-white text-[#461220] border border-[#461220] hover:bg-gray-100 py-3 px-6 rounded-md transition duration-300 flex items-center justify-center font-medium">
                View Map
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}