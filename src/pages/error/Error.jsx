import React from 'react';
import { Link } from 'react-router';
import { FaArrowRight } from "react-icons/fa6";


const Error = () => {
    return (
        <div className="min-h-screen bg-[#f8fafc] flex flex-col justify-center items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center max-w-lg mx-auto">
        <div className="mb-8 flex justify-center">
          <svg 
            className="w-24 h-24 text-gray-300" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            strokeWidth="1"
            aria-hidden="true"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
        </div>

        <p className="text-lg font-semibold text-green-700">404</p>
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn't find the page you're looking for. It might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            to="/"
            className="rounded-md bg-green-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 transition-colors duration-200"
          >
            Go back home
          </Link>
          <button 
            onClick={() => window.history.back()} 
            className="btn btn-dash text-sm font-semibold text-gray-900 hover:text-gray-600 transition-colors duration-200 flex items-center gap-x-3"
          >
            Previous page <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
    );
};

export default Error;