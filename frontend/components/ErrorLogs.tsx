import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface LogEntry {
    id: number;
    timestamp: string;
    message: string;
    status: "success" | "error";
}

export default function ErrorLogs() {
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchLogs = async () => {
            try {
                const response = await fetch('https://deloitte-hacksplosion.onrender.com/api/logs');
                if (!response.ok) {
                    throw new Error('Failed to fetch logs');
                }
                const data = await response.json();
                console.log(data);
                setLogs(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchLogs();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>System Logs</CardTitle>
                <CardDescription>Recent system logs</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {logs
                        .map((log) => (
                            <li key={log.id} className="border-b pb-2">
                                <p className={`font-semibold ${log.status === 'error' ? 'text-destructive' : 'text-green-600'}`}>
                                    {log.message}
                                </p>
                                <p className="text-sm text-muted-foreground">{log.timestamp}</p>
                            </li>
                        ))
                        .reverse()}
                </ul>
            </CardContent>
        </Card>
    );
}
