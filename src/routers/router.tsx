import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';
import PublicPagesLayout from 'src/layouts/PublicPagesLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

//Admin Routes
import PrivateRoute from './PrivateRoute';

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
const Article = publicPagesLoader(lazy(() => import('src/general/pages/article')));


// Dashboards

const FakeNews = Loader(lazy(() => import('src/content/dashboards/FakeNews')));

const RevolutionaryTales = Loader(lazy(() => import('src/content/dashboards/RevolutionaryTales')));

const TalesCollectionPage = Loader(lazy(() => import('src/content/dashboards/RevolutionaryTales/TalesCollection')));

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
      {
        path: 'fake-news/:id',
        element: <Article />
      }
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
    element: <PrivateRoute><SidebarLayout /></PrivateRoute>,
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
    element: <PrivateRoute><SidebarLayout /></PrivateRoute>,
    children: [
      {
        path: 'fake-news',
        element: <AddArticle />
      },
      {
        path: 'tales',
        element: <AddTaleCollection />
      },
      {
        path: 'tales/:id',
        element: <TalesCollectionPage />
      }
    ]
  },

  {
    path: 'mambo/management',
    element: <PrivateRoute><SidebarLayout /></PrivateRoute>,
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
    element: <PrivateRoute><SidebarLayout /></PrivateRoute>,
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
