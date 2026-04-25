import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@app/theme';
import { TooltipProvider } from '@app/ui';
import { router } from '@/plugins';

export default function App() {
  const client = new QueryClient({ defaultOptions: { queries: { staleTime: 5 * 60 * 1000, retry: 1 } } });

  return (
    <StrictMode>
      <ThemeProvider defaultScheme="default" defaultMode="light">
        <QueryClientProvider client={client}>
          <TooltipProvider>
            <RouterProvider router={router} />
          </TooltipProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
