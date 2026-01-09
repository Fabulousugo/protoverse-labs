import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Protoverse Brand Colors
        'protoverse-white': '#FFFFFF',
        'void-black': '#000000',
        'nebula-blue': '#0047BA',
        'quantum-cyan': '#5DF0DE',
        'deep-space': '#0D1B3E',
        'hologram-teal': '#0FF2E3',
        'stellar-purple': '#6C63FF',
        'solar-gold': '#F2C94C',
        'orbit-gray': '#B7BCC6',
        
        // Semantic colors for shadcn compatibility
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#0047BA",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#5DF0DE",
          foreground: "#000000",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "#6C63FF",
          foreground: "#FFFFFF",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'horizon-gradient': 'linear-gradient(to right, #5DF0DE, #0047BA)',
        'aurora-gradient': 'linear-gradient(135deg, #0FF2E3, #6C63FF, #0047BA)',
        'space-fade': 'linear-gradient(to bottom, #000000, #0D1B3E, #0047BA)',
      },
      fontFamily: {
        'heading': ['var(--font-heading)', 'Arial', 'sans-serif'],
        'body': ['var(--font-body)', 'Arial', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #5DF0DE, 0 0 10px #5DF0DE' },
          '100%': { boxShadow: '0 0 10px #5DF0DE, 0 0 20px #5DF0DE, 0 0 30px #5DF0DE' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};

export default config;
