import { Button } from '@app/ui';

export function HomePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-foreground">Welcome to Akir Omni</h2>
      <p className="mt-2 text-muted-foreground">Cross-platform app scaffold built with React.</p>
      <div className="mt-6 flex gap-3">
        <Button>Get Started</Button>
        <Button variant="outline">Documentation</Button>
      </div>
    </div>
  );
}
