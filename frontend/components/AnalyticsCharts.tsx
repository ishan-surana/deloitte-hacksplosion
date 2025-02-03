"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bar, BarChart, Line, LineChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const revenueData = [
    { name: "Jan", total: 4000 },
    { name: "Feb", total: 3000 },
    { name: "Mar", total: 2000 },
    { name: "Apr", total: 2780 },
    { name: "May", total: 1890 },
    { name: "Jun", total: 2390 },
];

const userActivityData = [
    { name: "Mon", active: 3000 },
    { name: "Tue", active: 3500 },
    { name: "Wed", active: 4000 },
    { name: "Thu", active: 3700 },
    { name: "Fri", active: 3200 },
    { name: "Sat", active: 2800 },
    { name: "Sun", active: 2500 },
];

const marketShareData = [
    { name: "Product A", value: 400 },
    { name: "Product B", value: 300 },
    { name: "Product C", value: 300 },
    { name: "Product D", value: 200 },
];

export function AnalyticsCharts() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
                <CardHeader>
                    <CardTitle>Revenue</CardTitle>
                    <CardDescription>Monthly revenue overview</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{
                            total: {
                                label: "Revenue",
                                color: "hsl(var(--chart-1))",
                            },
                        }}
                        className="w-full h-[300px]"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={revenueData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Bar dataKey="total" fill="var(--color-total)" radius={[4, 4, 0, 0]} />
                                <ChartTooltip content={<ChartTooltipContent />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>User Activity</CardTitle>
                    <CardDescription>Daily active users</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{
                            active: {
                                label: "Active Users",
                                color: "hsl(var(--chart-2))",
                            },
                        }}
                        className="w-full h-[300px]"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={userActivityData}>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Line type="monotone" dataKey="active" stroke="var(--color-active)" />
                                <ChartTooltip content={<ChartTooltipContent />} />
                            </LineChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>

            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle>Market Share</CardTitle>
                    <CardDescription>Product distribution</CardDescription>
                </CardHeader>
                <CardContent>
                    <ChartContainer
                        config={{
                            value: {
                                label: "Market Share",
                                color: "hsl(var(--chart-3))",
                            },
                        }}
                        className="w-full h-[300px]"
                    >
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={marketShareData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="var(--color-value)" label />
                                <ChartTooltip content={<ChartTooltipContent />} />
                            </PieChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </CardContent>
            </Card>
        </div>
    );
}
