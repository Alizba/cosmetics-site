import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full pt-16 pb-8 relative overflow-hidden bg-gray-100">
            <div className="absolute right-10 top-10">
                <div className="w-24 h-24 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCB9B2' }}>
                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F5F5F5' }}>
                        <div className="w-8 h-8 rounded-full" style={{ backgroundColor: '#B23A48' }}></div>
                    </div>
                </div>
            </div>

            <div className="absolute left-20 top-40">
                <div className="w-20 h-20 rounded-full opacity-30" style={{ backgroundColor: '#8C2F39' }}></div>
            </div>

            <div className="absolute left-0 bottom-0">
                <div className="w-32 h-32 rounded-full opacity-20" style={{ backgroundColor: '#B23A48' }}></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

                    <div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#461220' }}>Beauty Brand</h3>
                        <p className="text-gray-600 mb-4">
                            Discover radiant beauty with our collection of clean, cruelty-free cosmetics designed for every skin type.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                                style={{ backgroundColor: '#B23A48' }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8C2F39'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B23A48'}>
                                <Facebook size={16} className="text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                                style={{ backgroundColor: '#B23A48' }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8C2F39'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B23A48'}>
                                <Instagram size={16} className="text-white" />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300"
                                style={{ backgroundColor: '#B23A48' }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8C2F39'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B23A48'}>
                                <Twitter size={16} className="text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#461220' }}>Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Shop All
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    New Arrivals
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Best Sellers
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Skincare
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Makeup
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Gift Sets
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#461220' }}>Customer Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Shipping & Returns
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Track Your Order
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors duration-300">
                                    Terms & Conditions
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold mb-4" style={{ color: '#461220' }}>Stay Connected</h3>
                        <p className="text-gray-600 mb-4">
                            Subscribe to get special offers, free giveaways, and beauty tips.
                        </p>
                        <div className="flex mb-4">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="px-4 py-2 border border-red-800 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
                            />
                            <button
                                className="px-4 py-2 text-white rounded-r-lg transition-colors duration-300"
                                style={{ backgroundColor: '#B23A48' }}
                                onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8C2F39'}
                                onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B23A48'}
                            >
                                Join
                            </button>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center">
                                <Mail size={16} className="mr-2" style={{ color: '#B23A48' }} />
                                <span className="text-gray-600">hello@beautycosmetics.com</span>
                            </div>
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2" style={{ color: '#B23A48' }} />
                                <span className="text-gray-600">+1 (800) 123-4567</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-2" style={{ color: '#B23A48' }} />
                                <span className="text-gray-600">123 Beauty Lane, Los Angeles, CA</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-4 px-6 rounded-lg mb-8" style={{ backgroundColor: '#FED0BB' }}>
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center mb-4 md:mb-0">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#FCB9B2' }}>
                                <svg className="w-5 h-5" style={{ color: '#461220' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path>
                                </svg>
                            </div>
                            <span className="font-medium" style={{ color: '#461220' }}>Free shipping on orders over $50</span>
                        </div>
                        <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: '#FCB9B2' }}>
                                <svg className="w-5 h-5" style={{ color: '#461220' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <span className="font-medium" style={{ color: '#461220' }}>30-day money back guarantee</span>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-500 text-sm mb-4 md:mb-0">
                            © 2025 Beauty Cosmetics. All rights reserved.
                        </p>
                        <div className="flex space-x-4 text-sm text-gray-500">
                            <a href="#" className="hover:text-gray-700 transition-colors duration-300">Privacy Policy</a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-700 transition-colors duration-300">Terms of Service</a>
                            <span>|</span>
                            <a href="#" className="hover:text-gray-700 transition-colors duration-300">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}