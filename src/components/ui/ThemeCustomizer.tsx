import { useState, useEffect } from "react";
import { Settings, X, RefreshCw, Palette } from "lucide-react";
import { Theme, defaultTheme, presets, applyTheme } from "../../lib/theme";
import { Button } from "./Button";
import { motion, AnimatePresence } from "motion/react";

export function ThemeCustomizer() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>(defaultTheme);

  useEffect(() => {
    // Load theme from localStorage on mount
    const savedTheme = localStorage.getItem("shaheen-theme");
    if (savedTheme) {
      try {
        const parsed = JSON.parse(savedTheme);
        setCurrentTheme(parsed);
        applyTheme(parsed);
      } catch (e) {
        console.error("Failed to parse theme from local storage", e);
      }
    }
  }, []);

  const handleApplyTheme = (theme: Theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
    localStorage.setItem("shaheen-theme", JSON.stringify(theme));
  };

  const handleColorChange = (key: keyof Theme["colors"], value: string) => {
    const newTheme = {
      ...currentTheme,
      name: "Custom",
      colors: {
        ...currentTheme.colors,
        [key]: value,
      },
    };
    handleApplyTheme(newTheme);
  };

  const handleReset = () => {
    handleApplyTheme(defaultTheme);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 p-4 bg-[var(--color-heading)] text-white rounded-full shadow-2xl hover:scale-105 transition-transform flex items-center justify-center border-4 border-white/10"
        aria-label="Customize Theme"
      >
        <Palette className="w-6 h-6" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 left-0 h-full w-80 bg-[var(--color-surface)] shadow-2xl z-50 border-r border-[var(--color-border)] overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-bold text-[var(--color-heading)] flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[var(--color-primary)]" />
                  Theme
                </h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-[var(--color-background)] rounded-full text-[var(--color-muted)] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Presets */}
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-heading)] uppercase tracking-wider mb-4">
                    Presets
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {presets.map((preset) => (
                      <button
                        key={preset.name}
                        onClick={() => handleApplyTheme(preset)}
                        className={`text-left p-3 rounded-xl border-2 transition-all ${
                          currentTheme.name === preset.name
                            ? "border-[var(--color-primary)] bg-[var(--color-soft-primary)]"
                            : "border-[var(--color-border)] hover:border-[var(--color-primary)]"
                        }`}
                      >
                        <span className="text-xs font-bold text-[var(--color-heading)] block mb-2">
                          {preset.name}
                        </span>
                        <div className="flex gap-1">
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: preset.colors.primary }}
                          />
                          <div
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: preset.colors.secondary }}
                          />
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Custom Colors */}
                <div>
                  <h3 className="text-sm font-bold text-[var(--color-heading)] uppercase tracking-wider mb-4">
                    Custom Colors
                  </h3>
                  <div className="space-y-4">
                    {Object.entries(currentTheme.colors).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between">
                        <label className="text-sm text-[var(--color-text)] capitalize">
                          {key.replace(/([A-Z])/g, " $1").trim()}
                        </label>
                        <div className="flex items-center gap-2">
                          <input
                            type="color"
                            value={value}
                            onChange={(e) =>
                              handleColorChange(key as keyof Theme["colors"], e.target.value)
                            }
                            className="w-8 h-8 rounded cursor-pointer border-0 p-0"
                          />
                          <span className="text-xs text-[var(--color-muted)] font-mono uppercase w-16">
                            {value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-6 border-t border-[var(--color-border)]">
                  <Button
                    onClick={handleReset}
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 text-[var(--color-heading)] border-[var(--color-border)] hover:bg-[var(--color-background)]"
                  >
                    <RefreshCw className="w-4 h-4" />
                    Reset to Default
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
