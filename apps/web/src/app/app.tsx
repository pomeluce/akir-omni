import { Providers } from '@/app/providers';
import { AppRouter } from '@/app/router';
import '@/app.css';

export function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
