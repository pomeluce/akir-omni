import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { createStorage } from '@app/core';

export type ThemeScheme = 'default' | 'forest' | 'sunset';
export type ThemeMode = 'light' | 'dark';

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
  setScheme: (scheme: ThemeScheme) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<UseThemeReturn | null>(null);

function applyDOM(scheme: ThemeScheme, mode: ThemeMode) {
  const el = document.documentElement;
  if (scheme === 'default') delete el.dataset.scheme;
  else el.dataset.scheme = scheme;

  if (mode === 'light') delete el.dataset.theme;
  else el.dataset.theme = mode;
}

export function ThemeProvider({ children, defaultScheme = 'default', defaultMode = 'light', storageKey = 'theme' }: ThemeProviderProps) {
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

  useEffect(() => {
    applyDOM(state.scheme, state.mode);
  }, [state.scheme, state.mode]);

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

  const toggleMode = useCallback(() => {
    setState(prev => {
      const mode: ThemeMode = prev.mode === 'light' ? 'dark' : 'light';
      const next = { ...prev, mode };
      storage.set('state', next);
      return next;
    });
  }, [storage]);

  return <ThemeContext.Provider value={{ ...state, setScheme, setMode, toggleMode }}>{children}</ThemeContext.Provider>;
}

export function useTheme(): UseThemeReturn {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return ctx;
}
