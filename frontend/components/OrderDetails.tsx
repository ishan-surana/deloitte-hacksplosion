import React from "react";

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

const OrderDetails: React.FC<{ order: Order }> = ({ order }) => {
    const statusClass = order.orderStatus === "Shipped" ? "text-green-600" : order.orderStatus === "Processing" ? "text-yellow-600" : "text-red-600";
    return (
        <div className="border rounded-lg p-6 shadow-sm transition-all hover:shadow-md">
            <h2 className="text-2xl font-bold mb-4">Order #{order.id}</h2>
            <div className="space-y-2">
                <div className="flex justify-between">
                    <span className="text-gray-600">Customer:</span>
                    <span className="font-medium">{order.customerName}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{order.customerEmail}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">{order.customerPhone}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Shipping Address:</span>
                    <span className="font-medium">{order.shippingAddress}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Order Date:</span>
                    <span className="font-medium">{order.orderDate}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Date:</span>
                    <span className="font-medium">{order.deliveryDate}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Product IDs:</span>
                    <span className="font-medium">{order.productIds}</span>
                </div>
                <div className="flex justify-between">
                    <span className="text-gray-600">Status:</span>
                    <span className={`font-medium ${statusClass}`}>{order.orderStatus}</span>
                </div>
            </div>
        </div>
    );
};

export default OrderDetails;
