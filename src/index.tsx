import ReactDOM from 'react-dom';
import { HelmetProvider } from 'react-helmet-async';
import { HashRouter } from 'react-router-dom';

import 'nprogress/nprogress.css';
import App from 'src/App';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import * as serviceWorker from 'src/serviceWorker';

import AuthProvider from 'src/contexts/AuthProvider';

ReactDOM.render(
  <HelmetProvider>
    <AuthProvider>
      <SidebarProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </SidebarProvider>
    </AuthProvider>
  </HelmetProvider>,
  document.getElementById('root')
);

serviceWorker.unregister();
