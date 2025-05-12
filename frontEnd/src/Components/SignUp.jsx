import { useState, useEffect } from 'react';
import { Mail, Lock, User, Calendar, ChevronRight, Sparkles, Heart, Gift, AlertCircle, Check } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import image from '../assets/images/signlady.webp';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setname] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState(''); // Added success message state
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false
  });

  // Check password strength
  useEffect(() => {
    if (password) {
      // Check criteria
      const criteria = {
        length: password.length >= 8,
        uppercase: /[A-Z]/.test(password),
        lowercase: /[a-z]/.test(password),
        number: /[0-9]/.test(password),
        special: /[^A-Za-z0-9]/.test(password)
      };

      setPasswordCriteria(criteria);

      const strengthScore = Object.values(criteria).filter(Boolean).length;
      setPasswordStrength(strengthScore);
    } else {
      setPasswordStrength(0);
      setPasswordCriteria({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        special: false
      });
    }
  }, [password]);

  // Handle field blur
  const handleBlur = (field) => {
    setTouched({ ...touched, [field]: true });
    validateField(field);
  };

  // Validate single field
  const validateField = (field) => {
    const newErrors = { ...errors };

    switch (field) {
      case 'email':
        if (!email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          newErrors.email = 'Please enter a valid email address';
        } else {
          delete newErrors.email;
        }
        break;

      case 'name':
        if (!name) {
          newErrors.name = 'Name is required';
        } else {
          delete newErrors.name;
        }
        break;

      case 'password':
        if (!password) {
          newErrors.password = 'Password is required';
        } else if (passwordStrength < 3) {
          newErrors.password = 'Password is too weak';
        } else {
          delete newErrors.password;
        }
        break;

      case 'confirmPassword':
        if (!confirmPassword) {
          newErrors.confirmPassword = 'Please confirm your password';
        } else if (confirmPassword !== password) {
          newErrors.confirmPassword = 'Passwords do not match';
        } else {
          delete newErrors.confirmPassword;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate all fields
  const validateForm = () => {
    const fields = ['email', 'name', 'password', 'confirmPassword'];
    let isValid = true;

    fields.forEach(field => {
      // Mark all fields as touched
      setTouched(prev => ({ ...prev, [field]: true }));

      // Validate each field
      if (!validateField(field)) {
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (validateSignupForm()) {
      console.log('Sign up attempt with:', {
        email,
        password,
        confirmPassword,
        name
      });

      // Use the correct backend URL or use '/api/signup' if proxy is configured
      // Replace 'http://localhost:5000' with your actual backend URL
      fetch('http://localhost:5000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
          name
        }),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Registration failed');
          }
          return response.json();
        })
        .then(data => {
          setIsSubmitting(false);

          // Display success message
          setSuccessMessage('Registration successful!');
          
          console.log('Registration successful! Redirecting to SignIn...');
          
          // Add a delay before redirect to show the success message
          setTimeout(() => {
            navigate('/SignIn', { state: { email } });
          }, 1500);
        })
        .catch(error => {
          setIsSubmitting(false);
          setErrors({ general: 'Registration failed. Please try again.' });
          console.error('Registration error:', error);
        });
    } else {
      setIsSubmitting(false);
    }
  };

  // Registration Form Validation
  const validateSignupForm = () => {
    const newErrors = {};

    // Validate email
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Validate full name
    if (!name) {
      newErrors.name = 'Full name is required';
    } else if (name.trim().split(' ').length < 2) {
      newErrors.name = 'Please enter both first and last name';
    }

    // Validate password
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }

    // Validate confirm password
    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (confirmPassword !== password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    // Update errors state
    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
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

  // Helper function to determine strength color
  const getStrengthColor = () => {
    if (passwordStrength === 0) return 'bg-gray-200';
    if (passwordStrength === 1) return 'bg-red-500';
    if (passwordStrength === 2) return 'bg-orange-500';
    if (passwordStrength === 3) return 'bg-yellow-500';
    if (passwordStrength === 4) return 'bg-green-500';
    return 'bg-gray-200';
  };

  // Helper function to determine strength text
  const getStrengthText = () => {
    if (passwordStrength === 0) return '';
    if (passwordStrength === 1) return 'Very Weak';
    if (passwordStrength === 2) return 'Weak';
    if (passwordStrength === 3) return 'Good';
    if (passwordStrength === 4) return 'Strong';
    if (passwordStrength === 5) return 'Very Strong';
    return '';
  };

  return (
    <motion.div
      className="flex flex-col md:flex-row h-screen w-full"
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

      <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-4 md:p-6 bg-white overflow-y-auto">
        <div className="w-full max-w-md">

          <motion.div
            className="flex flex-col items-center mb-6 md:mb-8"
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

          {/* Success message display */}
          {successMessage && (
            <motion.div 
              className="mb-4 p-3 bg-green-100 text-green-800 rounded-md flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Check size={18} className="mr-2" />
              {successMessage}
            </motion.div>
          )}

          {/* General error message */}
          {errors.general && (
            <motion.div 
              className="mb-4 p-3 bg-red-100 text-red-800 rounded-md flex items-center justify-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <AlertCircle size={18} className="mr-2" />
              {errors.general}
            </motion.div>
          )}

          <form onSubmit={handleSignupSubmit}>
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
                  id="name"
                  name="name"
                  aria-label="Full Name"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {touched.name && errors.name && (
                  <div className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.name}
                  </div>
                )}
              </motion.div>

              <motion.div className="relative" variants={itemVariants}>
                <Mail className="absolute left-2 top-3 text-[#B23A48]" size={20} />
                <input
                  type="email"
                  id="email"
                  name="email"
                  aria-label="Email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {touched.email && errors.email && (
                  <div className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.email}
                  </div>
                )}
              </motion.div>


              <motion.div className="relative" variants={itemVariants}>
                <Lock className="absolute left-2 top-3 text-[#B23A48]" size={20} />
                <input
                  type="password"
                  id="password"
                  name="password"
                  aria-label="Password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onBlur={() => handleBlur('password')}
                  className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
                  aria-invalid={errors.password ? "true" : "false"}
                />

                {/* Password strength indicator */}
                {password && (
                  <div className="mt-2">
                    <div className="flex mb-1 gap-1">
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 1 ? getStrengthColor() : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 2 ? getStrengthColor() : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 3 ? getStrengthColor() : 'bg-gray-200'}`}></div>
                      <div className={`h-1 flex-1 rounded-full ${passwordStrength >= 4 ? getStrengthColor() : 'bg-gray-200'}`}></div>
                    </div>
                    <div className="text-xs flex justify-between">
                      <span className={`${passwordStrength > 0 ? 'text-[#B23A48]' : 'text-gray-400'}`}>{getStrengthText()}</span>
                      <span className="text-gray-400">{passwordStrength}/4 requirements met</span>
                    </div>

                    {/* Password requirements */}
                    <div className="mt-2 grid grid-cols-2 gap-y-1 gap-x-2">
                      <div className="flex items-center text-xs">
                        {passwordCriteria.length ? (
                          <Check size={14} className="text-green-500 mr-1" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-gray-300 mr-1.5"></div>
                        )}
                        <span className={passwordCriteria.length ? 'text-green-500' : 'text-gray-500'}>
                          8+ characters
                        </span>
                      </div>
                      <div className="flex items-center text-xs">
                        {passwordCriteria.uppercase ? (
                          <Check size={14} className="text-green-500 mr-1" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-gray-300 mr-1.5"></div>
                        )}
                        <span className={passwordCriteria.uppercase ? 'text-green-500' : 'text-gray-500'}>
                          Uppercase letter
                        </span>
                      </div>
                      <div className="flex items-center text-xs">
                        {passwordCriteria.lowercase ? (
                          <Check size={14} className="text-green-500 mr-1" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-gray-300 mr-1.5"></div>
                        )}
                        <span className={passwordCriteria.lowercase ? 'text-green-500' : 'text-gray-500'}>
                          Lowercase letter
                        </span>
                      </div>
                      <div className="flex items-center text-xs">
                        {passwordCriteria.number ? (
                          <Check size={14} className="text-green-500 mr-1" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-gray-300 mr-1.5"></div>
                        )}
                        <span className={passwordCriteria.number ? 'text-green-500' : 'text-gray-500'}>
                          Number
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {touched.password && errors.password && (
                  <div className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.password}
                  </div>
                )}
              </motion.div>

              <motion.div className="relative" variants={itemVariants}>
                <Lock className="absolute left-2 top-3 text-[#B23A48]" size={20} />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  aria-label="Confirm Password"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onBlur={() => handleBlur('confirmPassword')}
                  className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                />
                {touched.confirmPassword && errors.confirmPassword && (
                  <div className="text-red-500 text-xs mt-1 flex items-center">
                    <AlertCircle size={12} className="mr-1" />
                    {errors.confirmPassword}
                  </div>
                )}
              </motion.div>
              <motion.div className="mt-6" variants={itemVariants}>
                <motion.button
                  type="submit"
                  className="w-full py-3 bg-[#B23A48] text-white rounded-full hover:bg-[#8C2F39] transition-colors flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      CREATING ACCOUNT...
                    </span>
                  ) : (
                    <>
                      CREATE ACCOUNT
                      <ChevronRight size={16} className="ml-1" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.div>
          </form>

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
                aria-label="Sign up with Google"
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
                aria-label="Sign up with Facebook"
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