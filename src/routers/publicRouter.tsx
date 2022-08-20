import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router';
import { Navigate } from 'react-router-dom';

import PublicPagesLayout from '../layouts/PublicPagesLayout';
import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const About = lazy(() => import('../general/pages/About'));
const Compatriots = lazy(() => import('../general/pages/Compatriots'));
const Landing = lazy(() => import('../general/pages/Landing'));
const Shop = lazy(() => import('../general/pages/Shop'));
const Tales = lazy(() => import('../general/pages/Tales'));

// Status

const Status404 = Loader(
  lazy(() => import('src/content/pages/Status/Status404'))
);
const Status500 = Loader(
  lazy(() => import('src/content/pages/Status/Status500'))
);
const StatusComingSoon = Loader(
  lazy(() => import('src/content/pages/Status/ComingSoon'))
);
const StatusMaintenance = Loader(
  lazy(() => import('src/content/pages/Status/Maintenance'))
);

const appRoutes: RouteObject[] = [
  {
    path: '',
    element: <PublicPagesLayout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'compatriots',
        element: <Compatriots />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'tales',
        element: <Tales />
      },
      {/*{
        path: '*',
        element: <Status404 />

      },*/}
    ]
  }
]

export default appRoutes