
import React from 'react';

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <div className="text-center p-12 bg-gray-800 rounded-2xl shadow-2xl max-w-md mx-auto border border-gray-700">
        <div className="mb-6 flex justify-center">
            <svg className="w-16 h-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Photo Category Explorer</h1>
        <p className="text-gray-400 mb-8">Unlock advanced sorting and filtering for your photo library.</p>
        <button
          onClick={onLogin}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2"
        >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 5.555a1 1 0 00-1.9 1.11l1.4 3.111-2.056.914A1 1 0 006 12.055v.445a1 1 0 001.555.832l3-1.5a1 1 0 000-1.664l-3-1.5z" clipRule="evenodd" /></svg>
            <span>Connect with Photos</span>
        </button>
         <p className="text-xs text-gray-500 mt-6">This is a demo and does not connect to your real photo library.</p>
      </div>
    </div>
  );
};

export default Login;
