import React, { useEffect } from 'react';
import { LoaderProvider, useLoader } from './contexts/LoaderContext';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import HomePage from './pages/Home.jsx';
import ProjectsPage from './pages/Projects.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import LoadingSpinner from './components/LoadingSpinner.jsx';
import { ThemeProvider } from './contexts/ThemeContext';
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

const AppWithLoader = () => {
  const { isLoading, setIsLoading } = useLoader();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [setIsLoading]);

  return isLoading ? <LoadingSpinner /> : <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoaderProvider>
        <AppWithLoader />
      </LoaderProvider>
    </ThemeProvider>
  </React.StrictMode>
);
