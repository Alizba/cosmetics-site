
import { useState } from 'react';
import { Mail, Lock, User, Calendar, ChevronRight, Sparkles, Heart, Gift } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import framer-motion
import image from '../assets/images/signlady.webp'

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up attempt with:', { email, password, confirmPassword, fullName, birthdate, agreeTerms, newsletter });
    // Add registration logic here
  };

  // Animation variants
  const pageVariants = {
    initial: {
      opacity: 0,
      x: 100
    },
    in: {
      opacity: 1,
      x: 0
    },
    out: {
      opacity: 0,
      x: -100
    }
  };

  const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 0.5
  };

  // Form field animation variants
  const formVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div 
      className="flex h-screen w-full"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="hidden md:flex md:w-2/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="Beauty Products" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#B23A48] via-[#FCB9B2] to-[#461220] opacity-50 z-10"></div>
        
        <motion.div 
          className="absolute inset-0 flex flex-col justify-center items-center text-white p-10 z-20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <div className="text-3xl font-bold mb-4">JOIN OUR BEAUTY CLUB</div>
          <div className="text-xl mb-6">CREATE YOUR ACCOUNT</div>
          <div className="w-16 h-16 flex items-center justify-center">
            <Gift className="text-[#FED0BB]" size={36} />
          </div>
          <div className="mt-8 text-center text-[#FED0BB] max-w-xs">
            Sign up today to receive exclusive offers, beauty tips, and early access to new products.
          </div>
          <div className="mt-6 flex items-center">
            <Sparkles className="text-[#FED0BB] mr-2" size={16} />
            <span className="text-[#FED0BB]">Get 15% off your first order</span>
          </div>
        </motion.div>
      </div>

      <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-6 bg-white overflow-y-auto">
        <div className="w-full max-w-md">
     
          <motion.div 
            className="flex flex-col items-center mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2 relative">
              <div className="absolute -top-2 -right-2">
                <Heart className="text-[#B23A48]" size={16} fill="#B23A48" />
              </div>
              <svg 
                viewBox="0 0 100 100" 
                className="w-16 h-16 text-[#B23A48]"
                fill="currentColor"
              >
                <path d="M50,20 A30,30 0 1,0 50,80 A30,30 0 1,0 50,20 Z M50,35 A15,15 0 1,1 50,65 A15,15 0 1,1 50,35 Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#461220]">CREATE ACCOUNT</h1>
            <p className="text-sm text-[#B23A48] mt-1">Your personalized beauty experience awaits</p>
          </motion.div>

          <motion.div 
            className="space-y-4"
            variants={formVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="relative" variants={itemVariants}>
              <User className="absolute left-2 top-3 text-[#B23A48]" size={20} />
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
              />
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <Mail className="absolute left-2 top-3 text-[#B23A48]" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
              />
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <Calendar className="absolute left-2 top-3 text-[#B23A48]" size={20} />
              <input
                type="date"
                placeholder="Date of Birth"
                value={birthdate}
                onChange={(e) => setBirthdate(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
              />
              <p className="text-xs text-[#B23A48] mt-1">For birthday rewards and age-appropriate recommendations</p>
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <Lock className="absolute left-2 top-3 text-[#B23A48]" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
              />
            </motion.div>

            <motion.div className="relative" variants={itemVariants}>
              <Lock className="absolute left-2 top-3 text-[#B23A48]" size={20} />
              <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
              />
            </motion.div>

            <motion.div className="flex items-start mt-6" variants={itemVariants}>
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 accent-[#B23A48] focus:ring-[#B23A48]"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-[#461220]">
                  I agree to the <a href="#" className="text-[#B23A48] hover:text-[#8C2F39]">Terms of Service</a> and <a href="#" className="text-[#B23A48] hover:text-[#8C2F39]">Privacy Policy</a>
                </label>
              </div>
            </motion.div>

            <motion.div className="flex items-start" variants={itemVariants}>
              <div className="flex items-center h-5">
                <input
                  id="newsletter"
                  type="checkbox"
                  checked={newsletter}
                  onChange={(e) => setNewsletter(e.target.checked)}
                  className="w-4 h-4 accent-[#B23A48] focus:ring-[#B23A48]"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="newsletter" className="text-[#461220]">
                  Subscribe to our newsletter for exclusive offers and beauty tips
                </label>
              </div>
            </motion.div>

            <motion.div className="mt-6" variants={itemVariants}>
              <motion.button
                onClick={handleSubmit}
                className="w-full py-3 bg-[#B23A48] text-white rounded-full hover:bg-[#8C2F39] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                CREATE ACCOUNT
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <div className="text-center mb-4 text-[#461220]">Or Sign Up with</div>
            <div className="flex justify-center space-x-4">
              <motion.button 
                className="flex items-center space-x-2 px-4 py-2 border border-[#FED0BB] rounded-md hover:bg-[#FED0BB] hover:bg-opacity-10 w-1/2 justify-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(254, 208, 187, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                  />
                </svg>
                <span className="text-[#461220]">Google</span>
              </motion.button>
              <motion.button 
                className="flex items-center space-x-2 px-4 py-2 border border-[#FED0BB] rounded-md hover:bg-[#FED0BB] hover:bg-opacity-10 w-1/2 justify-center"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(254, 208, 187, 0.1)" }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#1877F2"
                    d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.014c0 .548.445.993.993.993h8.621v-6.972h-2.346v-2.717h2.346V9.31c0-2.325 1.42-3.591 3.494-3.591.993 0 1.847.074 2.096.107v2.43h-1.438c-1.128 0-1.346.536-1.346 1.323v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"
                  />
                </svg>
                <span className="text-[#461220]">Facebook</span>
              </motion.button>
            </div>
          </motion.div>

          <motion.div 
            className="mt-8 text-center pb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <p className="text-[#461220]">
              Already have an account?{" "}
              <Link to="/signin" className="text-[#B23A48] hover:text-[#8C2F39] font-semibold">
                Login
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default SignUp;