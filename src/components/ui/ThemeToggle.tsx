"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="outline"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="  rounded-full bg-primary-foreground top-4 right-4 w-8 h-8 p-2 border-0 md:border sm:w-auto sm:h-auto"
    >
      {/* الأيقونة تظهر دائمًا */}
      <span className="text-lg">
        {theme === "dark" ? "☀️" : "🌙"}
      </span>
      {/* النص يظهر فقط في الشاشات الكبيرة */}
      <span className="hidden sm:inline ml-2">
        {theme === "dark" ? "Light" : "Dark"}
      </span>
    </Button>
  );
}