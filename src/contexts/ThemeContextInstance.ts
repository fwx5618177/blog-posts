import { createContext, useContext } from 'react';
import { ThemeContextType } from '../types';

// Create the theme context with default values
const ThemeContextInstance = createContext<ThemeContextType>({
  theme: 'light',
  setTheme: _theme => {
    console.warn('setTheme was called without a provider');
  },
  toggleTheme: () => {
    console.warn('toggleTheme was called without a provider');
  },
  availableThemes: ['light', 'dark', 'sepia', 'high-contrast', 'dark-high-contrast'],
});

// Custom hook for using the theme context
export const useTheme = () => useContext(ThemeContextInstance);

export default ThemeContextInstance;
