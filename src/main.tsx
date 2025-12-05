import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Pages/Home.tsx';
import Navbar from './Components/Navbar.tsx';
import './index.css';
import { ThemeProvider } from './Components/UI/theme-provider.tsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Portraits from './Pages/Portraits.tsx';
import heroImage from './assets/All/all-10.webp';
import { useLocation } from 'react-router-dom';
import Backgrounds from './Pages/Backgrounds.tsx';

const About = React.lazy(() => import('@/Pages/About.tsx'));

const AppLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <>
      {isHomePage && (
        <div 
          className="md:h-screen h-dvh bg-no-repeat bg-start bg-cover bg-blend-overlay bg-black/40" 
          style={{ backgroundImage: `url(${heroImage})` }}
          role="img"
          aria-label="Hero background illustration"
        >
          <Navbar />
          <Outlet />
        </div>
      )}
      {!isHomePage && (
        <>
          <Navbar />
          <Outlet />
        </>
      )}
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/portraits',
        element: <Portraits />,
      },
      {
        path: '/backgrounds',
        element: <Backgrounds />,
      },
      {
        path: '/about',
        element: (
          <Suspense
            fallback={
              <div className="flex justify-center items-center h-dvh" role="status" aria-label="Loading about page">
                <h1 className="sr-only">Loading...</h1>
                <div className="animate-pulse text-lg">Loading...</div>
              </div>
            }
          >
            <About />
          </Suspense>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="dark">
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
