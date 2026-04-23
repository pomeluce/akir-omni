import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container mx-auto flex h-14 items-center px-4">
          <h1 className="text-lg font-semibold text-foreground">Akir Omni</h1>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
