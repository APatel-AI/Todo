import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Account from './components/Account';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

const Navbar = () => {
  return (
    <>
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">Home</Link>
        <div className="space-x-4">
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/signup" className="text-white">Signup</Link>
        </div>
      </div>
    </nav>
    <div className="container mx-auto mt-8">
      <h1 className="text-center text-3xl font-bold">
        Firebase Auth & Context
      </h1>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthContextProvider>
    </div>
    </>
  );

};

export default Navbar;
