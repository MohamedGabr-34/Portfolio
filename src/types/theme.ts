export type Theme = 'dark' | 'light' | 'midnight' | 'sunset' | 'forest' | 'nord' | 'rose'
export interface ThemeContextType {
  theme: Theme;
  applyTheme: (value: Theme) => void;
}
