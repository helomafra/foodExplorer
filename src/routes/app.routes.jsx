import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Cart } from '../pages/Cart';
import { Edit } from '../pages/Edit';
import { New } from '../pages/New';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/edit/:id" element={<Edit />} />
      <Route path="/new" element={<New />} />
    </Routes>
  );
}
