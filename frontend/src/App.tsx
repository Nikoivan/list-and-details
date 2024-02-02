import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';

import Details from './components/Details/Details';
import DetailsFullItem from './components/Details/FullItem/Details-FullItem';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Details />,
    },
    {
      path: ':id/details',
      element: <DetailsFullItem />,
    },
    {
      path: '*',
      element: <div>404 Page not found ...</div>,
    },
  ]);

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
