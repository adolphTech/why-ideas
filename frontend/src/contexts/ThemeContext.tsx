import React, { createContext, useEffect, useState } from 'react';

export type Theme = 'dark' | 'light';

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('dark');

  useEffect(() => {
    // On first mount decide theme: saved -> saved, else dark default
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme === 'light' || savedTheme === 'dark') {
      setThemeState(savedTheme);
      return;
    }
    // default to dark; if you wanted system preference uncomment below
    // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // const initial = prefersDark ? 'dark' : 'light';
    const initial: Theme = 'dark';
    setThemeState(initial);
    localStorage.setItem('theme', initial);
  }, []);

  useEffect(() => {
    // Update document root and body classes for broader theming
    const root = document.documentElement;
    const body = document.body;
    [root, body].forEach(el => {
      el.classList.remove('light', 'dark');
      el.classList.add(theme);
    });
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  const toggleTheme = () => {
    setThemeState(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const value = {
    theme,
    toggleTheme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export context for use in hook
export { ThemeContext };