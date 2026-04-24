import { createFileRoute } from '@tanstack/react-router';
import { useTheme } from '@app/theme';

export const Route = createFileRoute('/_app/dashboard')({
  component: DashboardPage,
});

function DashboardPage() {
  const { scheme, mode, resolvedMode } = useTheme();

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="mt-1 text-muted-foreground">Welcome to Akir Omni</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-medium text-muted-foreground">Version</p>
          <p className="mt-1 text-2xl font-semibold text-foreground">0.1.0</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-medium text-muted-foreground">Color Scheme</p>
          <p className="mt-1 text-2xl font-semibold capitalize text-foreground">{scheme}</p>
        </div>
        <div className="rounded-lg border border-border bg-card p-4">
          <p className="text-sm font-medium text-muted-foreground">Theme Mode</p>
          <p className="mt-1 text-2xl font-semibold capitalize text-foreground">{mode === 'system' ? `System (${resolvedMode})` : mode}</p>
        </div>
      </div>
    </div>
  );
}
