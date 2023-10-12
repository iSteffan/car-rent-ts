import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Wrapper, Sidebar, List } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <main>
        <Wrapper>
          <Sidebar>
            <List>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/catalog">Catalog</Link>
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>
              </li>
            </List>
          </Sidebar>
          <Suspense>
            <Outlet />
          </Suspense>
        </Wrapper>
      </main>
    </>
  );
};
