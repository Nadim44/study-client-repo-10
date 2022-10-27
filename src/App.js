import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
// import Header from './Header/Header';

function App() {
  return (
    <div className="">

      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
