import { Button } from '@app/ui';

export function HomePage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground">Welcome to Akir Omni</h2>
      <p className="mt-2 text-muted-foreground">Desktop application.</p>
      <div className="mt-6 flex gap-3">
        <Button>Get Started</Button>
        <Button variant="outline">Settings</Button>
      </div>
    </div>
  );
}
