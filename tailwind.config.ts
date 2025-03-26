import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/app/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ألوان الوضع الفاتح
        light: {
          background: "#FFFFFF", // أبيض
          foreground: "#1F2937", // رمادي داكن
          border: "#E5E7EB", // رمادي فاتح
          input: "#F3F4F6", // رمادي فاتح جدًا
          ring: "#3B82F6", // أزرق
          primary: "#3B82F6", // أزرق
          secondary: "#A855F7", // بنفسجي
        },
        // ألوان الوضع الداكن
        dark: {
          background: "#111827", // رمادي داكن جدًا
          foreground: "#F3F4F6", // رمادي فاتح
          border: "#374151", // رمادي داكن
          input: "#1F2937", // رمادي داكن
          ring: "#60A5FA", // أزرق فاتح
          primary: "#60A5FA", // أزرق فاتح
          secondary: "#9333EA", // بنفسجي داكن
        },
        // ألوان مخصصة
        custom: {
          light: "#F5EFE7", // اللون للوضع الفاتح
          dark: "#2C2C2C", // اللون المقابل للوضع المظلم
        },
        // إضافة background
        background: {
          DEFAULT: "var(--background)", // استخدم المتغير CSS المحدد في globals.css
        },
                // إضافة foreground
                foreground: {
                  DEFAULT: "var(--foreground)", // استخدم المتغير CSS المحدد في globals.css
                },
        // إضافة border-border
        border: {
          DEFAULT: "var(--border)", // استخدم المتغير CSS المحدد في globals.css
        },
      },
      // إضافة outlineColor لتعريف outline-ring/50
      outlineColor: {
        ring: {
          50: "var(--ring)", // تعريف outline-ring/50
        },      },
    },
  },
  plugins: [],
};

export default config;