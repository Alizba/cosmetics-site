import { useState } from "react";
import { ChevronLeft } from "lucide-react";

const RegisterPage = () => {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    birthdate: "",
    skinType: "",
    interests: [],
    newsletter: true
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === "checkbox") {
      if (name === "newsletter") {
        setFormData({ ...formData, [name]: checked });
      } else {
       
        
        const updatedInterests = [...formData.interests];
        if (checked) {
          updatedInterests.push(value);
        } else {
          const index = updatedInterests.indexOf(value);
          if (index > -1) {
            updatedInterests.splice(index, 1);
          }
        }
        setFormData({ ...formData, interests: updatedInterests });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => {
    setFormStep(formStep + 1);
  };

  const prevStep = () => {
    setFormStep(formStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting registration:", formData);
  };

  const skinTypeOptions = ["Normal", "Dry", "Oily", "Combination", "Sensitive"];
  
  const interestOptions = [
    "Skincare", 
    "Makeup", 
    "Fragrance", 
    "Hair Care", 
    "Body Care",
    "Clean Beauty",
    "Anti-Aging",
    "Korean Beauty"
  ];

  return (
    <div className="min-h-screen bg-rose-50 flex flex-col md:flex-row">
     
      <div className="w-full md:w-3/5 p-8 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <div className="mb-8">
            <h1 className="text-3xl font-serif text-stone-800 mb-2">Create Your Beauty Profile</h1>
            <p className="text-stone-600">Join our community to receive personalized recommendations and exclusive offers</p>
          </div>

          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-stone-700">
                Step {formStep} of 3
              </span>
              <span className="text-sm text-stone-500">
                {formStep === 1 ? "Account Info" : formStep === 2 ? "Personal Details" : "Beauty Profile"}
              </span>
            </div>
            <div className="w-full bg-stone-200 rounded-full h-2">
              <div 
                className="bg-rose-400 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${(formStep / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {formStep === 1 && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                  placeholder="••••••••"
                  required
                />
                <p className="mt-1 text-xs text-stone-500">
                  Must be at least 8 characters with a number and special character
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button
                onClick={nextStep}
                className="w-full bg-rose-400 text-white py-3 rounded-md hover:bg-rose-500 transition font-medium"
              >
                Continue
              </button>
            </div>
          )}

          {formStep === 2 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="birthdate"
                  value={formData.birthdate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                  required
                />
                <p className="mt-1 text-xs text-stone-500">
                  We'll send you a special birthday offer!
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">
                  Skin Type
                </label>
                <select
                  name="skinType"
                  value={formData.skinType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-md border border-stone-300 focus:outline-none focus:ring-2 focus:ring-rose-200 focus:border-rose-300 transition"
                  required
                >
                  <option value="" disabled>Select your skin type</option>
                  {skinTypeOptions.map(type => (
                    <option key={type} value={type.toLowerCase()}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="newsletter"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="h-4 w-4 text-rose-400 focus:ring-rose-300 border-stone-300 rounded"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-stone-700">
                  Sign me up for the newsletter to receive beauty tips, product updates, and exclusive offers
                </label>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={prevStep}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-stone-300 hover:bg-stone-100 transition"
                >
                  <ChevronLeft size={20} className="text-stone-700" />
                </button>
                
                <button
                  onClick={nextStep}
                  className="flex-1 bg-rose-400 text-white py-3 rounded-md hover:bg-rose-500 transition font-medium"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {formStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-stone-700 mb-3">
                  Beauty Interests (Select all that apply)
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {interestOptions.map(interest => (
                    <div key={interest} className="flex items-center">
                      <input
                        type="checkbox"
                        id={interest.toLowerCase().replace(' ', '-')}
                        name="interests"
                        value={interest.toLowerCase()}
                        checked={formData.interests.includes(interest.toLowerCase())}
                        onChange={handleInputChange}
                        className="h-4 w-4 text-rose-400 focus:ring-rose-300 border-stone-300 rounded"
                      />
                      <label 
                        htmlFor={interest.toLowerCase().replace(' ', '-')} 
                        className="ml-2 block text-sm text-stone-700"
                      >
                        {interest}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-rose-100 p-4 rounded-md">
                <p className="text-xs text-stone-700">
                  By creating an account, you agree to our <a href="#" className="text-rose-600 hover:underline">Terms of Service</a> and acknowledge our <a href="#" className="text-rose-600 hover:underline">Privacy Policy</a>.
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={prevStep}
                  className="flex items-center justify-center w-12 h-12 rounded-full border border-stone-300 hover:bg-stone-100 transition"
                >
                  <ChevronLeft size={20} className="text-stone-700" />
                </button>
                
                <button
                  onClick={handleSubmit}
                  className="flex-1 bg-rose-400 text-white py-3 rounded-md hover:bg-rose-500 transition font-medium"
                >
                  Create Account
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 text-center">
            <p className="text-sm text-stone-600">
              Already have an account?
              <a href="#" className="ml-1 text-rose-600 hover:text-rose-800 transition font-medium">
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="hidden md:block md:w-2/5 bg-rose-100">
        <div className="h-full relative overflow-hidden">
          <img
            src="/api/placeholder/800/1200"
            alt="Beauty products flat lay with flowers"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-rose-100 to-transparent opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-12">
            <div className="bg-white bg-opacity-80 p-8 rounded-lg max-w-sm">
              <h2 className="text-3xl font-serif mb-4 text-stone-800">
                Join Our Beauty Community
              </h2>
              <p className="text-stone-700 mb-4">
                Get personalized recommendations, early access to new products, and exclusive offers.
              </p>
              <div className="flex justify-center space-x-4 mt-6">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-rose-200 flex items-center justify-center mx-auto mb-2">
                    <span className="text-rose-600 text-xl font-bold">20%</span>
                  </div>
                  <p className="text-xs text-stone-700">First Order Discount</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-rose-200 flex items-center justify-center mx-auto mb-2">
                    <span className="text-rose-600 text-xl font-bold">Free</span>
                  </div>
                  <p className="text-xs text-stone-700">Shipping on $50+</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-rose-200 flex items-center justify-center mx-auto mb-2">
                    <span className="text-rose-600 text-xl font-bold">VIP</span>
                  </div>
                  <p className="text-xs text-stone-700">Early Access</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;