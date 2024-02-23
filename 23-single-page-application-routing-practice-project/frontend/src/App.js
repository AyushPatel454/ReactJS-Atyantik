import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import EventsPage from './pages/EventsPage.js';
import RootLayout from './pages/RootLayout.js';
import RootEvents from './pages/RootEvents.js';
import EventDetailPage from './pages/EventDetailPage.js';
import NewEventPage from './pages/NewEventPage.js';
import EditEventPage from './pages/EditEventPage.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
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
            element: <EventsPage />
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
