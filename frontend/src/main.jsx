import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/Home.jsx';
import ProjectsPage from './pages/Projects.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx'; // Import the new component
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'projects', element: <ProjectsPage /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/admin',
    element: (
      <ProtectedRoute>
        <Admin />
      </ProtectedRoute>
    ),
  },
]);

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Show loading spinner for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {isLoading ? <LoadingSpinner /> : <RouterProvider router={router} />}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Root />);
