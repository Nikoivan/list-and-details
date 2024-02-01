import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Details from './components/Details/Details';
import { Provider } from 'react-redux';
import { store } from './store/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '/:id/details',
      element: <Details />,
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
