"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";
import { getSeverityData } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

export function SeverityChart() {
  const { t, direction } = useLanguage();
  const { theme } = useTheme();
  const data = getSeverityData();

  const chartData = data.map((item) => ({
    ...item,
    name: t[item.name as keyof typeof t] || item.name,
  }));

  return (
    <ResponsiveContainer width="100%" height={450}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 20, left: -25, bottom: 0 }}
      >
        <XAxis
          dataKey="name"
          stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"}
          fontSize={12}
        />
        <YAxis
          stroke={theme === "dark" ? "#9CA3AF" : "#6B7280"}
          fontSize={12}
        />
        <Tooltip
          contentStyle={{
            backgroundColor: theme === "dark" ? "#1F2937" : "#FFFFFF",
            border:
              theme === "dark" ? "1px solid #374151" : "1px solid #E5E7EB",
            borderRadius: "6px",
          }}
          labelStyle={{
            color: theme === "dark" ? "#FFFFFF" : "#111827",
          }}
          itemStyle={{
            color: theme === "dark" ? "#FFFFFF" : "#111827",
          }}
        />
        <Bar dataKey="value" radius={[4, 4, 0, 0]}>
          {chartData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
