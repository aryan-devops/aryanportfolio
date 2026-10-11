import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'dark' | 'light' | 'auto';
type ActiveTheme = 'dark' | 'light';

interface ThemeContextType {
  mode: ThemeMode;
  theme: ActiveTheme;
  isDaytime: boolean;
  timeString: string;
  setMode: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('portfolio-theme-mode');
    return (saved as ThemeMode) || 'auto';
  });

  const [currentTime, setCurrentTime] = useState(new Date());

  // Check if current hour is daytime (6:00 AM to 6:00 PM)
  const hour = currentTime.getHours();
  const isDaytime = hour >= 6 && hour < 18;

  // Active calculated theme
  const effectiveTheme: ActiveTheme = 
    mode === 'auto' ? (isDaytime ? 'light' : 'dark') : mode;

  // Update clock every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  // Sync DOM classes and localStorage
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    if (effectiveTheme === 'light') {
      root.classList.add('light');
      root.classList.remove('dark');
      body.classList.add('light');
      body.classList.remove('dark');
    } else {
      root.classList.add('dark');
      root.classList.remove('light');
      body.classList.add('dark');
      body.classList.remove('light');
    }
  }, [effectiveTheme]);

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    localStorage.setItem('portfolio-theme-mode', newMode);
  };

  const toggleTheme = () => {
    if (mode === 'auto') {
      // If currently auto, switch to opposite of current effective theme
      setMode(effectiveTheme === 'dark' ? 'light' : 'dark');
    } else if (mode === 'dark') {
      setMode('light');
    } else {
      setMode('auto');
    }
  };

  const timeString = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <ThemeContext.Provider
      value={{
        mode,
        theme: effectiveTheme,
        isDaytime,
        timeString,
        setMode,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
