import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState('Sign Up')
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (error) setError('');
  };

  const validateForm = () => {
    if (!formData.email || !formData.password) {
      setError('Please fill in all required fields');
      return false;
    }
    if (state === 'Sign Up' && !formData.name) {
      setError('Please enter your name');
      return false;
    }
    if (!formData.email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    return true;
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    
    if (!validateForm()) return;

    setLoading(true);
    setError('');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // For demo purposes, always succeed
      localStorage.setItem('user', JSON.stringify({
        name: formData.name || 'User',
        email: formData.email,
        isLoggedIn: true
      }));

      // Navigate to home page after successful login/signup
      navigate('/');
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-md w-full space-y-8'>
        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={onSubmitHandler}
          className='bg-white rounded-2xl shadow-xl overflow-hidden p-8'
        >
          <div className='flex flex-col gap-6'>
            <div className='text-center'>
              <h2 className='text-3xl font-bold text-gray-900 mb-2'>
                {state === 'Sign Up' ? "Create Account" : "Welcome Back"}
              </h2>
              <p className='text-gray-600'>
                {state === 'Sign Up' 
                  ? 'Sign up to book your appointment' 
                  : 'Log in to access your account'}
              </p>
            </div>

            {error && (
              <div className='bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg'>
                {error}
              </div>
            )}

            {state === "Sign Up" && (
              <div>
                <label className='block text-gray-700 text-sm font-medium mb-2'>
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                  placeholder="Enter your full name"
                  required
                />
              </div>
            )}

            <div>
              <label className='block text-gray-700 text-sm font-medium mb-2'>
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className='block text-gray-700 text-sm font-medium mb-2'>
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className='appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500'
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                loading ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {loading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                state === 'Sign Up' ? "Create Account" : "Login"
              )}
            </button>

            <div className='text-center'>
              {state === "Sign Up" ? (
                <p className='text-sm text-gray-600'>
                  Already have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setState('Login')}
                    className='font-medium text-blue-600 hover:text-blue-500'
                  >
                    Login here
                  </button>
                </p>
              ) : (
                <p className='text-sm text-gray-600'>
                  Don't have an account?{' '}
                  <button
                    type="button"
                    onClick={() => setState('Sign Up')}
                    className='font-medium text-blue-600 hover:text-blue-500'
                  >
                    Sign up here
                  </button>
                </p>
              )}
            </div>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default Login;