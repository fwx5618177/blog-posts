import { RouteObject } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';
import NotFoundPage from '../pages/NotFoundPage';
import ServerErrorPage from '../pages/ServerErrorPage';
import MaintenancePage from '../pages/MaintenancePage';
import MessageDemoPage from '../pages/MessageDemo';
import CodeBlockDemoPage from '../pages/CodeBlockDemo';
import ErrorTestPage from '../pages/ErrorTest';
import { lazy, Suspense } from 'react';
import Loading from '../components/Loading';

// Lazy-loaded pages
const BlogPage = lazy(() => import('../pages/Blog'));
const BlogDetailPage = lazy(() => import('../pages/Blog/BlogDetail'));
const CategoriesPage = lazy(() => import('../pages/Categories'));
const CategoryDetailPage = lazy(() => import('../pages/Categories/CategoryDetail'));
const TagsPage = lazy(() => import('../pages/Tags'));
const TagDetailPage = lazy(() => import('../pages/Tags/TagDetail'));
const AboutPage = lazy(() => import('../pages/About'));
const ArchivesPage = lazy(() => import('../pages/Archives'));
const ArchiveDetailPage = lazy(() => import('../pages/Archives/ArchiveDetail'));

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
        path: 'blog/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <BlogDetailPage />
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
        path: 'categories/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <CategoryDetailPage />
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
        path: 'tags/:slug',
        element: (
          <Suspense fallback={<Loading />}>
            <TagDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'archives',
        element: (
          <Suspense fallback={<Loading />}>
            <ArchivesPage />
          </Suspense>
        ),
      },
      {
        path: 'archives/:year',
        element: (
          <Suspense fallback={<Loading />}>
            <ArchiveDetailPage />
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
        path: '500',
        element: <ErrorPage />,
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
        path: 'error-test',
        element: <ErrorTestPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
];

export default routes;
