import { createBrowserRouter, RouterProvider } from 'react-router';
import { RootLayout } from './layouts/root-layout.js';
import { HomePage } from './pages/home-page.js';

export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}
