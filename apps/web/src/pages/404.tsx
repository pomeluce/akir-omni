import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/404')({
  component: NotFoundPage,
});

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-6xl font-extrabold text-muted-foreground/30">404</h1>
        <p className="mt-2 text-muted-foreground">Page not found</p>
        <Link to="/dashboard" className="mt-4 inline-block text-sm text-primary hover:underline">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
