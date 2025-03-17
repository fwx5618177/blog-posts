import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from './routes';
import { ErrorBoundary } from './components/ErrorBoundary';

/**
 * Main App component
 *
 * The ErrorBoundary component is wrapped around the entire application to catch
 * any JavaScript errors that occur during rendering, in lifecycle methods, or
 * in constructors of the whole component tree.
 *
 * To test the ErrorBoundary:
 * 1. Navigate to /error-test in your browser
 * 2. Click the "Trigger Error" button on the page
 * 3. The ErrorBoundary will catch the error and display a fallback UI
 *
 * You can also wrap ErrorBoundary around specific components to isolate errors:
 *
 * <ErrorBoundary>
 *   <SpecificComponent />
 * </ErrorBoundary>
 *
 * This prevents the entire app from crashing when an error occurs in just one component.
 */
function App() {
  const router = createBrowserRouter(routes);

  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}

export default App;
