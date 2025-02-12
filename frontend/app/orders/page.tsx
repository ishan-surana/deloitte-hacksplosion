"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import OrderDetails from "@/components/OrderDetails";
import { SearchBar } from "@/components/SearchBar";

interface Order {
    id: number;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    shippingAddress: string;
    orderDate: string;
    productIds: string;
    deliveryDate: string;
    orderStatus: "Shipped" | "Processing" | "Pending";
}

async function fetchOrderDetails(orderId: string): Promise<Order | null> {
    try {
        const response = await fetch(`https://deloitte-hacksplosion.onrender.com/api/order/${orderId}`);
        if (!response.ok) {
            throw new Error("Order not found!");
        }
        const data = await response.json();
        if (!data['error']) return data;
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
}

export const dynamic = "force-dynamic";

export default function OrderDetailsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <OrderDetailsWrapper />
        </Suspense>
    );
}

function OrderDetailsWrapper() {
    const searchParams = useSearchParams();
    const searchTerm = searchParams.get("search");

    const [orderDetails, setOrderDetails] = useState<Order | null>(null);

    useEffect(() => {
        if (searchTerm) {
            fetchOrderDetails(searchTerm).then((data) => setOrderDetails(data));
        }
    }, [searchTerm]);

    return (
        <main className="container px-4 py-8 items-center w-fit">
            <div className="mx-auto max-w-2xl space-y-6 w-screen">
                <SearchBar />
                {orderDetails ? (
                    <OrderDetails order={orderDetails} />
                ) : (
                    searchTerm && (
                        <div className="text-center py-8 text-gray-500">
                            No order found with ID {searchTerm}!
                        </div>
                    )
                )}
            </div>
        </main>
    );
}
