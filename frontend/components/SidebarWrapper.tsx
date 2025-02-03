"use client";

import type React from "react";
import { SidebarProvider, SidebarTrigger, Sidebar, SidebarContent } from "@/components/ui/sidebar";
import ErrorLogs from "./ErrorLogs";

export function SidebarWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider defaultOpen={true}>
            <div className="flex h-screen">
                <Sidebar className="w-1/3">
                    <SidebarContent>
                        <ErrorLogs />
                    </SidebarContent>
                </Sidebar>
                <main className="flex-1 overflow-auto">
                    <div className="p-4">
                        <SidebarTrigger className="mb-4">Toggle Error Logs</SidebarTrigger>
                    </div>
                    {children}
                </main>
            </div>
        </SidebarProvider>
    );
}
