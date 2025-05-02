import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import React from 'react';
import Login from './screen/login/login';

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

// main component of the application
// it uses the BrowserRouter component to enable routing in the application
// it uses the Routes component to define the routes of the application
const App = () => {
	return (
		<BrowserRouter>
			{/* Main application routes */}
			{/* The BrowserRouter component wraps the entire application to enable routing */}
			{/* The Routes component defines the different routes of the application */}
			{/* The Route component defines a single route */}
			{/* The path prop defines the URL path for the route */}
			{/* The element prop defines the component to render for the route */}
			{/* The Navigate component is used to redirect to a different route */}
			{/* The ProtectedRoute component is used to protect the dashboard route */}
			{/* The Login component is used to render the login page */}
			<Routes>
				{/* LogIn page route*/}
				<Route path='/' element={<Login />} />

				{/* Protected Dashboard route*/}
				<Route
					path='/dashboard'
					element={
						<ProtectedRoute>
							<p className='text-white text-xl'>LoggedIn</p>
						</ProtectedRoute>
					}
				/>

				{/* Default Login route */}
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</BrowserRouter>
	);
};

// render the main component of the application
// it uses the createRoot function from react-dom/client to create a root element
// it uses the render method to render the App component inside the root element
// it uses the getElementById method to get the root element by its id
// it uses the exclamation mark to assert that the element is not null
// this is a TypeScript feature that allows us to tell the compiler that we are sure that the element is not null
// this is useful to avoid null checks and make the code cleaner
// it uses the App component as the main component of the application
createRoot(document.getElementById('root')!).render(<App />);
