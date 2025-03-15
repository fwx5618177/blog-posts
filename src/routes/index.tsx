import { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import NotFoundPage from '../pages/NotFoundPage';
import ServerErrorPage from '../pages/ServerErrorPage';
import MaintenancePage from '../pages/MaintenancePage';
import MessageDemoPage from '../pages/MessageDemo';
import CodeBlockDemoPage from '../pages/CodeBlockDemo';
import { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

// Lazy-loaded pages
const BlogPage = lazy(() => import('../pages/Blog'));
const CategoriesPage = lazy(() => import('../pages/Categories'));
const TagsPage = lazy(() => import('../pages/Tags'));
const AboutPage = lazy(() => import('../pages/About'));

// Define routes
const routes: RouteObject[] = [
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'blog',
        element: (
          <Suspense fallback={<Loading />}>
            <BlogPage />
          </Suspense>
        ),
      },
      {
        path: 'categories',
        element: (
          <Suspense fallback={<Loading />}>
            <CategoriesPage />
          </Suspense>
        ),
      },
      {
        path: 'tags',
        element: (
          <Suspense fallback={<Loading />}>
            <TagsPage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<Loading />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'message-demo',
        element: <MessageDemoPage />,
      },
      {
        path: 'code-block-demo',
        element: <CodeBlockDemoPage />,
      },
      {
        path: '503',
        element: <ServerErrorPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: 'loading',
        element: <Loading />,
      },
      {
        path: 'maintenance',
        element: <MaintenancePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
