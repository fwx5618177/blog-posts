import React, { useState, useEffect } from 'react';
import { ThemeType } from '../types';
import ThemeContextInstance, { useTheme } from './ThemeContextInstance';

export { useTheme };

// Theme provider props
interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: ThemeType;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = 'light',
}) => {
  // Available themes
  const availableThemes: ThemeType[] = [
    'light',
    'dark',
    'sepia',
    'high-contrast',
    'dark-high-contrast',
  ];

  // Get initial theme from localStorage or use default
  const [theme, setTheme] = useState<ThemeType>(() => {
    // Try to get theme from localStorage
    const savedTheme = localStorage.getItem('theme') as ThemeType;

    if (savedTheme && availableThemes.includes(savedTheme)) {
      return savedTheme;
    }

    // Check if user prefers dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDarkMode ? 'dark' : defaultTheme;
  });

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => {
      // Cycle through available themes
      const currentIndex = availableThemes.indexOf(prevTheme);
      const nextIndex = (currentIndex + 1) % availableThemes.length;
      return availableThemes[nextIndex];
    });
  };

  // Update data-theme attribute and localStorage when theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (e: MediaQueryListEvent) => {
      // Only change theme if user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    // Add event listener for theme change
    mediaQuery.addEventListener('change', handleChange);

    // Clean up
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Provide theme context to children
  return (
    <ThemeContextInstance.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
        availableThemes,
      }}
    >
      {children}
    </ThemeContextInstance.Provider>
  );
};
