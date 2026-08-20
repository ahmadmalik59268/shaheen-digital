export interface Theme {
  name: string;
  colors: {
    primary: string;
    primaryHover: string;
    secondary: string;
    background: string;
    surface: string;
    heading: string;
    text: string;
    muted: string;
    border: string;
    softPrimary: string;
    softSecondary: string;
  };
}

export const defaultTheme: Theme = {
  name: "Default (Light Premium)",
  colors: {
    primary: "#2563EB",
    primaryHover: "#1D4ED8",
    secondary: "#14B8A6",
    background: "#F8FAFC",
    surface: "#FFFFFF",
    heading: "#0F172A",
    text: "#475569",
    muted: "#64748B",
    border: "#E2E8F0",
    softPrimary: "#EFF6FF",
    softSecondary: "#F0FDFA",
  },
};

export const presets: Theme[] = [
  defaultTheme,
  {
    name: "Ocean Blue",
    colors: {
      ...defaultTheme.colors,
      primary: "#2563EB",
      primaryHover: "#1D4ED8",
      secondary: "#14B8A6",
    },
  },
  {
    name: "Emerald",
    colors: {
      ...defaultTheme.colors,
      primary: "#059669",
      primaryHover: "#047857",
      secondary: "#10B981",
      softPrimary: "#ECFDF5",
      softSecondary: "#D1FAE5",
    },
  },
  {
    name: "Royal Blue",
    colors: {
      ...defaultTheme.colors,
      primary: "#4F46E5",
      primaryHover: "#4338CA",
      secondary: "#6366F1",
      softPrimary: "#EEF2FF",
      softSecondary: "#E0E7FF",
    },
  },
  {
    name: "Orange",
    colors: {
      ...defaultTheme.colors,
      primary: "#EA580C",
      primaryHover: "#C2410C",
      secondary: "#F59E0B",
      softPrimary: "#FFF7ED",
      softSecondary: "#FEF3C7",
    },
  },
  {
    name: "Rose",
    colors: {
      ...defaultTheme.colors,
      primary: "#E11D48",
      primaryHover: "#BE123C",
      secondary: "#F43F5E",
      softPrimary: "#FFF1F2",
      softSecondary: "#FFE4E6",
    },
  },
];

export function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.style.setProperty("--color-primary", theme.colors.primary);
  root.style.setProperty("--color-primary-hover", theme.colors.primaryHover);
  root.style.setProperty("--color-secondary", theme.colors.secondary);
  root.style.setProperty("--color-background", theme.colors.background);
  root.style.setProperty("--color-surface", theme.colors.surface);
  root.style.setProperty("--color-heading", theme.colors.heading);
  root.style.setProperty("--color-text", theme.colors.text);
  root.style.setProperty("--color-muted", theme.colors.muted);
  root.style.setProperty("--color-border", theme.colors.border);
  root.style.setProperty("--color-soft-primary", theme.colors.softPrimary);
  root.style.setProperty("--color-soft-secondary", theme.colors.softSecondary);
}
