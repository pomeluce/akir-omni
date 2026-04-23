import { Providers } from '@/app/providers';
import { AppRouter } from '@/app/router';
import '@app/theme/css/tailwind.css';
import '@app/theme/css/globals.css';

export function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
