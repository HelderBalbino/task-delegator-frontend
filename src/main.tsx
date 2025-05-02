import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Login from './screen/login/Login';
import Dashboard from './screen/dashboard/Dashboard';
import React from 'react';

// component to protect the routes
// it checks if the user is authenticated by checking if the token exists in local storage
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
	const token = localStorage.getItem('token'); // verify if the token exists in local storage
	if (!token) {
		// if the token does not exist, redirect to the login page
		// the replace prop is used to remove the current entry from the history stack
		// this means that the user will not be able to go back to the protected page using the back button
		// this is useful for security reasons, to prevent the user from accessing the protected page without authentication
		return <Navigate to='/' replace />;
	}
	return children; // if the token exists, render the children
};
