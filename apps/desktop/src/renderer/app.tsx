import { Providers } from './providers.js';
import { AppRouter } from './router.js';
import '@app/theme/css/globals.css';

export function App() {
  return (
    <Providers>
      <AppRouter />
    </Providers>
  );
}
