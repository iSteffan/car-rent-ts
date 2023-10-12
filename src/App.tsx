import React, { lazy } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';

const Home = lazy(() => import('./pages/Home'));
const Catalog = lazy(() => import('./pages/Catalog'));
const Favorites = lazy(() => import('./pages/Favorites'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
// import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';
// import { Layout } from './Layout/Layout';

// const Home = lazy(() => import('../pages/Home'));
// const Catalog = lazy(() => import('../pages/Catalog'));
// const Favorites = lazy(() => import('../pages/Favorites'));

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="/catalog" element={<Catalog />} />
//         <Route path="/favorites" element={<Favorites />} />
//         <Route path="*" element={<Home />} />
//       </Route>
//     </Routes>
//   );
// };

export default App;
