import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import PublicPagesLayout from 'src/layouts/PublicPagesLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

const publicPagesLoader = (Component) => (props) =>
(
  <Suspense fallback>
    <Component {...props} />
  </Suspense>
);



// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

//Public Pages
const About = publicPagesLoader(lazy(() => import('../general/pages/About')));
const Compatriots = publicPagesLoader(lazy(() => import('../general/pages/Compatriots')));
const Landing = publicPagesLoader(lazy(() => import('../general/pages/Landing')));
const Shop = publicPagesLoader(lazy(() => import('../general/pages/Shop')));
const Tales = publicPagesLoader(lazy(() => import('../general/pages/Tales')));


// Dashboards

const FakeNews = Loader(lazy(() => import('src/content/dashboards/FakeNews')));

const RevolutionaryTales = Loader(lazy(() => import('src/content/dashboards/RevolutionaryTales')));

// Applications

const Messenger = Loader(
  lazy(() => import('src/content/applications/Messenger'))
);
const Orders = Loader(
  lazy(() => import('src/content/applications/Orders'))
);
const Stocks = Loader(
  lazy(() => import('src/content/applications/Stocks'))
);

//Reports
const Weekly = Loader(
  lazy(() => import('src/content/reports/Weekly'))
);

const Monthly = Loader(
  lazy(() => import('src/content/reports/Monthly'))
);

const Quarterly = Loader(
  lazy(() => import('src/content/reports/Quarterly'))
);

//Adding Articles
const AddArticle = Loader(
  lazy(() => import('src/content/dashboards/FakeNews/AddArticle'))
);
const AddTaleCollection = Loader(
  lazy(() => import('src/content/dashboards/RevolutionaryTales/AddTaleCollection'))
);

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



const routes: RouteObject[] = [
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
      {
        path: '*',
        element: <Status404 />

      },
    ]
  },
  {
    path: 'mambo',
    element: <BaseLayout />,
    children: [
      {
        path: '',
        element: <Overview />
      },
      {
        path: 'mambo/overview',
        element: <Navigate to="/" replace />
      },

    ]
  },
  {
    path: 'mambo/dashboards',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="fake-news" replace />
      },
      {
        path: 'fake-news',
        element: <FakeNews />
      },
      {
        path: 'tales',
        element: <RevolutionaryTales />
      },
      {
        path: 'messenger',
        element: <Messenger />
      }
    ]
  },
  {
    path: 'mambo/blogger',
    element: <SidebarLayout />,
    children: [
      {
        path: 'fake-news',
        element: <AddArticle />
      },
      {
        path: 'tales',
        element: <AddTaleCollection />
      }
    ]
  },

  {
    path: 'mambo/management',
    element: <SidebarLayout />,
    children: [
      {
        path: '',
        element: <Navigate to="orders" replace />
      },
      {
        path: 'orders',
        element: <Orders />
      },

      {
        path: 'stocks',
        element: <Stocks />
      },
      {
        path: 'profile',
        children: [
          {
            path: '',
            element: <Navigate to="details" replace />
          },
        ]
      }
    ]
  },
  {
    path: 'mambo/reports',
    element: <SidebarLayout />,
    children: [
      {
        path: 'weekly',
        element: <Weekly />
      },
      {
        path: 'monthly',
        element: <Monthly />
      },
      {
        path: 'quarterly',
        element: <Quarterly />
      }

    ]
  },

];

export default routes;
