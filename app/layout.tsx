import type {Metadata} from "next";
import "./globals.css";
import {ThemeProvider} from "@/components/theme-provider";
import __Navbar from "@/components/elemets/navbar";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
    title: "Kopi Bery",
    description: "Coming soon Kopibery.id Official",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <__Navbar/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
