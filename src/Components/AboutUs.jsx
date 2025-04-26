import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import image from '../assets/images/aboutUs.jpeg';

export default function AboutUs() {
    return (
        <section className="w-full py-16" style={{ background: 'linear-gradient(to bottom right, #FED0BB, #FCB9B2)' }}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">About Our Brand</h2>
                    <div className="w-24 h-1 bg-red-800 mx-auto mb-6"></div>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                        Crafted with love and science for your skin's radiance
                    </p>
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="bg-red-100 rounded-lg w-full h-96 overflow-hidden">
                            <img
                                src={image}
                                alt="Our cosmetics production"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-red-50 p-4 rounded-lg shadow-lg hidden md:block">
                            <div className="flex items-center space-x-1">
                                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                                <Star className="text-yellow-500 w-5 h-5 fill-yellow-500" />
                            </div>
                            <p className="text-sm font-medium">Loved by 10,000+ customers</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Story</h3>
                        <p className="text-gray-700 mb-6">
                            Founded in 2015, our brand was born from a passion for combining nature's finest ingredients with cutting-edge cosmetic science. We believe beauty products should enhance your natural radiance while caring for your skin and our planet.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#B23A48' }}>
                                    <span className="text-white font-bold">1</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-lg" style={{ color: '#461220' }}>Clean Ingredients</h4>
                                    <p className="text-gray-700">We source only the purest, most effective ingredients for our formulations.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#B23A48' }}>
                                    <span className="text-white font-bold">2</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-lg" style={{ color: '#461220' }}>Cruelty-Free</h4>
                                    <p className="text-gray-700">Our products are never tested on animals and always ethically produced.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#B23A48' }}>
                                    <span className="text-white font-bold">3</span>
                                </div>
                                <div className="ml-4">
                                    <h4 className="font-bold text-lg" style={{ color: '#461220' }}>Sustainable Packaging</h4>
                                    <p className="text-gray-700">We're committed to reducing environmental impact with recyclable packaging.</p>
                                </div>
                            </div>
                        </div>

                        <button
                            className="flex items-center px-6 py-3 text-white font-medium rounded-lg transition-colors duration-300"
                            style={{ backgroundColor: '#B23A48' }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#8C2F39'}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#B23A48'}
                        >
                            Learn More About Our Values
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </button>
                    </div>
                </div>

       
                <div className="mt-20">
                    <h3 className="text-2xl font-bold mb-10 text-center text-gray-900">Our Core Values</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                     
                        <div className="rounded-lg p-6" style={{ backgroundColor: '#F5F5F5' }}>
                            <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCB9B2' }}>
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-2" style={{ color: '#461220' }}>Innovation</h4>
                            <p className="text-gray-800">
                                We're dedicated to pushing boundaries with innovative formulas that deliver real results.
                            </p>
                        </div>

                     
                        <div className="rounded-lg p-6" style={{ backgroundColor: '#F5F5F5' }}>
                            <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCB9B2' }}>
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-2" style={{ color: '#461220' }}>Sustainability</h4>
                            <p className="text-gray-800">
                                Every decision we make considers our impact on the planet and future generations.
                            </p>
                        </div>

                      
                        <div className="rounded-lg p-6" style={{ backgroundColor: '#F5F5F5' }}>
                            <div className="w-16 h-16 mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: '#FCB9B2' }}>
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                </svg>
                            </div>
                            <h4 className="text-xl font-bold mb-2" style={{ color: '#461220' }}>Inclusivity</h4>
                            <p className="text-gray-800">
                                Beauty comes in all forms, and our products are designed for people of all backgrounds.
                            </p>
                        </div>
                    </div>
                </div>

               
            </div>
        </section>
    );
}