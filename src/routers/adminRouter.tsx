import { Suspense, lazy } from 'react';
import { Navigate } from 'react-router-dom';
import { RouteObject } from 'react-router';

import SidebarLayout from 'src/layouts/SidebarLayout';
import BaseLayout from 'src/layouts/BaseLayout';

import SuspenseLoader from 'src/components/SuspenseLoader';

const Loader = (Component) => (props) =>
(
  <Suspense fallback={<SuspenseLoader />}>
    <Component {...props} />
  </Suspense>
);

// Pages

const Overview = Loader(lazy(() => import('src/content/overview')));

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
)

const routes: RouteObject[] = [
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
