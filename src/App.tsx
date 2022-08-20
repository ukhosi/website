import { useRoutes } from 'react-router-dom';
import router from 'src/routers/adminRouter';
import publicRouter from 'src/routers/publicRouter';
import { Suspense } from 'react';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProvider from './theme/ThemeProvider';

function App() {
  const content = useRoutes(router);
  const publicContent = useRoutes(publicRouter)

  return (
    <>
      <Suspense fallback={<div>loading</div>}>
        <CssBaseline />
        {publicContent}
      </Suspense>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <CssBaseline />
          {content}
        </LocalizationProvider>
      </ThemeProvider>

    </>

  );
}
export default App;
