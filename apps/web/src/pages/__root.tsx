import { Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRoute({
  component: () => {
    return (
      <>
        <main className="w-screen h-screen flex select-none">
          <Outlet />
        </main>
        <TanStackRouterDevtools position="bottom-right" />
      </>
    );
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <main className="text-center">
        <h1 className="text-8xl font-extrabold text-muted-foreground/30 select-none sm:text-9xl">404</h1>
        <h2 className="mt-4 text-3xl font-bold text-muted-foreground">页面不存在</h2>
        <Link to="/" className="mt-8 inline-block rounded-lg bg-primary-4 px-6 py-3 text-white font-semibold text-sm shadow hover:bg-primary-4/90 transition">
          返回首页
        </Link>
      </main>
    </div>
  ),
});
