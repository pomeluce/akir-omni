import { createFileRoute } from '@tanstack/react-router';
import { Button } from '@app/ui';
import { useTheme } from '@app/theme';
import type { ThemeScheme, ThemeMode } from '@app/theme';

const schemes: { value: ThemeScheme; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'forest', label: 'Forest' },
  { value: 'sunset', label: 'Sunset' },
];

const modes: { value: ThemeMode; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

export const Route = createFileRoute('/_app/settings')({
  component: SettingsPage,
});

function SettingsPage() {
  const { scheme, mode, setScheme, setMode } = useTheme();

  return (
    <div className="space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-muted-foreground">Manage your preferences</p>
      </div>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-foreground">Appearance</h2>

        <div className="space-y-3">
          <div>
            <p className="mb-2 text-sm font-medium text-foreground">Color Scheme</p>
            <div className="flex gap-2">
              {schemes.map(s => (
                <Button key={s.value} onClick={() => setScheme(s.value)} variant={scheme === s.value ? 'default' : 'outline'} size="sm">
                  {s.label}
                </Button>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm font-medium text-foreground">Mode</p>
            <div className="flex gap-2">
              {modes.map(m => (
                <Button key={m.value} onClick={() => setMode(m.value)} variant={mode === m.value ? 'default' : 'outline'} size="sm">
                  {m.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
