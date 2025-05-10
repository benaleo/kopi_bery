const config: {
    plugins: { handler: () => void }[]; theme: {
        extend: {
            keyframes: { "accordion-up": { from: { height: string }; to: { height: string } }; "accordion-down": { from: { height: string }; to: { height: string } } };
            fontFamily: {
                psemibold: string[];
                pextralight: string[];
                plight: string[];
                pthin: string[];
                pregular: string[];
                pblack: string[];
                pextrabold: string[];
                pmedium: string[];
                pbold: string[]
            };
            borderRadius: { md: string; sm: string; lg: string };
            colors: {
                border: string;
                ring: string;
                popover: { foreground: string; DEFAULT: string };
                foreground: string;
                accent: { foreground: string; DEFAULT: string };
                destructive: { foreground: string; DEFAULT: string };
                secondary: { foreground: string; DEFAULT: string };
                input: string;
                background: string;
                sidebar: { border: string; "primary-foreground": string; ring: string; foreground: string; accent: string; DEFAULT: string; "accent-foreground": string; primary: string };
                muted: { foreground: string; DEFAULT: string };
                chart: { "1": string; "2": string; "3": string; "4": string; "5": string };
                card: { foreground: string; DEFAULT: string };
                primary: { foreground: string; DEFAULT: string }
            };
            animation: { "accordion-up": string; "accordion-down": string }
        }
    }; darkMode: string[]; content: string[]
} = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./assets/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                pthin: [
                    'Poppins-Thin',
                    'sans-serif'
                ],
                pextralight: [
                    'Poppins-ExtraLight',
                    'sans-serif'
                ],
                plight: [
                    'Poppins-Light',
                    'sans-serif'
                ],
                pregular: [
                    'Poppins-Regular',
                    'sans-serif'
                ],
                pmedium: [
                    'Poppins-Medium',
                    'sans-serif'
                ],
                psemibold: [
                    'Poppins-SemiBold',
                    'sans-serif'
                ],
                pbold: [
                    'Poppins-Bold',
                    'sans-serif'
                ],
                pextrabold: [
                    'Poppins-ExtraBold',
                    'sans-serif'
                ],
                pblack: [
                    'Poppins-Black',
                    'sans-serif'
                ]
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'hsl(var(--sidebar-background))',
                    foreground: 'hsl(var(--sidebar-foreground))',
                    primary: 'hsl(var(--sidebar-primary))',
                    'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
                    accent: 'hsl(var(--sidebar-accent))',
                    'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
                    border: 'hsl(var(--sidebar-border))',
                    ring: 'hsl(var(--sidebar-ring))'
                }
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            keyframes: {
                'accordion-down': {
                    from: {
                        height: '0'
                    },
                    to: {
                        height: 'var(--radix-accordion-content-height)'
                    }
                },
                'accordion-up': {
                    from: {
                        height: 'var(--radix-accordion-content-height)'
                    },
                    to: {
                        height: '0'
                    }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
export default config;
