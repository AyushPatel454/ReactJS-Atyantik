import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import EventsPage, {loader as eventsPageLoader} from './pages/EventsPage.js';
import RootLayout from './pages/RootLayout.js';
import RootEvents from './pages/RootEvents.js';
import EventDetailPage from './pages/EventDetailPage.js';
import NewEventPage from './pages/NewEventPage.js';
import EditEventPage from './pages/EditEventPage.js';
import ErrorPage from './pages/ErrorPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <p>Error At root level</p>,
    children: [
      {
        path: '',
        element: <HomePage />
      },
      {
        path: 'events',
        element: <RootEvents />,
        children: [
          {
            path: '',
            element: <EventsPage />,
            errorElement: <ErrorPage />,
            loader: eventsPageLoader,
          },
          {
            path: ':id',
            children: [
              {
                path: '',
                element: <EventDetailPage />
              },
              {
                path: 'edit',
                element: <EditEventPage />,
              }
            ]
          },
          {
            path: 'new',
            element: <NewEventPage />
          },
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
