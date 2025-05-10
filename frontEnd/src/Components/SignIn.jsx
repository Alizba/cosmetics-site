import { useState } from 'react';
import image from '../assets/images/signlady.webp'
import { Mail, Lock, Sparkles, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  

  // Login Form Submit Handler
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateLoginForm()) {
      console.log('Login attempt with:', { email, password });

      // Make API call to your backend
      fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Login failed');
          }
          return response.json();
        })
        .then(data => {
          console.log('Login response:', data);
          setIsSubmitting(false);

          // Store the token in localStorage
          if (data.token) {
            localStorage.setItem('token', data.token);
          }
           navigate('/component/userPage/Userlanding');
          
        })
        .catch(error => {
          setIsSubmitting(false);
          setErrors({ general: error.message || 'Invalid email or password. Please try again.' });
          console.error('Login error:', error);
        });
    } else {
      setIsSubmitting(false);
    }
  };

  // Login Form Validation
  const validateLoginForm = () => {
    const newErrors = {};

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Update errors state
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Animation variants
  const pageVariants = {
    initial: { opacity: 0, x: -100 },
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: 100 }
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
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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
      role="main"
    >
      <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <motion.div
            className="flex flex-col items-center mb-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-2 relative">
              <div className="absolute -top-2 -right-2" aria-hidden="true">
                <Heart className="text-[#B23A48]" size={16} fill="#B23A48" />
              </div>
              <svg
                viewBox="0 0 100 100"
                className="w-16 h-16 text-[#B23A48]"
                fill="currentColor"
                aria-label="GLAM Logo"
                role="img"
              >
                <path d="M50,20 A30,30 0 1,0 50,80 A30,30 0 1,0 50,20 Z M50,35 A15,15 0 1,1 50,65 A15,15 0 1,1 50,35 Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-[#461220]">GLAM LOGIN</h1>
            <p className="text-sm text-[#B23A48] mt-1">Your beauty journey starts here</p>
          </motion.div>

          <form onSubmit={handleLoginSubmit} noValidate>
            <motion.div
              className="space-y-6"
              variants={formVariants}
              initial="hidden"
              animate="visible"
            >
              {errors.general && (
                <motion.div
                  className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                  role="alert"
                  variants={itemVariants}
                >
                  <span className="block sm:inline">{errors.general}</span>
                </motion.div>
              )}

              <motion.div className="relative" variants={itemVariants}>
                <label htmlFor="email" className="sr-only">Email</label>
                <Mail className="absolute left-2 top-3 text-[#B23A48]" size={20} aria-hidden="true" />
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full py-3 pl-10 pr-4 border-b ${errors.email ? 'border-red-500' : 'border-[#FCB9B2]'} focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]`}
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-xs mt-1">
                    {errors.email}
                  </p>
                )}
              </motion.div>

              <motion.div className="relative" variants={itemVariants}>
                <label htmlFor="password" className="sr-only">Password</label>
                <Lock className="absolute left-2 top-3 text-[#B23A48]" size={20} aria-hidden="true" />
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`w-full py-3 pl-10 pr-4 border-b ${errors.password ? 'border-red-500' : 'border-[#FCB9B2]'} focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]`}
                  aria-invalid={errors.password ? "true" : "false"}
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                {errors.password && (
                  <p id="password-error" className="text-red-500 text-xs mt-1">
                    {errors.password}
                  </p>
                )}
              </motion.div>

              <motion.div className="flex justify-between items-center" variants={itemVariants}>
                <a
                  href="#"
                  className="text-sm text-[#B23A48] hover:text-[#8C2F39] focus:outline-none focus:underline"
                >
                  Forgot Password?
                </a>
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-[#B23A48] text-white rounded-full hover:bg-[#8C2F39] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B23A48] focus:ring-offset-2 disabled:opacity-70"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'LOGGING IN...' : 'LOGIN'}
                </motion.button>
              </motion.div>
            </motion.div>
          </form>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            aria-labelledby="social-login-heading"
          >
            <div id="social-login-heading" className="text-center mb-4 text-[#461220]">Or Login with</div>
            <div className="flex justify-center space-x-4">
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 border border-[#FED0BB] rounded-md hover:bg-[#FED0BB] hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-[#B23A48]"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(254, 208, 187, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Sign in with Google"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fill="#4285F4"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                  />
                </svg>
                <span className="text-[#461220]">Google</span>
              </motion.button>
              <motion.button
                className="flex items-center space-x-2 px-4 py-2 border border-[#FED0BB] rounded-md hover:bg-[#FED0BB] hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-[#B23A48]"
                whileHover={{ scale: 1.05, backgroundColor: "rgba(254, 208, 187, 0.1)" }}
                whileTap={{ scale: 0.95 }}
                aria-label="Sign in with Facebook"
                type="button"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" aria-hidden="true">
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
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <p className="text-[#461220]">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="text-[#B23A48] hover:text-[#8C2F39] font-semibold focus:outline-none focus:underline"
              >
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>
      </div>
      <div className="hidden md:flex md:w-2/5 relative overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 z-0">
          <img
            src={image}
            alt=""
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
          <div className="text-3xl font-bold mb-4">BEAUTY AWAITS</div>
          <div className="text-xl mb-6">SIGN IN TO YOUR ACCOUNT</div>
          <div className="w-16 h-16 flex items-center justify-center">
            <Sparkles className="text-[#FED0BB]" size={36} />
          </div>
          <div className="mt-8 text-center text-[#FED0BB] max-w-xs">
            Discover our exclusive collection of premium cosmetics and skincare products.
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default SignIn;