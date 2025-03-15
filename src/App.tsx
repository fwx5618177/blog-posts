import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  const router = createBrowserRouter(routes);

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
