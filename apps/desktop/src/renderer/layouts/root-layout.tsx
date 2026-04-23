import { Outlet } from 'react-router';

export function RootLayout() {
  return (
    <div className="flex h-screen bg-background">
      <aside className="hidden w-56 border-r border-border md:flex md:flex-col">
        <div className="flex h-14 items-center border-b border-border px-4">
          <h1 className="text-lg font-semibold text-foreground">Akir Omni</h1>
        </div>
        <nav className="flex-1 p-2">
          <p className="px-2 py-1 text-xs font-medium text-muted-foreground">Navigation</p>
        </nav>
      </aside>
      <main className="flex flex-1 flex-col overflow-hidden">
        <header className="flex h-10 items-center justify-end border-b border-border px-4">
          <span className="text-xs text-muted-foreground">Desktop</span>
        </header>
        <div className="flex-1 overflow-auto p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
