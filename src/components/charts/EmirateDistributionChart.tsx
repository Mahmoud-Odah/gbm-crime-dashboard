"use client";

import {
  Pie,
  PieChart,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend,
} from "recharts";
import { getCrimesByEmirate } from "@/lib/data";
import { useLanguage } from "@/contexts/LanguageContext";
import { useTheme } from "next-themes";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884D8",
  "#82CA9D",
  "#FFC658",
];

export function EmirateDistributionChart() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const data = getCrimesByEmirate();

  const chartData = data.map((item) => ({
    ...item,
    name:
      t[item.name.toLowerCase().replace(/\s+/g, "") as keyof typeof t] ||
      item.name,
  }));

  return (
    <ResponsiveContainer width="100%" height={350}>
      <PieChart>
        <Pie
          data={chartData}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {chartData.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
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
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
