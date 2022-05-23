import { QueryClientProvider } from 'react-query';
import { useRoutes } from 'react-router-dom';
import { getQueryClient } from './queryClient';
import { routes } from './routes';
import { ReactQueryDevtools } from 'react-query/devtools';
const App = () => {
  const elem = useRoutes(routes);
  const queryClient = getQueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {elem}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
