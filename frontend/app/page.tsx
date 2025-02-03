import { AnalyticsCharts } from "@/components/AnalyticsCharts";

export default function Home() {
    return (
        <div className="flex flex-col h-full items-center w-fit">
            <div className="w-full max-w-4xl">
                <div className="flex-1">
                    <AnalyticsCharts />
                </div>
            </div>
        </div>
    );
}
