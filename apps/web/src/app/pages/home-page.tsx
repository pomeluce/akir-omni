import { Button } from '@app/ui';
import { useTheme } from '@app/theme';
import type { ThemeScheme } from '@app/theme';

const schemes: { value: ThemeScheme; label: string }[] = [
  { value: 'default', label: 'Default' },
  { value: 'forest', label: 'Forest' },
  { value: 'sunset', label: 'Sunset' },
];

const swatches: { title: string; classes: string[] }[] = [
  {
    title: 'Primary',
    classes: ['bg-primary-1', 'bg-primary-2', 'bg-primary-3', 'bg-primary-4', 'bg-primary-5', 'bg-primary-6', 'bg-primary-7'],
  },
  {
    title: 'Success',
    classes: ['bg-success-1', 'bg-success-2', 'bg-success-3', 'bg-success-4', 'bg-success-5', 'bg-success-6', 'bg-success-7'],
  },
  {
    title: 'Warning',
    classes: ['bg-warning-1', 'bg-warning-2', 'bg-warning-3', 'bg-warning-4', 'bg-warning-5', 'bg-warning-6', 'bg-warning-7'],
  },
  {
    title: 'Danger',
    classes: ['bg-danger-1', 'bg-danger-2', 'bg-danger-3', 'bg-danger-4', 'bg-danger-5', 'bg-danger-6', 'bg-danger-7'],
  },
  {
    title: 'Info',
    classes: ['bg-info-1', 'bg-info-2', 'bg-info-3', 'bg-info-4', 'bg-info-5', 'bg-info-6', 'bg-info-7'],
  },
  {
    title: 'Rim',
    classes: ['bg-rim-1', 'bg-rim-2', 'bg-rim-3', 'bg-rim-4', 'bg-rim-5', 'bg-rim-6', 'bg-rim-7'],
  },
  {
    title: 'Word',
    classes: ['bg-word-1', 'bg-word-2', 'bg-word-3', 'bg-word-4', 'bg-word-5', 'bg-word-6', 'bg-word-7'],
  },
  {
    title: 'Backdrop',
    classes: ['bg-backdrop-1', 'bg-backdrop-2', 'bg-backdrop-3', 'bg-backdrop-4', 'bg-backdrop-5', 'bg-backdrop-6', 'bg-backdrop-7'],
  },
  {
    title: 'Fill',
    classes: ['bg-fill-1', 'bg-fill-2', 'bg-fill-3', 'bg-fill-4', 'bg-fill-5', 'bg-fill-6', 'bg-fill-7'],
  },
];

export function HomePage() {
  const { scheme, mode, setScheme, toggleMode } = useTheme();

  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Akir Omni Theme Preview</h2>
        <p className="mt-2 text-muted-foreground">
          Current: {scheme} / {mode}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button onClick={toggleMode} variant="outline" size="sm">
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </Button>
        <div className="flex gap-1.5">
          {schemes.map(s => (
            <Button key={s.value} onClick={() => setScheme(s.value)} variant={scheme === s.value ? 'default' : 'outline'} size="sm">
              {s.label}
            </Button>
          ))}
        </div>
      </div>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Button Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Color Palette</h3>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {swatches.map(({ title, classes }) => (
            <div key={title} className="space-y-2">
              <p className="text-sm font-medium text-foreground">{title}</p>
              <div className="space-y-1">
                {classes.map((cls, i) => (
                  <div key={cls} className="flex items-center gap-2">
                    <div className={`size-8 rounded ${cls}`} />
                    <span className="text-xs text-muted-foreground font-mono">{i + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h3 className="text-lg font-semibold text-foreground">Surfaces</h3>
        <div className="grid grid-cols-3 gap-3">
          <div className="rounded-lg border border-border bg-card p-4">
            <p className="text-sm font-medium text-card-foreground">Card</p>
            <p className="mt-1 text-xs text-muted-foreground">bg-card</p>
          </div>
          <div className="rounded-lg border border-border bg-muted p-4">
            <p className="text-sm font-medium text-muted-foreground">Muted</p>
            <p className="mt-1 text-xs text-muted-foreground">bg-muted</p>
          </div>
          <div className="rounded-lg border border-border bg-popover p-4">
            <p className="text-sm font-medium text-popover-foreground">Popover</p>
            <p className="mt-1 text-xs text-muted-foreground">bg-popover</p>
          </div>
        </div>
      </section>
    </div>
  );
}
