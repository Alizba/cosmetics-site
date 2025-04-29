import { useState } from "react";

const AuthComponent = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isLogin ? "Logging in" : "Signing up", { email, name, password });
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-rose-50">
      <div className="w-full md:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-serif text-stone-800 mb-2">
              {isLogin ? "Welcome Back" : "Join Our Beauty Community"}
            </h1>
            <p className="text-stone-600">
              {isLogin
                ? "Sign in to access exclusive products and offers"
                : "Get access to the biggest beauty trends and become a member today"}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                placeholder="your@email.com"
              />
            </div>

            {!isLogin && (
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                  placeholder="Full Name"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-stone-700 mb-1">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                placeholder="••••••••"
              />
            </div>

            {isLogin && (
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-rose-600 hover:text-rose-800 transition"
                >
                  Forgot your password?
                </a>
              </div>
            )}

            <button
              onClick={handleSubmit}
              className="w-full bg-rose-300 text-white py-3 rounded-md hover:bg-rose-400 transition font-medium"
            >
              {isLogin ? "Sign In" : "Create Account"}
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-stone-600">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={toggleForm}
                className="ml-1 text-rose-600 hover:text-rose-800 transition font-medium"
              >
                {isLogin ? "Sign Up" : "Sign In"}
              </button>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-1/2 bg-rose-100">
        <div className="h-full relative overflow-hidden">
          <img
            src="/api/placeholder/800/1200"
            alt="Beauty model with floral crown"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-transparent opacity-20"></div>
          <div className="absolute bottom-10 left-10 max-w-xs text-white">
            <h2 className="text-3xl font-serif mb-2 text-stone-800">
              Natural Beauty
            </h2>
            <p className="text-stone-700">
              Discover our collection of organic and sustainable beauty products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;