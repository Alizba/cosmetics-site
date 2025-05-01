import { useState } from 'react';
import image from '../assets/images/signlady.webp'
import { Mail, Lock, ChevronRight, Sparkles, Heart } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Changed function name to match the export in App.jsx
function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', { email, password });
    // Add authentication logic here
  };

  return (
    <div className="flex h-screen w-full">
      <div className="hidden md:flex md:w-2/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={image} 
            alt="Beauty Products" 
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#B23A48] via-[#FCB9B2] to-[#461220] opacity-50 z-10"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-10 z-20">
          <div className="text-3xl font-bold mb-4">BEAUTY AWAITS</div>
          <div className="text-xl mb-6">SIGN IN TO YOUR ACCOUNT</div>
          <div className="w-16 h-16 flex items-center justify-center">
            <Sparkles className="text-[#FED0BB]" size={36} />
          </div>
          <div className="mt-8 text-center text-[#FED0BB] max-w-xs">
            Discover our exclusive collection of premium cosmetics and skincare products.
          </div>
        </div>
      </div>

      <div className="w-full md:w-3/5 flex flex-col justify-center items-center p-6 bg-white">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex flex-col items-center mb-10">
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
            <h1 className="text-3xl font-bold text-[#461220]">GLAM LOGIN</h1>
            <p className="text-sm text-[#B23A48] mt-1">Your beauty journey starts here</p>
          </div>

          <div className="space-y-6">
            <div className="relative">
              <Mail className="absolute left-2 top-3 text-[#B23A48]" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-2 top-3 text-[#B23A48]" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full py-3 pl-10 pr-4 border-b border-[#FCB9B2] focus:border-[#B23A48] focus:outline-none bg-transparent text-[#461220]"
              />
            </div>

            <div className="flex justify-between items-center">
              <a href="#" className="text-sm text-[#B23A48] hover:text-[#8C2F39]">
                Forgot Password?
              </a>
              <button
                onClick={handleSubmit}
                className="px-8 py-3 bg-[#B23A48] text-white rounded-full hover:bg-[#8C2F39] transition-colors"
              >
                LOGIN
              </button>
            </div>
          </div>

          <div className="mt-8">
            <div className="text-center mb-4 text-[#461220]">Or Login with</div>
            <div className="flex justify-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-[#FED0BB] rounded-md hover:bg-[#FED0BB] hover:bg-opacity-10">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
                  />
                </svg>
                <span className="text-[#461220]">Google</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-[#FED0BB] rounded-md hover:bg-[#FED0BB] hover:bg-opacity-10">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#1877F2"
                    d="M20.007 3H3.993C3.445 3 3 3.445 3 3.993v16.014c0 .548.445.993.993.993h8.621v-6.972h-2.346v-2.717h2.346V9.31c0-2.325 1.42-3.591 3.494-3.591.993 0 1.847.074 2.096.107v2.43h-1.438c-1.128 0-1.346.536-1.346 1.323v1.734h2.69l-.35 2.717h-2.34V21h4.587c.548 0 .993-.445.993-.993V3.993c0-.548-.445-.993-.993-.993z"
                  />
                </svg>
                <span className="text-[#461220]">Facebook</span>
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-[#461220]">
              Don't have an account?{" "}
              <Link to="/signup" className="text-[#B23A48] hover:text-[#8C2F39] font-semibold">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;