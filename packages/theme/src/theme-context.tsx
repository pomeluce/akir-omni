import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { createStorage } from '@app/core';

export type ThemeScheme = 'default' | 'forest' | 'sunset';
export type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  scheme: ThemeScheme;
  mode: ThemeMode;
}

export interface ThemeProviderProps {
  children: ReactNode;
  defaultScheme?: ThemeScheme;
  defaultMode?: ThemeMode;
  storageKey?: string;
}

export interface UseThemeReturn {
  scheme: ThemeScheme;
  mode: ThemeMode;
  resolvedMode: 'light' | 'dark';
  setScheme: (scheme: ThemeScheme) => void;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<UseThemeReturn | null>(null);

function applyDOM(scheme: ThemeScheme, resolvedMode: 'light' | 'dark') {
  const el = document.documentElement;
  if (scheme === 'default') delete el.dataset.scheme;
  else el.dataset.scheme = scheme;

  if (resolvedMode === 'light') delete el.dataset.theme;
  else el.dataset.theme = resolvedMode;
}

export function ThemeProvider({ children, defaultScheme = 'default', defaultMode = 'system', storageKey = 'theme' }: ThemeProviderProps) {
  const storage = useMemo(() => createStorage<ThemeState>({ type: 'local', prefix: storageKey }), [storageKey]);

  const [state, setState] = useState<ThemeState>(() => {
    if (typeof window === 'undefined') {
      return { scheme: defaultScheme, mode: defaultMode };
    }
    const stored = storage.get('state');
    return {
      scheme: stored?.scheme ?? defaultScheme,
      mode: stored?.mode ?? defaultMode,
    };
  });

  const [systemIsDark, setSystemIsDark] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemIsDark(mq.matches);
    const handler = (e: MediaQueryListEvent) => setSystemIsDark(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const resolvedMode: 'light' | 'dark' = state.mode === 'system' ? (systemIsDark ? 'dark' : 'light') : state.mode;

  useEffect(() => {
    applyDOM(state.scheme, resolvedMode);
  }, [state.scheme, resolvedMode]);

  const setScheme = useCallback(
    (scheme: ThemeScheme) => {
      setState(prev => {
        const next = { ...prev, scheme };
        storage.set('state', next);
        return next;
      });
    },
    [storage],
  );

  const setMode = useCallback(
    (mode: ThemeMode) => {
      setState(prev => {
        const next = { ...prev, mode };
        storage.set('state', next);
        return next;
      });
    },
    [storage],
  );

  return <ThemeContext.Provider value={{ ...state, resolvedMode, setScheme, setMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): UseThemeReturn {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
