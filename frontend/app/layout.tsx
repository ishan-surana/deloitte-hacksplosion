import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DashboardShell } from "@/components/DashboardShell"; // Adjust the path as needed
import type React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Analytics Dashboard",
    description: "Analytics dashboard with error logs sidebar",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <SidebarProvider>
                    <DashboardShell>{children}</DashboardShell>
                </SidebarProvider>
            </body>
        </html>
    );
}
