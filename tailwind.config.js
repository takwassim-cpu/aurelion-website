/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // AURELION Luxury Colors
        obsidian: "#1A1A1A",
        alabaster: "#FAF9F6",
        champagne: "#C9A962",
        "soft-gold": "#D4B978",
        "pale-gold": "#E8DCC4",
        "warm-gray": "#6B6B6B",
        "light-gray": "#E5E5E5",
        "mist-gray": "#F5F4F0",
        sage: "#9CAF92",
        "dusty-rose": "#C4A4A4",
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '80px', fontWeight: '300' }],
        'h1': ['48px', { lineHeight: '56px', fontWeight: '400' }],
        'h2': ['32px', { lineHeight: '40px', fontWeight: '400' }],
        'h3': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '300' }],
        'body': ['16px', { lineHeight: '26px', fontWeight: '400' }],
        'caption': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'label': ['12px', { lineHeight: '16px', fontWeight: '500', letterSpacing: '0.2em' }],
      },
      spacing: {
        'section': '120px',
        'section-tablet': '80px',
        'section-mobile': '60px',
      },
      letterSpacing: {
        'luxury': '0.15em',
        'label': '0.2em',
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'luxury': '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        'luxury-hover': '0 35px 60px -12px rgba(0, 0, 0, 0.25)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards",
        "fade-in": "fade-in 0.8s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards",
        "scale-in": "scale-in 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0) forwards",
        "shimmer": "shimmer 2s linear infinite",
        "float": "float 3s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1.0)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
