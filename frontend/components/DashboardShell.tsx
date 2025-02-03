"use client";

import type React from "react";
import ErrorLogs from "@/components/ErrorLogs";
import { Button } from "@/components/ui/button";
import { Sidebar, SidebarContent, SidebarTrigger, useSidebar } from "@/components/ui/sidebar";
import { MenuIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function DashboardShell({ children }: { children: React.ReactNode }) {
    const { open } = useSidebar();
    const pathname = usePathname();

    return (
        <div className="flex h-screen w-screen">
            <Sidebar className={`flex-shrink-0 transition-all duration-300 overflow-hidden ${open ? "w-80" : "w-0"}`}>
                <SidebarContent>
                    <div className="p-4">
                        <ErrorLogs />
                    </div>
                </SidebarContent>
            </Sidebar>
            <main className={`w-full transition-all duration-300 ${open ? "ml-20" : "ml-0"}`}>
                <div className="h-full">
                    <div className="border-b p-4 sticky top-0 bg-background z-10 flex flex-row justify-between items-center">
                        <SidebarTrigger>
                            <Button variant="outline" size="icon">
                                <MenuIcon className="h-4 w-4" />
                                <span className="sr-only">Toggle Error Logs</span>
                            </Button>
                        </SidebarTrigger>
                        <div className="flex flex-row gap-8 mx-auto">
                            <Link href="/" className={`relative text-lg font-medium transition-all duration-300 hover:text-black ${pathname === "/" ? "text-black" : "text-gray-500"}`}>
                                Home
                                {pathname === "/" && <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black transition-all duration-300 origin-bottom-left animate-underline" />}
                            </Link>

                            <Link href="/orders" className={`relative text-lg font-medium transition-all duration-300 hover:text-black ${pathname.startsWith("/orders") ? "text-black" : "text-gray-500"}`}>
                                Orders
                                {pathname.startsWith("/orders") && <span className="absolute left-0 -bottom-1 h-0.5 w-full bg-black transition-all duration-300 origin-bottom-left animate-underline" />}
                            </Link>
                        </div>
                    </div>

                    <div className="p-4 flex flex-col justify-center items-center">{children}</div>
                </div>
            </main>
        </div>
    );
}
