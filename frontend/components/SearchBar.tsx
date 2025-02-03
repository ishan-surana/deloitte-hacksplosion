"use client";

import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { FormEvent } from "react";

export function SearchBar() {
    const router = useRouter();

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const search = formData.get("search") as string;
        router.push(`/orders?search=${encodeURIComponent(search)}`);
        console.log("abcd");
    };

    return (
        <form onSubmit={handleSubmit} className="w-full">
            <div className="flex w-full items-center gap-2">
                <Input name="search" placeholder="Search by Order ID..." className="flex-1" />
                <Button type="submit" size="icon">
                    <Search className="h-4 w-4" />
                    <span className="sr-only">Search</span>
                </Button>
            </div>
        </form>
    );
}
